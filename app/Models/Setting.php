<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
    ];

    public $timestamps = true;

    protected function createdAtLabel(): Attribute
    {
        return Attribute::make(
            get: fn ($value) =>  Carbon::parse($value)->format(config('constants.date_time_format')) 
        );    
    }
    
    protected function keyText(): Attribute
    {
        return Attribute::make(
            get: fn ($value) =>  Str::replace('_',' ',$this->attributes['key'])
        );    
    }
    

}
