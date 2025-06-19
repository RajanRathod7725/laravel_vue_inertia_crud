<?php

namespace App\Http\Controllers\API;

use App\Models\Otp;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Mail\UserVerificationMail;
use App\Models\User;
use App\Models\UserVerification;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Exception;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Mail\ForgotPassword;

class AuthAPI extends Controller
{

    public function sendOTP(Request $request){
        try{
            $validator = Validator::make($request->all(), [
                'phone'=> 'required',
            ]);

            $validation_status = $validator->fails();
            if ($validation_status) {
                throw new Exception($validator->errors());
            }
            if($request->is_validate_phone){
                $user = User::where('phone',$request->phone)->first();
                if(!isset($user)){
                    throw new Exception('Phone number not found. Try again or register now to get started.');
                }
            }

            $otp = substr(str_shuffle("123456789"), 0, 4);
            if(env('APP_ENV')=='production'){
                $this->sendSMS($request->phone, $otp);
            }

            Otp::updateOrCreate(
                ['phone' => $request->phone],
                ['otp' => $otp]
            );

            return response()->json($this->generate_response(
                array(
                    "message" => "A OTP(One Time Password) has been sent to given phone. Please enter the OTP in the form for further process",
                    "data"    => [],
                ),
                'SUCCESS'
            ));


        } catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function register(Request $request)
    {

        $data = [];

        try {

            $validator = Validator::make($request->all(), [
                'type'=> 'required',
                'customer_type'=> 'required_if:type,0',
                'name'=> 'required',
                'phone'=> 'required|unique:users,phone',
                'email'=> 'required',
                'city'=> 'required_if:type,1',
                'otp'=> 'required',
            ]);
            $validation_status = $validator->fails();
            if ($validation_status) {
                throw new Exception($validator->errors());
            }

            $otp = OTP::where('phone',$request->phone)->where('otp',$request->otp)->first();
            if(!isset($otp)){
                throw new Exception('Incorrect OTP!');
            }else{
                OTP::where('phone',$request->phone)->where('otp',$request->otp)->delete();
            }

            //Create User
            $user = [
                'slack' => $this->generate_slack('users'),
                'type' => $request->type,
                'customer_type' => $request->customer_type!=null?$request->customer_type:NULL,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'city' => $request->city,
                'approve_status' => 1,
                'status' => 1,
            ];
            $created_user = User::create($user);

            auth()->login($created_user);
            $user = auth()->user();
            $data['access_token'] = $user->createToken('Token')->plainTextToken;
            $data['user'] = new UserResource(auth()->user());
            $data['paginate_limit'] = config('constants.pagination.items_per_page');

            return response()->json($this->generate_response(
                array(
                    "message" => "Your account has been successfully created!",
                    "data"    => $data,
                ),
                'SUCCESS'
            ));

        } catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }

    }

