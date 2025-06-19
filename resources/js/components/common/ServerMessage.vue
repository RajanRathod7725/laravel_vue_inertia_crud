<template>
    <div v-if="server_messages.messages != ''" class="p-2 text-white rounded" :class="[ (server_messages.type == 'error') ? 'bg-danger' : 'bg-'+server_messages.type  ]">
        <ul v-for="error in loopServerErrors(server_messages.messages)">
            <li>
                <i v-if="server_messages.type == 'error'" class="fa fa-exclamation" />
                <i v-if="server_messages.type == 'success'" class="fa fa-check" />
                 {{ error }}
            </li>
        </ul>
    </div>
</template>

<script setup>

    import { onMounted } from 'vue';

    const { server_messages } = defineProps(['server_messages']);

    function loopServerErrors(errors){
      var errors_array = [];
      if(_.isObject(errors)){
        _.forEach( errors, (value,key) => {
          errors_array.push(value[0]);
        });
      }else{
        errors_array.push(errors);
      }
      return errors_array;
    }


    onMounted(() => {
      server_messages.value = loopServerErrors(server_messages);
    });

</script>
