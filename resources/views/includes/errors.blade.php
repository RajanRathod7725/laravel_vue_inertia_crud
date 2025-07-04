@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

@if(\Session::get('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <div class="alert-body">
        {{ \Session::get('success') }}
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
{{ \Session::forget('success') }}
@if(\Session::get('error'))
<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <div class="alert-body">
        {{ \Session::get('error') }}
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
