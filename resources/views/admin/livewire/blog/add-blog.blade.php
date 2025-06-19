<div id="kt_app_content" class="app-content flex-column-fluid mb-5">
    <div id="kt_app_content_container" class="app-container container-xxl">
        <form @if($edit_id != '') wire:submit.prevent="update" @else wire:submit.prevent="submit" @endif enctype="multipart/form-data">
            {{--BASIC DETAIL--}}
            <div class="card card-flush pt-3 mb-3">
                <!--begin::Card body-->
                <div class="card-header" style="min-height: 40px;">
                    <h5 class="card-title m-0">Basic Detail</h5>
                </div>
                <div class="card-body py-5">
                    <div class="row">
                        @if(Session()->has('message'))
                            <div class="alert alert-success"> {{ session('message') }} </div>
                        @endif
                        @error('error') <div class="alert alert-danger">{{ $message }}</div> @enderror

                        <div class="col-12">
                            <div class="mb-5">
                                <label for="title" class="form-label">Title<em>*</em> </label>
                                <input type="text" id="title" class="form-control form-control-solid"  wire:model="form.title" />
                                @error('form.title') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-5">
                                <label for="image" class="form-label">Image<em>*</em></label>
                                <input type="file" id="image" class="form-control form-control-solid"  wire:model="form.image" accept="image/*" />
                                @error('form.image') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="post_date" class="form-label">Blog Date<em>*</em></label>
                                <input type="date" class="form-control form-control-solid" id="post_date" wire:model="form.post_date" />
                                @error('form.post_date') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-5">
                                <label for="exampleFormControlInput1" class="form-label">Status<em>*</em></label>
                                <div class="form-check form-check-custom form-check-solid mt-3">
                                    <input wire:model="form.status"  class="form-check-input" type="radio" name="type" value="1"  id="active"/>
                                    <label class="form-check-label pe-3" for="active">
                                        Active
                                    </label>
                                    <input wire:model="form.status" class="form-check-input" type="radio" name="type" value="0"  id="inactive"/>
                                    <label class="form-check-label pe-3" for="inactive">
                                        Inactive
                                    </label>
                                    @error('form.status') <span class="text-danger">{{ $message }}</span> @enderror
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-5">
                                <label for="blog_url" class="form-label">Blog URL<em>*</em> </label>
                                <input type="text" id="blog_url" class="form-control form-control-solid"  wire:model="form.blog_url" />
                                @error('form.blog_url') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-5">
                                <label for="description" class="form-label">Description<em>*</em> </label>
                                <div wire:ignore>
                                    <textarea  class="form-control tinymce"
                                           wire:model="form.description"
                                           id="content_sec"
                                           name="content_sec" wire:key="content_sec"
                                           x-ref="content_sec"
                                           x-data
                                           x-init="
                                                       tinymce.init({
                                                        path_absolute: '/',
                                                        selector: '#content_sec',
                                                        plugins: [
                                                             'preview','anchor','pagebreak',
                                                              'table',
                                                              'image','link','lists','emoticons','accordion','media'
                                                               ],
                                                                toolbar: 'insertfile undo redo | styleselect | bold italic forecolor emoticons | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media accordion | help ',
                                                                relative_urls: false,
                                                                remove_script_host : false,
                                                                document_base_url: '{{config('app.url')}}/',
                                                                language: 'en',
                                                                automatic_uploads: true,
                                                                images_upload_url: '/admin/upload',
                                                                file_picker_types: 'image media',
                                                                file_picker_callback: function(cb, value, meta) {
                                                                    var input = document.createElement('input');
                                                                    input.setAttribute('type', 'file');
                                                                    input.setAttribute('accept', 'image/* video/*');
                                                                    input.onchange = function() {
                                                                        var file = this.files[0];

                                                                        var reader = new FileReader();
                                                                        reader.readAsDataURL(file);
                                                                        reader.onload = function () {
                                                                            var id = 'blobid' + (new Date()).getTime();
                                                                            var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                                                                            var base64 = reader.result.split(',')[1];
                                                                            var blobInfo = blobCache.create(id, file, base64);
                                                                            blobCache.add(blobInfo);
                                                                            // call the callback and populate the Title field with the file name
                                                                            cb(blobInfo.blobUri(), { title: file.name });
                                                                        };
                                                                    };
                                                                    input.click();
                                                                },
                                                                setup: function (editor) {
                                                                        editor.on('init change', function () {
                                                                                  editor.save();
                                                                          });
                                                               editor.on('change', function (e) {
                                                                        @this.set('form.description', editor.getContent());

                                                                });
                                                                 },
                                                                 });

                                             "
                                           wire:ignore

                                ></textarea>
                                </div>
                                @error('form.description') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-5">
                                <label for="meta_title" class="form-label">Meta Title<em>*</em> </label>
                                <input type="text" id="meta_title" class="form-control form-control-solid"  wire:model="form.meta_title" />
                                @error('form.meta_title') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-5">
                                <label for="meta_keywords" class="form-label">Meta Keywords<em>*</em> </label>
                                <input type="text" id="meta_keywords" class="form-control form-control-solid"  wire:model="form.meta_keywords" />
                                @error('form.meta_keywords') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-5">
                                <label for="meta_description" class="form-label">Meta Description<em>*</em> </label>
                                <textarea wire:model="form.meta_description" class="form-control form-control-solid"></textarea>
                                @error('form.meta_description') <span class="text-danger">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Card body-->
            </div>


            @if($edit_id != '')
                <button type="submit" class="btn btn-danger">Update</button>
            @else
                <button type="submit" class="btn btn-primary">Save</button>
            @endif

        </form>
    </div>
</div>
