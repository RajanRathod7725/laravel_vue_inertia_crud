<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'image',
        'post_date',
        'description',
        'meta_title',
        'blog_url',
        'meta_keywords',
        'meta_description',
        'status',
    ];

    public $timestamps = true;
    protected $appends = ['created_at_label','updated_at_label'];

    public function scopeActive($query){
        return $query->where('status',1);
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) =>  ($value != '') ? ( (Storage::disk('blog')->exists($value)) ? Storage::disk('blog')->url($value) : url('images/default-blog.png') ) : url('images/default-blog.png')
        );
    }

    protected function createdAtLabel(): Attribute
    {
        return Attribute::make(
            get: fn ($value) =>  Carbon::parse($this->created_at)->format('d M, Y h:i A')
        );
    }

    protected function updatedAtLabel(): Attribute
    {
        return Attribute::make(
            get: fn ($value) =>  Carbon::parse($this->updated_at)->format('d M, Y h:i A')
        );
    }

    protected function getImagePathAttribute()
    {
        if( !is_null($this->image) && Storage::disk('blog')->exists($this->image)){
            return Storage::disk('blog')->url($this->image);
        }else{
            return url('images/default-blog.png');
        }
    }

}
