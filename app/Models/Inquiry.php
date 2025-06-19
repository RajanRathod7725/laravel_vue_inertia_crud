<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

class Inquiry extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'message',
    ];

    public $timestamps = true;

    public function scopeSortByPending($query){
        return $query->orderBy('status','ASC')->latest();
    }

    protected function createdAtLabel(): Attribute
    {
        return Attribute::make(
            get: fn ($value) =>  Carbon::parse($value)->format(config('constants.date_time_format')) 
        );    
    }
    

}
