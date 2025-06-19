<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'image' => $this->image,
            'slug' => $this->slug,
            'description' => $this->description,
            'content' => $this->content,
            'external_link' => $this->external_link,
            'status' => $this->status,
            
            // attributes
            'created_at' => $this->created_at_label,
            'updated_at' => $this->updated_at_label,
            'deleted_at' => $this->deleted_at_label,
            'description_formatted' => $this->description_formatted,
            'blog_date' => $this->blog_date,
            'image_path' => $this->image_path,
            
        ];
    }
}
