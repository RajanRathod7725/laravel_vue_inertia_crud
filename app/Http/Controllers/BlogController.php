<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    public function index()
    {
        $data['title'] = "Blogs | ".config('app.name');
        $data['description'] = 'Stay updated with expert insights, tutorials, and practical advice on Laravel, Vue.js, and full-stack development. This blog shares real-world coding solutions, architecture tips, and career suggestions for developers.';
        $data['keywords'] = 'Tech Blog for Developers, Laravel, Vue.js & Web Development Tips';

        return view('blogs', compact('data'));
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show($slug)
    {

        $data['blog'] = Blog::where('blog_url',$slug)->first();
        $data['title'] = $data['blog']->meta_title.' | Blogs | '.config('app.name');
        $data['description'] = $data['blog']->meta_description;
        $data['keywords'] =$data['blog']->meta_title;
        $data['next'] = Blog::select('blog_url','title')->where('id', '>', $data['blog']->id)->first();
        if(!isset($data['next'])){
            $data['next'] = Blog::select('blog_url','title')->where('id', '<', $data['blog']->id)->first();
        }
        return view('blog_detail', compact('data'));
    }
}
