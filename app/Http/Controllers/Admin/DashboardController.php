<?php

namespace App\Http\Controllers\Admin;

use App\Models\Equipment;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Inquiry;
use Carbon\Carbon;

class DashboardController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data['title'] = "Dashboard";
        $data['total_inquiry'] = Inquiry::where('status',0)->count();
        return view('admin.dashboard', compact('data'));
    }


}
