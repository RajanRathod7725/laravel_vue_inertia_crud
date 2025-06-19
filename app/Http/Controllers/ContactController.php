<?php

namespace App\Http\Controllers;

class ContactController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $data['title'] = "Contact";
        
        return view('contact', compact('data'));
    }
}
