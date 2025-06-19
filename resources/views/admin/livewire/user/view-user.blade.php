<div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-xxl">
        <div class="card mb-6 mb-xl-9">
            <div class="card-body pt-9 pb-0">
                <div class="row">
                    <div class="col-2 pb-3">
                        <img src="{{ $user->profile_pic_path }}" style="width:150px;" alt="" class="rounded">
                    </div>
                    <div class="col-10">
                        <!--begin::Details-->
                        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                            <!--begin::Wrapper-->
                            <div class="flex-grow-1">
                                <!--begin::Head-->
                                <div class="d-flex justify-content-between align-items-start flex-wrap">
                                    <!--begin::Details-->
                                    @if($user->type == 0)
                                        <span class="badge badge-primary my-2">Borrower (Customer)</span>
                                    @elseif($user->type == 1)
                                        <span class="badge badge-primary my-2">Vendor</span>
                                    @endif
                                </div>
                                <div class="d-flex flex-column">

                                    <!--begin::Status-->
                                    <div class="d-flex align-items-center mb-1">
                                        <span class="text-gray-800 fs-2 fw-bold me-3">{{ $user->name }}</span>
                                    </div>

                                </div>
                                <!--end::Head-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="separator"></div>
                    <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold d-flex justify-content-between">
                        <li class="nav-item">
                            <span role="button" class="nav-link text-active-primary py-5 me-6 @if($active_tab == 'user_detail') active @endif " href="#" wire:click="switchTab('user_detail')">User Details</span>
                        </li>
                        @if($user->type == 1)
                        <li class="nav-item">
                            <span role="button" class="nav-link text-active-primary py-5 me-6 @if($active_tab == 'equipments') active @endif " href="#" wire:click="switchTab('equipments')">Equipments <span class="badge badge-secondary text-muted mx-2"> {{ count($equipments) }}</span> </span>
                        </li>
                        @endif

    <!--                    <li class="nav-item">
                            <span role="button" class="nav-link text-active-primary py-5 me-6 @if($active_tab == 'vehicles') active @endif " href="#" wire:click="switchTab('vehicles')">Transportation Vehicles <span class="badge badge-secondary text-muted mx-2"> {{ count($vehicles) }} </span> </span>
                        </li>-->
                        <li class="nav-item">
                            <span role="button" class="nav-link text-active-primary py-5 me-6 @if($active_tab == 'orders') active @endif " href="#" wire:click="switchTab('orders')"> @if($user->type == 0) My Orders @else Orders @endif<span class="badge badge-secondary text-muted mx-2"> @if($user->type == 0) {{ count($user->my_orders) }} @else {{ count($user->orders) }} @endif </span> </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        @if($active_tab == "user_detail")
            @include('admin.livewire.user.user-detail-tab')
        @elseif($active_tab == "equipments")
            @include('admin.livewire.user.equipments-tab')
        @elseif($active_tab == "vehicles")
            @include('admin.livewire.user.vehicles-tab')
        @elseif($active_tab == "orders")
            @include('admin.livewire.user.orders-tab')
        @endif
    </div>
</div>


<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Initial initialization when the page loads
        initializeMenuTrigger();

        // Add click event listeners to nav-links
        var navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function (navLink) {
            navLink.addEventListener('click', function () {
                // Reinitialize data-kt-menu-trigger when a tab is clicked
                initializeMenuTrigger();
            });
        });
    });

    function initializeMenuTrigger() {
        // Replace this with your actual initialization logic
        // For example, if you are using a library like Kendo UI:
        // kendo.ui.Menu(document.querySelector('[data-kt-menu-trigger="#menu1"]'));
    }
</script>

