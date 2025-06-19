<template>

    <!-- Section - Contacts -->
    <section class="lui-section lui-gradient-bottom" id="contact-section">

        <!-- Heading -->
        <div class="lui-heading">
            <div class="container">

                <div class="m-titles align-center">
                    <h2 class="m-title splitting-text-anim-1 scroll-animate pt-5" data-splitting="words" data-animate="active">
                        <span> Contact Me </span>
                    </h2>
                    <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Let’s <b>Talk About Ideas</b>
                </span>
                    </div>
                </div>

            </div>
        </div>

        <!-- Contact -->
        <div class="lui-contacts v-line v-line-left">
            <div class="container">

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">

                        <div class="numbers-items">
                            <div class="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                <div class="icon">
                                    <i aria-hidden="true" class="far fa-map"></i>
                                </div>
                                <div class="title">
                                    <span> Address </span>
                                </div>
                                <div class="lui-text">
                                    <span> Gujarat, India </span>
                                </div>
                            </div>
<!--                            <div class="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                <div class="icon">
                                    <i aria-hidden="true" class="far fa-user"></i>
                                </div>
                                <div class="title">
                                    <span> Freelance </span>
                                </div>
                                <div class="lui-text">
                                    <span> Available Right Now </span>
                                </div>
                            </div>-->
                            <div class="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                <div class="icon">
                                    <i aria-hidden="true" class="far fa-envelope"></i>
                                </div>
                                <div class="title">
                                    <span> Email </span>
                                </div>
                                <div class="lui-text">
                                    <span> rajdev7725[at]gmail.com </span>
                                </div>
                            </div>
                            <div class="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                <div class="icon">
                                    <i aria-hidden="true" class="far fa-address-book"></i>
                                </div>
                                <div class="title">
                                    <span> Phone </span>
                                </div>
                                <div class="lui-text">
                                    <span> +91 989 - 898 - 2946 </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">

                        <div class="contacts-form scrolla-element-anim-1 scroll-animate" data-animate="active">
                            <div class="bg-img" style="background-image: url(/images/pat-1.png);"></div>
                            <div class="contacts-form">
                                <Form :validation-schema="schema" @submit="submit()">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                                                <VTextInput
                                                    type="text"
                                                    v-model="form.name"
                                                    name="name"
                                                    label="Your Full Name"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                            <div class="group">
                                                <VTextInput
                                                    type="email"
                                                    v-model="form.email"
                                                    name="email"
                                                    label="Your Email Address"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>
<!--                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="group">
                                                <label>
                                                    Your Subject <b>*</b>
                                                    <input type="text" name="subject" >
                                                </label>
                                            </div>
                                        </div>-->
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="group">
                                                <VTextarea
                                                    placeholder="Enter your message"
                                                    v-model="form.message"
                                                    name="message"
                                                    label="Your Message"
                                                    required>
                                                </VTextarea>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                                            <div class="terms-label">* Accept the terms and conditions.</div>
<!--                                            <a href="#" class="btn" onclick="$('#cform').submit(); return false;">
                                                <span>Send Message</span>
                                            </a>-->
                                            <button type="submit" class="btn btn-lg" id="btn_submit" :disabled="form.is_submitting">
                                                <span class="pt-0" v-if="form.is_submitting">Sending...</span>
                                                <span class="pt-0" v-else>Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                                <AsyncServerMessage class="my-2" v-if="server_messages.messages != ''" :server_messages="server_messages"  />
                                <div class="alert-success" style="display: none;">
                                    <p>Thanks, your message is sent successfully.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="lui-bgtitle">
                    <span> Contact Me </span>
                </div>

            </div>
        </div>

    </section>

</template>


<script setup>

    import {ref, reactive} from 'vue';
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup';
    import VTextInput from '@/components/common/VTextInput.vue'
    import ServerMessage from '@/components/common/ServerMessage.vue'
    import VTextarea from '@/components/common/VTextarea.vue'

    const server_messages = reactive({
        type: "",
        messages: "",
    });

	const initialState = {
        name : "",
        email : "",
        message : "",
        is_submitting : false,
    };
    const form = reactive({...initialState});

    const schema = yup.object({
        name: yup.string().required().min(3).label('Name'),
        email: yup.string().email().required().min(3).label('Email'),
        message: yup.string().required().min(10).max(1000).label('Message')
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
                    server_messages.type = "error";
                    server_messages.messages = JSON.parse(response.data.msg);
                }catch(err){
                    server_messages.type = "error";
                    server_messages.messages = response.data.msg;
                }
            }

        }).catch((error) => {
            server_messages.type = "error";
            server_messages.messages = error;
            console.log(error);
        });

    }

	function resetData(){
        form.message = '';
        Object.assign(form, initialState);
    }

</script>
