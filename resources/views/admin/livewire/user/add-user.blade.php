<div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-xxl">
        <form @if($edit_id != '') wire:submit.prevent="update" @else wire:submit.prevent="submit" @endif enctype="multipart/form-data">

            <div class="card card-flush pt-3 mb-5">
                <div class="card-body py-5">
                    <div class="row ">
                        @if(Session()->has('message'))
                            <div class="alert alert-success"> {{ session('message') }} </div>
                        @endif

                        @error('error') <div class="alert alert-danger">{{ $message }}</div> @enderror

                        <h4 class="mb-5">Basic Details</h4>

                        <div class="col-4">
                            <div class="mb-5">
                                <label for="type" class="form-label">Type<em>*</em></label>
                                <select id="type" class="form-select form-select-solid" wire:model="form.type">
                                    <option value="">--Select Type--</option>
                                    <option value="0">Borrower (Customer)</option>
                                    <option value="1">Vendor</option>
                                </select>
                                @error('form.type') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        @if($form['type'] == 0)
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="customer_type" class="form-label">Borrower Type<em>*</em></label>
                                <select id="customer_type" class="form-control form-control-solid"  wire:model="form.customer_type" >
                                    <option value="">--Select Borrower Type--</option>
                                    <option value="0">Individual</option>
                                    <option value="1">Company</option>
                                </select>
                                @error('form.customer_type') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        @endif
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="name" class="form-label">Name<em>*</em> </label>
                                <input type="text" id="name" class="form-control form-control-solid"  wire:model="form.name" />
                                @error('form.name') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="mb-5">
                                <label for="phone" class="form-label">Phone<em>*</em> </label>
                                <input type="text" id="phone" class="form-control form-control-solid"  wire:model="form.phone" />
                                @error('form.phone') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="mb-5">
                                <label for="status" class="form-label">Status<em>*</em></label>
                                <select id="status" class="form-control form-control-solid"  wire:model="form.status" >
                                    <option value="">--Select Status--</option>
                                    <option value="0">Inactive</option>
                                    <option value="1">Active</option>
                                    <option value="2">On Hold</option>
                                </select>
                                @error('form.status') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        @if($form['status'] == 2)
                            <div class="col-4">
                                <div class="mb-5">
                                    <label for="hold_reason" class="form-label">Hold Reason<em>*</em></label>
                                    <input type="text" id="hold_reason" class="form-control form-control-solid"  wire:model="form.hold_reason" />
                                    @error('form.hold_reason') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                            </div>
                        @endif
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="email" class="form-label">Email @if($form['type'] == 1)<em>*</em> @endif </label>
                                <input type="email" id="email" class="form-control form-control-solid"  wire:model="form.email" />
                                @error('form.email') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="city" class="form-label">City(Office is located in) @if($form['type'] == 1)<em>*</em>@endif</label>
                                <input type="text" id="city" class="form-control form-control-solid"  wire:model="form.city" />
                                @error('form.city') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="user_document_file" class="form-label">@if($form['type'] == 0 && $form['customer_type'] == 0) {{ 'Customer Identity Document' }} @else {{ 'Commercial Registration Document' }} @endif<em>*</em></label>
                                <input type="file" class="form-control" id="user_document_file" wire:model="form.user_document_file">
                                @error('form.user_document_file') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="profile_pic" class="form-label">Profile Pic </label>
                                <input type="file" class="form-control" id="profile_pic" wire:model="form.profile_pic">
                                @error('form.profile_pic') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mb-5">
                @if($edit_id != '')
                    <button type="submit" class="btn btn-danger btn-sm">Update</button>
                @else
                    <button type="submit" class="btn btn-primary btn-sm">Save</button>
                @endif
            </div>


        </form>
    </div>
</div>
