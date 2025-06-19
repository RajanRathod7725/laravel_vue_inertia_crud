<script>var hostUrl = "backend/assets/";</script>
<!--begin::Global Javascript Bundle(mandatory for all pages)-->
<script src="{{ asset("backend/assets/plugins/global/plugins.bundle.js") }}"></script>
<script src="{{ asset("backend/assets/js/scripts.bundle.js") }}"></script>
{{-- <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script> --}}
<!--end::Global Javascript Bundle-->
<script src="{{ asset("backend/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js") }}"></script>
<!--begin::Vendors Javascript(used for this page only)-->
<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
<script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
<script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
<script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
<script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
<script src="https://cdn.amcharts.com/lib/5/map.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js"></script>
<script src="{{ asset("backend/assets/plugins/custom/datatables/datatables.bundle.js") }}"></script>
<!--end::Vendors Javascript-->
<!--begin::Custom Javascript(used for this page only)-->
<script src="{{ asset("backend/assets/js/widgets.bundle.js") }}"></script>
<script src="{{ asset("backend/assets/js/custom/widgets.js") }}"></script>
<script src="{{ asset("backend/assets/js/custom/apps/chat/chat.js") }}"></script>
<script src="{{ asset("backend/assets/js/custom/utilities/modals/upgrade-plan.js") }}"></script>
<script src="{{ asset("backend/assets/js/custom/utilities/modals/create-app.js") }}"></script>
<script src="{{ asset("backend/assets/js/custom/utilities/modals/new-target.js") }}"></script>
<script src="{{ asset("backend/assets/js/custom/utilities/modals/users-search.js") }}"></script>
<script src="{{ asset("backend/assets/js/tinymce/tinymce.min.js") }}"></script>
{{-- <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script> --}}
{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.min.js"></script> --}}
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://cdn.ckeditor.com/ckeditor5/38.0.1/classic/ckeditor.js"></script>


<script>


    $(document).ready(function () {

        $('#select2').select2();
    });
    // let editor;
    // ClassicEditor.create(document.querySelector('.ckeditor'))
    //     .then(newEditor => {
    //         newEditor.model.document.on('change:data', (evt, data) => {
    //             console.log(newEditor.getData());
    //             editor = newEditor;
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Editor initialization error.', error);
    //     });

</script>

@stack('scripts')

@livewireScripts

<script src="https://unpkg.com/alpinejs@3.12.2/dist/cdn.min.js"></script>




