<?php

namespace App\Http\Livewire;

use App\Models\Inquiry;
use App\Models\Mentor;
use Livewire\Component;

class InquiryList extends Component
{   
 
    public $search = '';
    public $inquiries = [];

    public function render()
    {   
        $this->inquiries = Inquiry::query()
        ->when($this->search != '', function($query) {
            $query->where('name','like','%'.$this->search.'%')
            ->orWhere('email','like','%'.$this->search.'%')
            ->orWhere('message','like','%'.$this->search.'%');
        })
        ->latest()
        ->get();
        
        return view('admin.livewire.inquiry.inquiry-list');
    }

    public function changeStatus($id, $status){
        
        Inquiry::where('id',$id)->update(['status'=>$status]);

        $this->emit('showToast', 'Status Updated Successfully', 'success');
    }

}
