<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\EquipmentItemResource;
use App\Http\Resources\EquipmentMasterListResource;
use App\Http\Resources\EquipmentMasterResource;
use App\Models\Blog;
use App\Models\Brand;
use App\Models\EquipmentItem;
use App\Models\EquipmentMaster;
use App\Models\Purpose;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{

    /**
     * Show the application dashboard..
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data['title'] = config('app.name', 'Rajan Rathod').' | The PHP, Laravel, Vue.js, Live Wire Full Stack Developer :)';
        $data['description'] = 'I have rich experience in web development, also I am good at Laravel, Vue.js, Livewire, Codeigniter, Wordpress, PHP, Javascript and MySql. I love to talk with you about our unique.';
        $data['keywords'] = 'Full Stack Developer, PHP, Laravel, Vue.js, Codeigniter, Jquery, Java script, CSS, Livewire, Freelancer, Remote, Job, IT, Web developer, API developer';
        $data['hiro']['name'] = '<b>Rajan</b> Rathod';
        $data['hiro']['designation'] = 'Sr. Full Stack Developer';
        $data['hiro']['sort_description'] = 'From Gujarat, India. I have rich experience in web development, also I am good at Laravel, Vue.js, Livewire, Codeigniter, Wordpress, PHP, Javascript and MySql. I love to talk with you about our unique.';
        $data['hiro']['settings'] = Setting::whereIn('key',['WHATSAPP_LINK','LINKEDIN_LINK','INSTAGRAM_LINK','GITHUB_LINK','X_LINK'])->pluck('value','key');
        $data['hiro']['total_experience'] = '9';
        $data['hiro']['completed_projects'] = '35';
        $data['hiro']['resume'] = asset('Rajan_Rathod_9_Years_Ex_Full_Stack_Developer.pdf');
        $data['hiro']['profile'] = asset('rajan_rathod.png');
        $data['blogs'] = Blog::where('status',1)->limit(3)->latest()->get();
        return view('home', compact('data'));
    }
}
