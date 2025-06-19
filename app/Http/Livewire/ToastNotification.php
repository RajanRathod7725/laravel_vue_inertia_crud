<?php 

namespace App\Http\Livewire;

use Livewire\Component;

class ToastNotification extends Component
{
    protected $listeners = ['showToast'];

    public $message;
    public $type;

    public function render()
    {
        return view('admin.livewire.common.toast-notification');
    }

    public function showToast($message, $type)
    {
        $this->message = $message;
        $this->type = $type;

        $this->dispatchBrowserEvent('show-toast');
    }
}
