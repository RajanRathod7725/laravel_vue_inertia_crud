<template>
    <div class="contact-form">
        <h3>Get in touch</h3>
        <Form :validation-schema="schema" @submit="submit()">
            
            <div class="row">
                <div class="col-12 pb-3">
                    <div v-if="form.server_messages.messages != ''">
                        <ServerMessage  :server_messages="form.server_messages"  />
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <VTextInput
                            type="text" 
                            name="name"
                            label=""
                            v-model="form.name"
                            :placeholder="'Enter You Name'"
                            :classes="'form-control bg-white'"
                            id="inputPassword2"
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <VTextInput
                            type="text" 
                            name="email"
                            label=""
                            v-model="form.email"
                            :placeholder="'Enter You Email Address'"
                            :classes="'form-control bg-white'"
                            id="inputPassword2"
                        />
                    </div>
                </div>
                <div class="form-group">
                    <VTextarea 
                        name="message"
                        placeholder="Enter Your Message" 
                        v-model="form.message" 
                        label=""
                        required>
                    </VTextarea>
                    <small class="text-primary"> {{ message_length }} of 1000 characters </small>
                </div>

            </div>
            <p>By submitting this form, you explicitly agree to Agile 30
            <br> <a href="#"><u><b>Privacy Policy</b></u></a> and <a href="#"><u><b>Terms of service.</b></u></a>
            </p>
            <div class="form-feild mt-5">
                <button type="submit" class="btn" :disabled="form.is_submitting">
                    <span v-if="form.is_submitting">Submitting...</span>
                    <span v-else>Lets Connect</span>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </Form>
    </div>
</template>


<script setup>

    import {ref, reactive, computed} from 'vue';
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup';
    import VTextInput from '@/components/common/VTextInput.vue' 
    import VTextarea from '@/components/common/VTextarea.vue' 
    import ServerMessage from '@/components/common/ServerMessage.vue'

	const initialState = {
		server_messages : {
			type: "",
			messages: "",
    	},
        name : "",
        email : "",
        message : "",
        is_submitting : false,
    };
    const form = reactive({...initialState});
    
    const message_length = computed(() => {
        return form.message.length;
    });

    const schema = yup.object({
        name: yup.string().required().min(2).label('name'),
        email: yup.string().required().email().min(3).label('email'),
        message: yup.string().required().min(20).max(1000).label('message')
    });

    async function submit(){

        form.is_submitting = true;

        var form_data = new FormData();
        form_data.append('name',form.name);
        form_data.append('email',form.email);
        form_data.append('message',form.message);

        await axios.post('/api/inquiry', form_data).then( (response) => {
            
            form.is_submitting = false;

            if(response.data.status_code == 200) {
            
                toast.success(response.data.msg);
                resetData();

            }else{
                try{
                    form.server_messages.type = "error";
                    form.server_messages.messages = JSON.parse(response.data.msg);
                }catch(err){
                    form.server_messages.type = "error";
                    form.server_messages.messages = response.data.msg;
                }
            }
            
        }).catch((error) => {
            form.server_messages.type = "error";
            form.server_messages.messages = error;
            console.log(error);
        });

    }

	function resetData(){
        Object.assign(form, initialState);
    }

</script>