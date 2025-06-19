@extends('admin.layouts.app')

@section('content')

@section('page_title',$data['title'])

<div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <div id="kt_app_toolbar_container" class="app-container container-fluid d-flex flex-stack">
        <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">{{ $data['title'] }}</h1>
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li class="breadcrumb-item text-muted">
                    <a href="{{ route('admin_dashboard') }}" class="text-muted text-hover-primary">Dashboard</a>
                </li>
                <li class="breadcrumb-item">
                    <span class="bullet bg-gray-400 w-5px h-2px"></span>
                </li>
                <li class="breadcrumb-item text-muted">
                    <a href="{{ route('admin_inquiries') }}" class="text-muted text-hover-primary">Inquiry</a>
                </li>
                <li class="breadcrumb-item">
                    <span class="bullet bg-gray-400 w-5px h-2px"></span>
                </li>
                <li class="breadcrumb-item text-muted">{{ $data['title'] }}</li>
            </ul>
        </div>
        <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a href="{{ route('admin_inquiries') }}" class="btn btn-sm fw-bold btn-secondary">Back</a>
        </div>
    </div>
</div>

<div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-xxl">
        <div class="card mb-6 mb-xl-9">
            <div class="card-body pt-9 pb-0">
                <div class="row mb-7">
                    <div class="col-3">
                        <label class="fw-semibold text-muted">Name</label>
                        <div class="fw-bold fs-6 text-gray-800">{{ $data['inquiry']->name }} </div>
                    </div>

                    <div class="col-3">
                        <label class="fw-semibold text-muted">Email</label>
                        <div class="fw-bold fs-6 text-gray-800">{{ $data['inquiry']->email }} </div>
                    </div>

                    <div class="col-3">
                        <label class="fw-semibold text-muted">Status</label>
                        <div class="fw-bold fs-6 text-gray-800">
                            @if($data['inquiry']->status == 0)
                                <span href="" class="badge badge-success align-self-center">Open</span>
                            @elseif($data['inquiry']->status == 1)
                                <span href="" class="badge badge-primary align-self-center">Processing</span>
                            @elseif($data['inquiry']->status == 2)
                                <span href="" class="badge badge-success align-self-center">Closed</span>
                            @endif
                        </div>
                    </div>
<!--                    <div class="col-3">
                        <label class="fw-semibold text-muted">Last Modified At</label>
                        <div class="fw-bold fs-6 text-gray-800">{{ $data['inquiry']->updated_at_label }} </div>
                    </div>-->
                    <div class="col-3">
                        <label class="fw-semibold text-muted">Received At</label>
                        <div class="fw-bold fs-6 text-gray-800">{{ $data['inquiry']->created_at_label }} </div>
                    </div>

                </div>
                <div class="row mb-7">
                    <div class="col-12">
                        <label class="fw-semibold text-muted">Message</label>
                        <div class="fw-bold fs-6 text-gray-800">{{ $data['inquiry']->message }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
