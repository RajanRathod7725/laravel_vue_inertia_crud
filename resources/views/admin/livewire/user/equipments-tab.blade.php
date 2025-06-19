<div class="card card-flush mb-5 mb-lg-10">

    <div class="card-header border-0 pt-6">
        <div class="card-title">
            <div class="d-flex align-items-center position-relative my-1">
                {{ $user->name }}'s Equipments
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
                            <!--<div class="mb-5">
                                &lt;!&ndash;begin::Label&ndash;&gt;
                                <label class="form-label fw-semibold">Search by Name:</label>
                                &lt;!&ndash;end::Label&ndash;&gt;

                                &lt;!&ndash;begin::Options&ndash;&gt;
                                <div class="d-flex">
                                    &lt;!&ndash;begin::Options&ndash;&gt;
                                    <input type="text" class="form-control form-control-solid form-control-sm" name="search_name" wire:model.defer="equipment_search.search_name"/>
                                    &lt;!&ndash;end::Options&ndash;&gt;
                                </div>
                                &lt;!&ndash;end::Options&ndash;&gt;
                            </div>-->
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="mb-5">
                                <!--begin::Label-->
                                <label class="form-label fw-semibold">Types:</label>
                                <!--end::Label-->

                                <!--begin::Input-->
                                <div>
                                    <select class="form-select form-select-solid form-select-sm"  data-close-on-select="false" data-placeholder="Select category" data-allow-clear="true" wire:model.defer="equipment_search.search_type_id">
                                        <option>--Select Type--</option>
                                        @foreach($equipment_types as $equipment_type)
                                            <option value="{{ $equipment_type->id }}">{{ $equipment_type->name }}</option>
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
                                    <select class="form-select form-select-solid form-select-sm"  data-close-on-select="false" data-placeholder="Select option" data-allow-clear="true" wire:model.defer="equipment_search.search_status">
                                        <option>--Select Status--</option>
                                        <option value="0">Inactive</option>
                                        <option value="1">Active</option>
                                    </select>
                                </div>
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->


                            <!--begin::Actions-->
                            <div class="d-flex justify-content-end">
                                <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true" wire:click="resetEquipmentSearch({{$user->id}})">Reset</button>

                                <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true" wire:click="equipmentSearch({{$user->id}})">Apply</button>
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
                <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Filter" class="form-select form-select-sm form-select-solid w-150px" wire:model.defer="equipment_sort_order" wire:change="equipmentShortBy({{$user->id}})">
                    <option value="1">Sort by Name</option>
                    <option value="2">Sort by Date (Latest First) </option>
                    <option value="3">Sort by Date (Oldest First) </option>
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
                <th class="min-w-125px">Name</th>
                <th class="min-w-125px">Purpose</th>
                <th class="min-w-125px">Brand</th>
                <th class="min-w-125px">Size</th>
                <th class="min-w-125px">Status</th>
                <th class="text-end">Actions</th>
            </tr>
            </thead>
            <tbody class="fw-semibold text-gray-600">

            @forelse($equipments as $equipment)

                <tr>
                    <td><a href="{{ url('admin/equipment/'.$equipment->id) }}" class="" target="_blank">{{ $equipment->equipment_master->name }}</a></td>
                    <td>{{ $equipment->purpose->name }}</td>
                    <td>{{ $equipment->brand->name }}</td>
                    <td>{{ $equipment->size->name }}</td>
                    <td>
                        @if($equipment->status == 0)
                            <span class="badge badge-danger">Inactive</span>
                        @elseif($equipment->status == 1)
                            <span class="badge badge-success">Active</span>
                        @endif
                    </td>
                    <td class="text-end">
                        <a href="javascript:;" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="fa fa-ellipsis-v p-0"></i>
                        </a>
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 eq-menu" data-kt-menu="true">
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/equipment/'.$equipment->id) }}" class="menu-link px-3 text-info" target="_blank">View</a>
                            </div>
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/equipment/add/'.$equipment->id) }}" class="menu-link px-3 text-primary" target="_blank">Edit</a>
                            </div>
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/equipment/delete/'.$equipment->id) }}" onclick="return confirm('are you sure?')" class="menu-link px-3 text-danger" data-kt-customer-table-filter="delete_row">Delete</a>
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
    var menuElement = document.querySelector('.eq-menu');
    var menu = KTMenu.getInstance(menuElement);
    /*var item = document.querySelector('.menu-item');
    menu.toggle(item);*/
    //KTMenu.updateDropdowns();
</script>
