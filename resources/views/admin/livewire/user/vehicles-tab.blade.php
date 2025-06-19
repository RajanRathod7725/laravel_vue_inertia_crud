<div class="card card-flush mb-5 mb-lg-10">

    <div class="card-header border-0 pt-6">
        <div class="card-title">
            <div class="d-flex align-items-center position-relative my-1">
                {{ $user->name }}'s Vehicles
            </div>
        </div>
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Toolbar-->
            <div class="d-flex justify-content-end me-5" data-kt-customer-table-toolbar="base">
                <!--begin::Add customer-->
                <!--begin::Menu wrapper-->
                <div class="m-0">
                    <!--begin::Menu toggle-->
                    <a href="#" class="btn btn-sm btn-flex btn-secondary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i class="ki-duotone ki-filter fs-6 text-muted me-1"><span class="path1"></span><span class="path2"></span></i>
                        Filter
                    </a>
                    <!--end::Menu toggle-->

                    <!--begin::Menu dropdown-->
                    <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_select2">
                        <!--begin::Header-->
                        <div class="px-7 py-5">
                            <div class="fs-5 text-gray-900 fw-bold">Filter Options</div>
                        </div>
                        <!--end::Header-->

                        <!--begin::Menu separator-->
                        <div class="separator border-gray-200"></div>
                        <!--end::Menu separator-->

                        <!--begin::Form-->
                        <div class="px-7 py-5">

                            <!--begin::Input group-->
                            <div class="mb-5">
                                <!--begin::Label-->
                                <label class="form-label fw-semibold">Search by Name:</label>
                                <!--end::Label-->

                                <!--begin::Options-->
                                <div class="d-flex">
                                    <!--begin::Options-->
                                    <input type="text" class="form-control form-control-solid form-control-sm" name="search_name" wire:model.defer="vehicle_search.search_name"/>
                                    <!--end::Options-->
                                </div>
                                <!--end::Options-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="mb-5">
                                <!--begin::Label-->
                                <label class="form-label fw-semibold">Category:</label>
                                <!--end::Label-->

                                <!--begin::Input-->
                                <div>
                                    <select class="form-select form-select-solid form-select-sm"  data-close-on-select="false" data-placeholder="Select category" data-allow-clear="true" wire:model.defer="vehicle_search.search_category_id">
                                        <option>--Select Category--</option>
                                        @foreach($vehicle_categories as $vehicle_category)
                                            <option value="{{ $vehicle_category->id }}">{{ $vehicle_category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="mb-5">
                                <!--begin::Label-->
                                <label class="form-label fw-semibold">Status:</label>
                                <!--end::Label-->

                                <!--begin::Input-->
                                <div>
                                    <select class="form-select form-select-solid form-select-sm"  data-close-on-select="false" data-placeholder="Select option" data-allow-clear="true" wire:model.defer="vehicle_search.search_status">
                                        <option>--Select Status--</option>
                                        <option value="0">Inactive</option>
                                        <option value="1">Active</option>
                                        <option value="2">On Hold</option>
                                    </select>
                                </div>
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->


                            <!--begin::Actions-->
                            <div class="d-flex justify-content-end">
                                <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true" wire:click="resetVehicalSearch({{$user->id}})">Reset</button>

                                <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true" wire:click="vehicalSearch({{$user->id}})">Apply</button>
                            </div>
                            <!--end::Actions-->
                        </div>
                        <!--end::Form-->
                    </div>
                    <!--end::Menu dropdown-->

                </div>
                <!--end::Menu wrapper-->

                <!--end::Add customer-->
            </div>

            <!--begin: Short By-->
            <div class="d-flex my-0">
                <!--begin::Select-->
                <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Filter" class="form-select form-select-sm form-select-solid w-150px" wire:model.defer="vehicle_sort_order" wire:change="vehicleShortBy({{$user->id}})">
                    <option value="1">Sort by Name</option>
                    <option value="2">Sort by Price</option>
                    <option value="3">Sort by Total Sales</option>
                    <option value="4">Sort by Date (Latest First) </option>
                    <option value="5">Sort by Date (Oldest First) </option>
                </select>
                <!--end::Select-->
            </div>
            <!--end: Short By-->

            <!--end::Toolbar-->
        </div>
        <!--end::Card toolbar-->

    </div>

    <div class="card-body pt-0 pb-0">
        <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_customers_table">
            <thead>
            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                <th class="min-w-125px">Image</th>
                <th class="min-w-125px">Name</th>
                <th class="min-w-125px">Category</th>
                <th class="min-w-125px">No. of Orders</th>
                <th class="min-w-125px">Hourly Price</th>
                <th class="min-w-125px">Total Sales</th>
                <th class="min-w-125px">Status</th>
                <th class="text-end">Actions</th>
            </tr>
            </thead>
            <tbody class="fw-semibold text-gray-600">

            @forelse($vehicles as $vehicle)

                <tr>
                    <td><img class="list-image" src="{{ $vehicle->image_path }}" alt=""></td>
                    <td><a href="{{ url('admin/vehicle/'.$vehicle->id) }}" class="" target="_blank">{{ $vehicle->name }}</a></td>
                    <td>{{ $vehicle->category!=''?$vehicle->category->name:'-' }}</td>
                    <td>0</td>
                    <td>{{ $vehicle->rate }}</td>
                    <td>0</td>
                    <td>
                        @if($vehicle->status == Null)
                            <span class="badge badge-warning">Pending</span>
                        @elseif($vehicle->status == 0)
                            <span class="badge badge-danger">Inactive</span>
                        @elseif($vehicle->status == 1)
                            <span class="badge badge-success">Active</span>
                        @elseif($vehicle->status == 2)
                            <span class="badge badge-dark">On Hold</span>
                        @endif
                    </td>
                    <td class="text-end">
                        <a href="javascript:;" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="fa fa-ellipsis-v p-0"></i>
                        </a>
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/vehicle/'.$vehicle->id) }}" class="menu-link px-3 text-info" target="_blank">View</a>
                            </div>
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/vehicle/add/'.$vehicle->id) }}" class="menu-link px-3 text-primary" target="_blank">Edit</a>
                            </div>
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/vehicle/delete/'.$vehicle->id) }}" onclick="return confirm('are you sure?')" class="menu-link px-3 text-danger" data-kt-customer-table-filter="delete_row">Delete</a>
                            </div>
                        </div>
                    </td>
                </tr>
            @empty
                <tr>
                     <td class="text-center" colspan="8">No Vehicle Found</td>
                </tr>
            @endforelse
            </tbody>
        </table>
    </div>
</div>
<script>
    KTMenu.createInstances();
    var menuElement = document.querySelector('.menu');
    var menu = KTMenu.getInstance(menuElement);
    /*var item = document.querySelector('.menu-item');
    menu.toggle(item);*/
    //KTMenu.updateDropdowns();
</script>
