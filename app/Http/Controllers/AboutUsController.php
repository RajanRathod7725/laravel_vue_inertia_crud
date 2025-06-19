<?php

namespace App\Http\Controllers;

class AboutUsController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $data['title'] = "About Us";
        
        return view('about_us', compact('data'));
    }
}
