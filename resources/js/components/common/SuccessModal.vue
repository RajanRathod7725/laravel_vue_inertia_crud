<template>
    <div class="modal fade cart_popup" id="successModal" aria-hidden="true" aria-labelledby="cart-popup" tabindex="-1" data-bs-keyboard="false" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-0 mb-4">
                    <h5 class="modal-title">Booking Detail</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, reactive, watch, computed, onMounted,onUpdated} from 'vue';
import { Icon } from '@iconify/vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import {useCartStorePersist} from "../../stores/cartStorePersist";

</script>
