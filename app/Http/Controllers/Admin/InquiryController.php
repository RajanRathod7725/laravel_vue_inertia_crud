<?php

namespace App\Http\Controllers\Admin;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InquiryController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data['title'] = "Inquiries";
        $data['inquiries'] = Inquiry::latest()->get();
           
        return view('admin.inquiry.list', compact('data'));
    }

    public function view($id){
    
        $data['title'] = 'View Inquiry';
        $data['inquiry'] = Inquiry::find($id);
        
        return view('admin.inquiry.view', compact('data'));

    }
    
    public function delete($id){
        
        Inquiry::where('id',$id)->delete();
        
        return redirect()->back()->withSuccess("Inquiry Deleted!");

    }


}