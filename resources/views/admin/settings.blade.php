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
                    <li class="breadcrumb-item text-muted">{{ $data['title'] }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
            <form action="{{ route('admin_setting_update') }}" method="post" enctype="multipart/form-data">
                <div class="card card-flush pt-3 mb-5 mb-lg-10">
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        @include('admin/includes/errors')
                        @csrf
                        @forelse($data['settings'] as $setting)
                            <div class="row mt-5">
                                <div class="col-4">
                                    <label for="exampleFormControlInput1" class="form-label"> {{ $setting->key_text }} </label>
                                </div>
                                <div class="col-8">
                                    <input type="text" name="{{ $setting->key }}" class="form-control form-control-solid" value="{{ $setting->value }}" />
                                </div>
                            </div>
                        @empty
                            <div class="alert alert-info">No Settings Found</div>
                        @endforelse
                    </div>
                    <!--end::Card body-->
                </div>
                <div class="d-flex justify-content-end mb-5">
                    <button type="submit" class="btn btn-danger btn-sm">Update</button>
                </div>
            </form>
        </div>
    </div>

@endsection
