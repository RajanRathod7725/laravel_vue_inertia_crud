<div class="card card-flush pt-3 mb-5 mb-lg-10">

    <div class="card-header border-0 pt-6">
        <div class="card-title">
            <div class="d-flex align-items-center position-relative my-1">
                <span class="svg-icon svg-icon-1 position-absolute ms-6">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                    </svg>
                </span>
                <input type="text" wire:model.debounce.500ms="search" class="form-control form-control-solid w-450px ps-15" placeholder="Search by name and email " />
            </div>
        </div>


    </div>

    <div class="card-body pt-0 pb-0">

        <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_customers_table">
            <thead>
                <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th class="min-w-125px">Name</th>
                    <th class="min-w-125px">Email</th>
                    <th class="min-w-125px">Subscribed At</th>
                    <th class="min-w-125px">Status</th>
                    <th class="text-end min-w-70px">Actions</th>
                </tr>
            </thead>
            <tbody class="fw-semibold text-gray-600">

                @forelse($newsletters as $newsletter)

                <tr>

                    <td>
                        <a href="{{ url('admin/newsletter/'.$newsletter->id) }}">{{ $newsletter->message }}</a>
                    </td>
                    <td>{{ $newsletter->first_name }} {{ $newsletter->last_name }}</td>
                    <td>{{ $newsletter->email }}</td>
                    <td>{{ $newsletter->created_at_label }}</td>
                    <td>
                        <select name="" id="" class="form-control" wire:change="changeStatus({{ $newsletter->id }}, $event.target.value)">
                            <option value="1" @if($newsletter->status == 1) selected @endif class="text-success">Subscribed</option>
                            <option value="0" @if($newsletter->status == 0) selected @endif class="text-danger">Un-Subscribed</option>
                        </select>
                    </td>
                    <td class="text-end">
                        <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="fa fa-ellipsis-v p-0"></i>
                        </a>
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/newsletter/delete/'.$newsletter->id) }}" onclick="return confirm('are you sure?')" class="menu-link px-3 text-danger" data-kt-customer-table-filter="delete_row">Delete</a>
                            </div>
                        </div>
                    </td>

                </tr>
                @empty
                <tr>
                     <td class="text-center" colspan="7">No Newsletters Found</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

</div>
{{-- Content Section Ends --}}
