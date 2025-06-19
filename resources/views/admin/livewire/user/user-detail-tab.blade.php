<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <div class="card-body p-5">
        <div class="d-flex flex-column gap-5">
            <div class="row">
                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">Email</div>
                        <div class="fw-bold fs-5">
                            <a href="mailto:{{ $user->email }}">{{ $user->email!=''?$user->email:'-' }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">Phone</div>
                        <div class="fw-bold fs-5">
                            <a href="tel:{{ $user->phone }}">{{ $user->phone }}</a>
                        </div>
                    </div>
                </div>

                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">City</div>
                        <div class="fw-bold fs-5">
                            {{ $user->city!=''?$user->city:'-' }}
                        </div>
                    </div>
                </div>
                @if($user->user_document_file_path!='')
                    <div class="col-3 p-3">
                        <div class="d-flex flex-column gap-1">
                            <div class="fw-bold text-muted">Document</div>
                            <div class="fw-bold fs-5">
                                <a href="{{ $user->user_document_file_path }}" target="_blank">Click Here..</a>
                            </div>
                        </div>
                    </div>
                @endif
                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">Approval Status</div>
                        <div class="fw-bold fs-5">
                            @if($user->approve_status == 1)
                                <span class="text-success">Approved</span>
                            @else
                                <span class="text-danger">Unapproved</span>
                            @endif
                        </div>
                    </div>
                </div>

                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">Status</div>
                        <div class="fw-bold fs-5">
                            @if($user->status == 0)
                                <span class="text-warning">Inactive</span>
                            @elseif($user->status == 1)
                                <span class="text-success">Active</span>
                            @elseif($user->status == 2)
                                <span class="text-muted">Hold</span>
                            @endif
                        </div>
                    </div>
                </div>

                @if($user->status == 2)
                    <div class="col-3 p-3">
                        <div class="d-flex flex-column gap-1">
                            <div class="fw-bold text-muted">Hold Reason</div>
                            <div class="fw-bold fs-5">
                                {{ $user->hold_reason }}
                            </div>
                        </div>
                    </div>
                @endif

                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">Created At</div>
                        <div class="fw-bold fs-5">
                            {{ $user->created_at_label }}
                        </div>
                    </div>
                </div>

                <div class="col-3 p-3">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-bold text-muted">Last Updated At</div>
                        <div class="fw-bold fs-5">
                            {{ $user->updated_at_label }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
