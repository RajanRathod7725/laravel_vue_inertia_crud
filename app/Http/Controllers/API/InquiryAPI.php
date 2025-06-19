<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Validator;
use App\Models\Inquiry;
use Illuminate\Support\Facades\DB;
use App\Jobs\SendAdminContactInquiry;
use App\Jobs\SendUserContactInquiry;
class InquiryAPI extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function store(Request $request){

        try {

            $data = [];

            $validator = Validator::make($request->all(), [
                'name' => 'required|min:2',
                'email' => 'email|required|min:3|email:rfc,dns',
                'message' => 'required|min:10|max:1000',
            ]);

            $validation_status = $validator->fails();
            if ($validation_status) {
                throw new Exception($validator->errors());
            }

            DB::beginTransaction();

            Inquiry::create([
                'email'=>$request->email,
                'name' => (isset($request->name)) ? $request->name : null,
                'message' => (isset($request->message)) ? $request->message : null,
            ]);

            $data = ['email'=>$request->email, 'name'=>$request->name, 'message'=>$request->message];

            SendAdminContactInquiry::dispatch($data);
            SendUserContactInquiry::dispatch($data);
            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Thank you for your inquiry! We’ll review your request and get back to you shortly.",
                    "data"    => $data,
                ),
                'SUCCESS'
            ));


        } catch (Exception $e) {

            DB::rollBack();

            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }

    }
}
