@extends('admin.layouts.app')

@section('content')


@section('page_title',$data['title'])

<div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <div id="kt_app_toolbar_container" class="app-container container-fluid d-flex flex-stack">
        <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">

    <a type="submit" href="{{ route('admin_blogs') }}" class="btn btn-secondary btn-sm"> <i class="fa fa-chevron-left"></i> Blogs  </a>
        </div>
    </div>
</div>

@livewire('add-blog', ['edit_id'=>$id])


@endsection
