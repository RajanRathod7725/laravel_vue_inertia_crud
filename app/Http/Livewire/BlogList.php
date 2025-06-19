<?php

namespace App\Http\Livewire;

use App\Models\Blog;
use Livewire\Component;
use Livewire\WithPagination;
use Illuminate\Support\Facades\DB;

class BlogList extends Component
{
    use WithPagination;
    public $search = '';

    public function render()
    {
        $blogs = Blog::query()
        ->when($this->search != '', function($query) {
            $query->where(DB::raw('lower(title)'),'like','%'.strtolower($this->search).'%');
            $query->orwhere(DB::raw('lower(blog_url)'),'like','%'.strtolower($this->search).'%');
        })
        ->latest()
        ->paginate(25);

        return view('admin.livewire.blog.blog-list',['blogs'=>$blogs]);
    }

}
