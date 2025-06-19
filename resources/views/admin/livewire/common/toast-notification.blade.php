
<div>
    @if ($message)
      <div class="toastr"> {{ $message }}</div>
    @endif
</div>

<style>
    .toastr {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    z-index: 9999;
    animation: fadein 0.5s, fadeout 0.5s 4.5s;
    padding-left: 20px !important;
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeout {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
 </style>
