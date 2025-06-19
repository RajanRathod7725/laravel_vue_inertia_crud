<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Blog;
use Illuminate\Support\Facades\Validator;
use Exception;
use Illuminate\Support\MessageBag;
use Illuminate\Support\Str;

class BlogController extends Controller
{

    public function index()
    {
        $data['title'] = "Blogs";
        $data['blogs'] = Blog::latest()->paginate(25);

        return view('admin.blog.list', compact('data'));
    }

    public function add($id = "")
    {

        $data['title'] = "Add Blog";

        if($id != ""){

            $blog = Blog::find($id);
            $data['blog'] = $blog;

        }

        return view('admin.blog.add', compact('data','id'));
    }


    public function view($id){

        $data['title'] = 'View Blog';
        $data['blog_id'] = $id;

        return view('admin.blog.view', compact('data'));

    }

    public function delete($id){

        Blog::where('id',$id)->delete();

        return redirect()->back()->withSuccess("Blog Deleted!");

    }
    public function upload_image(Request $request){
        $fileName = strtotime(now()).".".$request->file('file')->extension();
        $path=$request->file('file')->storeAs('uploads', $fileName, 'public');
        return response()->json(['location'=>"/storage/$path"]);
    }

}
