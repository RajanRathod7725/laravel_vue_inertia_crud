<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\User;

class AuthController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        if(auth()->check()){
            return redirect()->to(route('user_profile'));
        }
        $data['title'] = "Login";
        $data['message'] = $request->input('message');

        return view('login', compact('data'));
    }

    public function register()
    {
        if(auth()->check()){
            return redirect()->to(route('user_profile'));
        }

        $data['title'] = "Register";

        return view('register', compact('data'));
    }

    public function forgot_password()
    {
        if(auth()->check()){
            return redirect()->to(route('user_profile'));
        }

        $data['title'] = "Forgot Password";

        return view('forgot_password', compact('data'));
    }

    public function reset_password($user_slack, $forgot_password_token){

        if(auth()->check()){
            return redirect()->to(route('user_profile'));
        }

        $user_data = User::select('slack', 'password_reset_max_tries', 'password_reset_last_tried_on')
        ->where([
            ['slack', '=', $user_slack],
            ['password_reset_token', '=', $forgot_password_token]
        ])->first();

        if (!$user_data) {
            return redirect('login');
        }

        $data['title'] = "Forgot Password";

        $data['user_slack'] = $user_slack;
        $data['password_reset_token'] = $forgot_password_token;

        return view('reset_password', $data);
    }

    public function logout(Request $request)
    {
        auth()->logout();
        Session::flush();
        return redirect(route('login'));
    }

}
