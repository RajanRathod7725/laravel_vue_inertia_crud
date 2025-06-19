<template>
    <div class="form-group">
        <div :class="active_tab=='order'?'account_btn active':'account_btn'">
            <a role="button" @click="redirect('orders')" class="btn w-100">Orders</a>
        </div>
        <div :class="active_tab=='equipment'?'account_btn active':'account_btn'">
            <a role="button" @click="redirect('equipments')" class="btn w-100">Equipments</a>
        </div>
        <div :class="active_tab=='vehicle'?'account_btn active':'account_btn'">
            <a role="button" @click="redirect('vehicles')" class="btn w-100">Vehicles</a>
        </div>
        <div :class="active_tab=='profile'?'account_btn active':'account_btn'">
            <a role="button" @click="redirect('profile')" class="btn w-100">My Profile</a>
        </div>
    </div>
</template>

<script setup>


    const props = defineProps({
        url: {
            type: String,
            default: 'text',
        },
        active_tab: {
            type: String,
            default: 'text',
        },

    });

    async function redirect(tab){
        window.location.href = props.url+'/user/profile?tab='+tab;
    }


</script>
