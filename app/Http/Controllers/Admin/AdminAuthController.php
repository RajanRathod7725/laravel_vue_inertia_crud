<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    public function index()
    {
        $data['title'] = "Login";
        return view('admin.login', compact('data'));
    }

    public function login(Request $request)
    {

        $this->validate($request, [
            'username' => 'required',
            'password' => 'required',
        ]);

        if(auth()->guard('admin')->attempt(['username' => $request->input('username'),  'password' => $request->input('password')])){
            $user = auth()->guard('admin')->user();
            return redirect()->route('admin_dashboard');
        }else {
            return back()->with('error','Whoops! invalid email or password.');
        }
    }

    public function logout(Request $request)
    {
        auth()->guard('admin')->logout();
        Session::flush();
        return redirect(route('admin_login'));
    }

    public function register()
    {
        $data['title'] = "Register";

        return view('register', compact('data'));
    }
}
