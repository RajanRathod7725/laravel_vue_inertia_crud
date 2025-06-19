<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    function upload($storage_folder,$file){
        $image = $file;
        $file_name   = uniqid() . time() . '.' . $image->getClientOriginalExtension();
        $img = Image::make($image->getRealPath());
        $img->stream();
        Storage::disk($storage_folder)->put('/' . $file_name, $img, 'public');
        return $file_name;
    }
}
