<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Blog;



class SitemapXmlController extends Controller
{
    public function index() {
        $blogs = Blog::select('blog_url')->where('status',1)->get();
        return response()->view('sitemap', [
            'blogs'=>$blogs,
        ])->header('Content-Type', 'text/xml');
    }
}
