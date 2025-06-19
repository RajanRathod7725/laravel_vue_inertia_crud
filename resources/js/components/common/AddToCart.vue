<template>
    <div class="modal fade cart_popup" id="addToCartModal" aria-hidden="true" aria-labelledby="cart-popup" tabindex="-1" data-bs-keyboard="false" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-0 mb-4">
                    <h5 class="modal-title">Booking Detail</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <div class="input-date">
                        <label>Booking Date<em>*</em></label>
                        <div class="input-wpr popup-date">
                            <VueDatePicker range :format="'dd-MM-yyyy'" :enable-time-picker="false" v-model="form.date" :min-date="new Date()" @update:model-value="handleDate">
                            </VueDatePicker>
                        </div>
                    </div>
                    <div class="product-name-price" v-if="form.final_amount>0 && props.type=='EQUIPMENT'">
                        <div class="name-price">
                            <h6> {{props.product.equipment.equipment_master.name}}<span v-if="form.selected_equipment_price>0">{{ form.selected_equipment_price }} SAR</span></h6>
                            <ul v-if="form.selected_addons.length>0">
                                <li v-for="(selected_addon, index) in form.selected_addons">{{ selected_addon.name}}<span v-if="selected_addon.total_addon_price>0">{{ selected_addon.total_addon_price }} SAR</span><span v-else>Free</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="price-data" v-if="form.final_amount>0">
                        <table>
                            <tbody>
                            <tr>
                                <th>Subtotal</th>
                                <td align="right"><span v-if="form.sub_total>0">{{ form.sub_total }}</span> SAR</td>
                            </tr>
                            <tr>
                                <th>Tax</th>
                                <td align="right"><span v-if="form.tax_amount>0">{{ form.tax_amount }}</span> SAR</td>
                            </tr>
<!--                            <tr>
                                <th><label for="driver-fee"><input type="checkbox" id="driver-fee" checked><span>Driver Fee</span></label></th>
                                <td align="right">$10</td>
                            </tr>-->
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>Total</th>
                                <td align="right"><span v-if="form.final_amount>0">{{ form.final_amount }}</span> SAR</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="accommodation" v-if="form.final_amount>0">
                        <label class="cst-checkbox">
                            <input type="checkbox" checked>
                            <span>is accommodation included?</span>
                        </label>
                    </div>
                    <div class="btn-wrp d-flex">
                        <button type="button" class="btn w-100" :disabled="form.date == null" @click="addToCart()">Confirm</button>
                    </div>
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

const cartStorePersist = useCartStorePersist();
const is_loading = ref(false);
const initialState = {
  server_messages: {
    type: "",
    messages: "",
  },
  is_submitting: false,
  is_listing: false,
  date:null,
  selected_addons:[],
  selected_equipment_price:0,
  sub_total:0,
  tax_amount:0,
  final_amount:0
};

const form = reactive({...initialState});
const emit = defineEmits(['closeAddToCartModal'])
const props = defineProps(['show_cart_modal','product','date','addons', 'type']);

/*onUpdated(() => {
    form.addons = props.addons;
});*/

/*onMounted(() => {
    form.date = props.date;
    form.addons = props.addons;
    console.log(form.date);
});*/

function closeModal() {
    form.date = null;
    form.selected_equipment_price = 0;
    form.sub_total = 0;
    form.tax_amount = 0;
    form.final_amount = 0;
    emit('closeAddToCartModal');
}

const handleDate = (dateRange) => {
    //find the days
    form.date = dateRange;

    //calculate the total price
    var price = cartStorePersist.calculatePrice(props.type, props.product, form.date);

    form.selected_equipment_price = price.equipment_price;
    form.selected_addons = price.selected_addons;
    form.sub_total = price.sub_total;
    form.tax_amount = price.tax_amount;
    form.final_amount = price.final_amount;

}

function addToCart(){
    cartStorePersist.addToCart(props.type, props.product, form.date);
    closeModal();
}
</script>
