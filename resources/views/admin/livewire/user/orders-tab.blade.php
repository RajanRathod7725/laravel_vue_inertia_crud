<div class="card card-flush mb-5 mb-lg-10">

    <div class="card-header border-0 pt-6">
        <div class="card-title">
            <div class="d-flex align-items-center position-relative my-1">
                {{ $user->name }}'s Orders
            </div>
        </div>
        <!--begin::Card toolbar-->
        <!--end::Card toolbar-->

    </div>

    <div class="card-body pt-0 pb-0">

        <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_customers_table">
            <thead>
            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                <th class="min-w-125px">Order No.</th>
                <th class="min-w-125px">Order Date</th>
                @if($user->type==0)
                    <th class="min-w-125px">Vendor Detail</th>
                    <th class="min-w-125px">Transporter Detail</th>
                @endif
                @if($user->type==1)
                    <th class="min-w-125px">Customer Detail</th>
                @endif
                <th class="min-w-125px text-end">Equipment Amount</th>
                <th class="min-w-125px text-end">Vehicle Amount</th>
                <th class="min-w-125px text-end">Total Amount</th>
                <th class="min-w-125px text-center">Status</th>
                <th class="text-end">Actions</th>
            </tr>
            </thead>
            <tbody class="fw-semibold text-gray-600">
            @php $orders = $user->type==0?$user->my_orders:$user->orders;@endphp
            @forelse($orders as $order)

                <tr>
                    <td><a href="{{ url('admin/order/'.$order->id) }}" target="_blank" class="">#{{ $order->order_number}}</a></td>
                    <td>{{ date('d-m-Y',strtotime($order->order_date)) }}</td>
                    @if($user->type==0)
                    <td>
                        @if(isset($order->owner))
                            Name: <a href="{{ url('admin/user').'/'.$order->owner->id }}" target="_blank">{{ $order->owner->name }}</a>
                            <br/>
                            Email:{{ $order->owner->email }}
                            <br/>
                            Phone:{{ $order->owner->phone }}
                        @else
                            N/A
                        @endif
                    </td>
                    <td>
                        @if(isset($order->transporter))
                            Name: <a href="{{ url('admin/transporter').'/'.$order->transporter->id }}" target="_blank">{{ $order->transporter->name }}</a>
                            <br/>
                            Phone:{{ $order->transporter->phone }}
                            <br/>
                            IQAMA No.:{{ $order->transporter->iqama_number }}
                        @else
                            N/A
                        @endif
                    </td>
                    @endif
                    @if($user->type==1)
                        <td>
                            Name: <a href="{{ url('admin/user').'/'.$order->customer->id }}" target="_blank">{{ $order->customer->name }}</a>
                            <br/>
                            Email:{{ $order->customer->email }}
                            <br/>
                            Phone:{{ $order->customer->phone }}
                            <br/>
                        </td>
                    @endif
                    <td class="text-end">@if($order->equipment_amount>0){{ $order->equipment_amount }} @else {{'-'}} @endif</td>
                    <td class="text-end">@if($order->vehicle_amount>0) {{ $order->vehicle_amount }} @else {{'-'}} @endif</td>
                    <td class="text-end">{{ $order->equipment_amount + $order->vehicle_amount }}</td>
                    <td class="text-center">
                        @if($order->status==0)
                            <span class="badge badge-primary">Open</span>
                        @elseif($order->status==1)
                            <span class="badge badge-info">Accepted</span>
                        @elseif($order->status==2)
                            <span class="badge badge-danger">Rejected</span>
                        @elseif($order->status==3)
                            @if($user->type==0)
                                <span class="badge badge-warning">In Progress</span>
                            @endif
                            @if($user->type==1)
                                <span class="badge badge-warning">In Transit</span>
                            @endif
                        @else
                            @if($user->type==0)
                                <span class="badge badge-success">Closed</span>
                            @endif
                            @if($user->type==1)
                                <span class="badge badge-success">Delivered</span>
                            @endif
                        @endif
                    </td>
                    <td class="text-end">
                        <a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="fa fa-ellipsis-v p-0"></i>
                        </a>
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                            <div class="menu-item px-3">
                                <a href="{{ url('admin/order/'.$order->id) }}" class="menu-link px-3 text-info" target="_blank">View</a>
                            </div>
                        </div>
                    </td>

                </tr>
            @empty
                <tr>
                    <td class="text-center" colspan="10">No Orders Found</td>
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
