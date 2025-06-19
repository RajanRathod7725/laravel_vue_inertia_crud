<template>
     <div class="modal" id="editProfile" tabindex="-1" aria-labelledby="add_SubCategory" aria-modal="true" role="dialog">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Profile</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>Phone <em>*</em></label>
                            <input class="form-control form-control-solid form-control-md" type="password" placeholder="********">
                        </div>
                        <div class="form-group">
                            <label>Language <em>*</em></label>
                            <select class="form-control" name="" id="">

                            </select>
                        </div>
                        <div class="form-group">
                            <label>Country <em>*</em></label>
                            <input class="form-control form-control-solid form-control-md" type="password" placeholder="********">
                        </div>
                        <div class="form-group">
                            <label>Location <em>*</em></label>
                            <input class="form-control form-control-solid form-control-md" type="password" placeholder="********">
                        </div>
                        <div class="text-center">
                            <a href="javascript:void(0);" class="btn btn-sm btn-primary">Update</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>   
</template>