    public function login(Request $request)
    {

        $data = [];

        try {

            $validator = Validator::make($request->all(), [
                'phone' => 'required',
                'otp'=> 'required',
            ]);

            $validation_status = $validator->fails();
            if ($validation_status) {
                throw new Exception($validator->errors());
            }

            $otp = OTP::where('phone',$request->phone)->where('otp',$request->otp)->first();
            if(!isset($otp)){
                throw new Exception('Incorrect OTP!');
            }else{
                OTP::where('phone',$request->phone)->where('otp',$request->otp)->delete();
            }

            $user_data = User::where('phone',$request->phone)->first();
            auth()->login($user_data);
            $user = auth()->user();
            $data['access_token'] = $user->createToken('Token')->plainTextToken;
            $data['user'] = new UserResource(auth()->user());
            $data['paginate_limit'] = config('constants.pagination.items_per_page');

            return response()->json($this->generate_response(
                array(
                    "message" => "Logged In Successfully!",
                    "data"    => $data,
                ),
                'SUCCESS'
            ));

        } catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function forgot_password(Request $request){
        $data = [];

        try {

            $validator = Validator::make($request->all(), [
                'email' => 'required|email|max:36',
            ]);

            $validation_status = $validator->fails();
            if ($validation_status) {
                throw new Exception($validator->errors());
            }
            $email = $request->email;
            $reset_tries = 0;

            $user_data = User::select('id', 'slack', 'email', 'password_reset_max_tries', 'password_reset_last_tried_on')->where('email', $email)->first();
            if (!$user_data) {
                throw new Exception("There is no user with email: " . $email);
            }
            if ($user_data->password_reset_last_tried_on != "") {
                $current_date = date("Y-m-d");
                $last_tried_date = date("Y-m-d", strtotime($user_data->password_reset_last_tried_on));

                if ($last_tried_date == $current_date && $user_data->password_reset_max_tries >= 3) {
                    throw new Exception("You have already tried 3 times today. Please contact administrator for password reset.", 400);
                }

                if ($last_tried_date == $current_date && $user_data->password_reset_max_tries < 3) {
                    $reset_tries = $user_data->password_reset_max_tries + 1;
                } else if ($last_tried_date != $current_date) {
                    $reset_tries = $reset_tries + 1;
                }
            } else {
                $reset_tries = $reset_tries + 1;
            }

            $password_token = Str::random(50);
            DB::beginTransaction();

            Mail::to($user_data->email)->send(new ForgotPassword(['user_slack' => $user_data->slack, 'password_reset_token' => $password_token]));

            $password_array = [
                "password_reset_token" => $password_token,
                "password_reset_max_tries" => $reset_tries,
                "password_reset_last_tried_on" => now()
            ];

            $data = User::where('id', $user_data->id)
                ->update($password_array);

            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Password reset email sent",
                    "data"    => $data
                ),
                'SUCCESS'
            ));

        }
        catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function reset_password(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'new_password' => "alpha_dash|min:6|max:100|confirmed",
            ]);
            $validation_status = $validator->fails();
            if ($validation_status) {
                throw new Exception($validator->errors());
            }

            $user_slack = $request->user_slack;
            $password_reset_token = $request->password_reset_token;

            if (empty($user_slack) || empty($password_reset_token)) {
                throw new Exception("Invalid request", 400);
            }

            $user_data = User::select('slack')->where([
                ['slack', '=', $user_slack],
                ['password_reset_token', '=', $password_reset_token],
            ])->first();
            if (!$user_data) {
                throw new Exception("Invalid request");
            }

            $new_password_hashed_password = Hash::make($request->new_password);
            $new_password_confirmation_hashed_password = Hash::make($request->new_password_confirmation);

            //check hashed password matches
            if (Hash::check($request->new_password_confirmation, $new_password_hashed_password) == false) {
                throw new Exception("Passwords doesn't match");
            }

            $user = array(
                "password" => $new_password_hashed_password,
                "password_reset_token" => "",
                "password_reset_max_tries" => 0,
                "password_reset_last_tried_on" => null,
                "verified_at" => now(),
                "status" => 1,
            );

            $data = User::where('slack', $user_data->slack)
                ->update($user);

            return response()->json($this->generate_response(
                array(
                    "message" => "Password updated successfully",
                    "data"    => $data
                ),
                'SUCCESS'
            ));
        } catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function user()
    {
        $data = [];
        try {

            if(auth()->check()){
                $data['user'] = UserResource::find(auth()->user()->id);
            }

            return response()->json($this->generate_response(
                array(
                    "message" => "Logged In User",
                    "data"    => $data,
                ),
                'SUCCESS'
            ));


        } catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function logout(Request $request)
    {
        try{

            $token = $request->user()->token();
            $token->revoke();

            return response()->json($this->generate_response(
                array(
                    "message" => "Logged Out Successfully",
                    "data"    => [],
                ),
                'SUCCESS'
            ));

        } catch (Exception $e) {
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }

    }

    private function sendSMS($phone, $otp){

        $headers = [
            'Content-Type' => 'application/json',
        ];

        $data = [
            'userName' => env('USER_NAME'),
            'apiKey' => env('API_KEY'),
            'numbers' => '966'.$phone,
            'userSender' => 'auth-mseg',
            'msg' => 'Pin Code is: '.$otp,
            'msgEncoding' => 'UTF8'
        ];

        $client = new client();
        $response = $client->post(env('END_POINT'), [
            'headers' => $headers,
            'json' => $data,
        ]);
        $body = json_decode((string)$response->getBody());
        return $body;
    }
}
