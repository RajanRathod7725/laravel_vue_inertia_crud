<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    function generate_response($response_array, $type = "")
    {
        switch($type){
            case "SUCCESS":
                $status_code = 200;
            break;
            case "NOT_AUTHORIZED":
                $status_code = 401;
            break;
            case "NO_ACCESS":
                $status_code = 403;
            break;
            case "BAD_REQUEST":
                $status_code = 400;
            break;
            default:
                $status_code = 200;
            break;
        }

        $response = array(
            'status' => true,
            'msg'    => (isset($response_array['message']))?$response_array['message']:"",
            'data'   => (isset($response_array['data']))?$response_array['data']:"",
            'status_code' => (isset($response_array['status_code']))?$response_array['status_code']:$status_code
        );

        /* additional response data */
        // if(isset($response_array['link'])){
        //     $response = array_merge($response, array("link" => $response_array['link']));
        // }

        return $response;
    }

    function generate_slack($table)
    {
        do{
            $slack = Str::random(10);
            $exist = DB::table($table)->where("slack", $slack)->first();
        }while($exist);
        return $slack;
    }

    function generate_code($table)
    {

        $code = DB::table($table)->latest()->first();

        if(isset($code)){
            $code = (int) $code->code + 1;
        }else{
            $code = 1;
        }
        return $code;
    }

    function generate_custom_code($table, $where_column, $where_column_value, $data_column)
    {
        $code = DB::table($table)->where($where_column,$where_column_value)->latest()->first();

        if(isset($code)){
            $code = (int) $code->$data_column + 1;
        }else{
            $code = 1;
        }
        return $code;
    }

    function generate_token( $length, $table = '', $column = '')
    {
        if($table != ''){
            do{
                $token = Str::random($length);
                $exist = DB::table($table)->where($column, $token)->first();
            }while($exist);
        }else{
            $token = Str::random($length);
        }

        return $token;

    }

    function upload($storage_folder,$file){
        $image = $file;
        $file_name   = uniqid() . time() . '.' . $image->getClientOriginalExtension();
        $img = Image::make($image->getRealPath());
        $img->stream();
        Storage::disk($storage_folder)->put('/' . $file_name, $img, 'public');
        return $file_name;
    }

    function upload_doc($storage_folder,$file){
        $doc = $file;
        $file_name   = uniqid() . time() . '.' . $doc->getClientOriginalExtension();
        Storage::disk($storage_folder)->putFileAs('/', $doc, $file_name, 'public');
        return $file_name;
    }

    public function set_user_session($user, $token)
    {
        session()->put('name', $user->name);
        session()->put('access_token', $token);
        //Session::save();
    }

    public function toNumber($value)
    {
        return floatval(str_replace(',', '', $value));
    }

    public function toDecimal($value)
    {
        return number_format($value, 2);
    }

    function getNextOrderNumber($order_date)
    {
        $count = Order::count();
        if (isset($count)) {
            $order_number = $count + 1;
        } else {
            $order_number = 1;
        }
        return $order_number;
    }

    function getDefaultImage()
    {
        $default_image = asset('images/logo-icon.png');
        /*$app_setting = AppSetting::select('value')->where('key', 'LOGO')->first();

        if (isset($app_setting) && $app_setting->value != "") {
            if(Storage::disk('app_setting')->exists($app_setting->value)){
                $default_image = Storage::disk('app_setting')->url($app_setting->value);
            }
        }*/
        return $default_image;
    }

}
