<div id="kt_app_content" class="app-content flex-column-fluid mb-5">
    <div id="kt_app_content_container" class="app-container container-xxl">
        <!--begin::Card-->
        <div class="card mb-5">
            <!--begin::Card header-->
            <div class="card-header align-items-center py-5 gap-2 gap-md-5">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Search-->
                    <div class="d-flex align-items-center position-relative my-1">
                        <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                        <input type="text" wire:model.debounce.500ms="search" class="form-control form-control-solid w-450px ps-15" placeholder="Search by user name, email, phone..." />
                    </div>
                    <!--end::Search-->
                </div>
                <!--end::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">

                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0 pb-3">
                <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_customers_table">
                    <thead>
                    <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                        <th class="min-w-125px">Profile Pic</th>
                        <th class="min-w-125px">Name</th>
                        <th class="min-w-125px">Email</th>
                        <th class="min-w-125px">Phone</th>
                        <th class="min-w-125px">Type</th>
                        <th class="min-w-125px">Approve Status</th>
                        <th class="min-w-125px">Status</th>
                        <th class="text-end">Actions</th>
                    </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">

                    @forelse($users as $user)

                        <tr>

                            <td>
                                <img class="list-image" src="{{ $user->profile_pic_path }}" alt="">
                            </td>

                            <td>
                                <a href="{{ url('admin/user/'.$user->id) }}" class="">{{ $user->name }}</a>
                            </td>
                            <td>{{ $user->email!=''?$user->email:'-' }}</td>
                            <td>{{ $user->phone }}</td>
                            <td>
                                @if($user->type == 0)
                                    Customer
                                @elseif($user->type == 1)
                                    Vendor
                                @endif
                            </td>
                            <td>
                                @if($user->approve_status == 1)
                                    <span class="badge badge-success">Approved</span>
                                @else
                                    <select name="" id="" class="form-control" wire:change="changeApproveStatus({{ $user->id }}, $event.target.value)">
                                        <option value="" @if($user->approve_status == 0) selected @endif class="text-success">Unapproved</option>
                                        <option value="1" @if($user->approve_status == 1) selected @endif class="text-success">Approved</option>
                                    </select>
                                @endif

                            </td>
                            <td>
                                @if($user->status == 0)
                                    <span class="badge badge-danger">Inactive</span>
                                @elseif($user->status == 1)
                                    <span class="badge badge-success">Active</span>
                                @elseif($user->status == 2)
                                    <span class="badge badge-dark">On Hold</span>
                                @endif
                            </td>
                            <td class="text-end">
                                <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    <i class="fa fa-ellipsis-v p-0"></i>
                                </a>
                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                    <div class="menu-item px-3">
                                        <a href="{{ url('admin/user/'.$user->id) }}" class="menu-link px-3 text-info">View</a>
                                    </div>
                                    <div class="menu-item px-3">
                                        <a href="{{ url('admin/user/add/'.$user->id) }}" class="menu-link px-3 text-primary">Edit</a>
                                    </div>
                                    <div class="menu-item px-3">
                                        <a href="{{ url('admin/user/delete/'.$user->id) }}" onclick="return confirm('are you sure?')" class="menu-link px-3 text-danger" data-kt-customer-table-filter="delete_row">Delete</a>
                                    </div>
                                </div>
                            </td>

                        </tr>
                    @empty
                        <tr>
                            <td class="text-center" colspan="7">No Users Found</td>
                        </tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Card-->

    </div>
</div>
