<?php

namespace App\Http\Controllers\API;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

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
}
