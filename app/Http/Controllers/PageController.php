<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
       
    }

    public function privacy_policy(){
        return view('privacy_policy');
    }

    public function terms_and_condition(){
        return view('terms_and_condition');
    }
}
