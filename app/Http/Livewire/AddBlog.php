<?php

namespace App\Http\Livewire;

use App\Models\Blog;
use Livewire\Component;
use Illuminate\Support\Facades\DB;
use Livewire\WithFileUploads;
use App\Http\Controllers\Admin\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Models\Consultant;

class AddBlog extends Component
{

    use WithFileUploads;

    public $edit_id = "";

    public $form = [
        'title' => '',
        'image' => null,
        'post_date' => '',
        'description' => "",
        'blog_url' => '',
        'meta_title'=>'',
        'meta_keywords'=>'',
        'meta_description'=>'',
        'status'=>1,
    ];

    public function render()
    {
        return view('admin.livewire.blog.add-blog');
    }

    public function mount($edit_id){
        if($this->edit_id != ''){
            $blog = Blog::find($this->edit_id)->toArray();
            $this->form = $blog;
        }
        else {
            $this->form['post_date'] = date('Y-m-d', strtotime(now()));
        }
        $this->edit_id = $edit_id;
    }

    public function submit(){
        $this->validate_request();

        $exists = Blog::where('title',$this->form['title'])->first();
        if($exists){
            $this->addError('error', 'Blog title already exists');
            return redirect()->back();
        }
        $controller = new Controller();
        if ( !empty($this->form['image']) ) {
            $image = $controller->upload('blog',$this->form['image']);
        }

        $blog = [
            'title' => $this->form['title'],
            'image' => (isset($image)) ? $image : null,
            'post_date' => $this->form['post_date'],
            'description'=> $this->form['description'],
            'blog_url' =>  $this->form['blog_url'],
            'meta_title' =>  $this->form['meta_title'],
            'meta_keywords' =>  $this->form['meta_keywords'],
            'meta_description' =>  $this->form['meta_description'],
            'status' => $this->form['status'],
        ];
        DB::beginTransaction();

        $blog = Blog::create($blog);

        DB::commit();

        session()->flash('message', 'Blog Added successfully');

        return redirect()->to(route('admin_blogs'));

    }

    public function update(){
        $blog_details = Blog::find($this->edit_id);
        $this->validate_request($blog_details);

        $exists = Blog::where('title',$this->form['title'])->whereNot('id',$this->edit_id)->first();
        if($exists){
            $this->addError('error', 'Blog title already exists');
            return redirect()->back();
        }

        $blog = [
            'title' => $this->form['title'],
            'post_date' => $this->form['post_date'],
            'description'=> $this->form['description'],
            'blog_url' =>  $this->form['blog_url'],
            'meta_title' =>  $this->form['meta_title'],
            'meta_keywords' =>  $this->form['meta_keywords'],
            'meta_description' =>  $this->form['meta_description'],
            'status' => $this->form['status'],
        ];

        if ( !empty($this->form['image']) && ($blog_details['image'] != $this->form['image']) ) {
            $controller = new Controller();
            $blog['image'] = $controller->upload('blog',$this->form['image']);

        }
        DB::beginTransaction();
        Blog::where('id',$this->edit_id)->update($blog);
        DB::commit();

        session()->flash('message', 'Blog Updated successfully');

        return redirect()->to(route('admin_blogs'));

    }

    public function validate_request($blog = ''){
        //dd($this->form['sections']);
        $rules = [
            'form.title' => 'required|min:3',
            'form.image' => $this->edit_id == '' ? 'required|file|mimes:jpg,jpeg,png,webp|max:1024' : '',
            'form.post_date' => 'required|date',
            'form.description' => 'required',
            'form.blog_url' => 'required',
            'form.meta_title' => 'required',
            'form.meta_keywords' => 'required',
            'form.meta_description' => 'required',
            'form.status' => 'required',
        ];

        $this->validate($rules,[
            'form.title.required' => 'Please Enter Blog Title',
            'form.title.min' => 'Blog title must be or more than 3 characters',
            'form.image.required' => 'Please Upload Blog Image',
            'form.image.max' => 'Uploaded file size is greater than 1MB',
            'form.image.mimes' => 'Uploaded file is not an image',
            'form.description.required' => 'Please Enter Description',
            'form.blog_url.required' => 'Please Enter Blog URL',
            'form.meta_title.required' => 'Please Enter Meta Title',
            'form.meta_keywords.required' => 'Please Enter Meta Keywords',
            'form.meta_description.required' => 'Please Enter Meta Description',
            'form.status.required' => 'Please Select Status',
        ]);

    }
}
