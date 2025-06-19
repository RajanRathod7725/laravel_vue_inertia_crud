<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Setting;
use Illuminate\Support\Facades\Validator;
use Exception;
use Illuminate\Support\MessageBag;

class SettingController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data['title'] = "Settings";
        $data['settings'] = Setting::orderBy('id','ASC')->get();
        return view('admin.settings', compact('data'));
    }
    
    public function update(Request $request)
    {
        $data['title'] = "Settings";
          
        DB::beginTransaction();

        foreach($request->except('_token') as $key => $value){
            Setting::where('key',$key)->update(['value'=>$value]);
        }

        DB::commit();
        
        return redirect()->back()->withSuccess("Setting Updated!");

    }
    
    
    
}
