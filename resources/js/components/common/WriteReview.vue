<template>
    
    <div class="write-review" id="Write_Review">
        <Form :validation-schema="schema" @submit="submit">
            <!-- <div class="row pt-1">
                <div class="col-auto">
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                        <label class="form-check-label" for="flexCheckDefault">
                            Reviewing this event
                        </label>
                    </div>
                </div>
            </div> -->
            <div class="row gx-3">
                <div class="col-md-12">
                    <VTextarea 
                        placeholder="Enter Your Message" 
                        v-model="form.review" 
                        name="review"
                        label="" 
                        required>
                    </VTextarea>
                </div>
            </div>
        
            <div class="row align-items-center justify-content-between">
                <div class="row">
                    <div class="col-12 text-muted fs-13">{{  review_char_count  }} of 1000 characters</div>
                </div>
                <div class="col-auto">
                    <div class="rats">
                            <div class="review-rating">
                                <label v-for="rating in [5,4,3,2,1] " :class="'star_label_'+rating">
                                    <input type="radio" name="rating" v-model="form.rating" :value="rating" :id="rating" >
                                    <span class="radio-label"></span>
                                </label>
                            </div>
                        <div class="text-danger fw-bold" v-if="form.rating == 1"> Poor! <Icon icon="fluent:emoji-angry-16-filled" class="fs-4 " /></div>
                        <div class="text-warning fw-bold" v-if="form.rating == 2"> Bad! <Icon icon="material-symbols:sentiment-sad" class="fs-4 " /></div>
                        <div class="text-info fw-bold" v-if="form.rating == 3"> Average! <Icon icon="material-symbols:recommend-sharp" class="fs-4 " /></div>
                        <div class="text-primary fw-bold" v-if="form.rating == 4"> Good! <Icon icon="tabler:mood-happy-filled" class="fs-4 " /></div>
                        <div class="text-success fw-bold" v-if="form.rating == 5"> Excellent! <Icon icon="bx:bxs-happy-heart-eyes" class="fs-4 " /></div>
                    </div>
                </div>
                <div class="col-auto">
                    <button class="btn btn-sm">Submit</button>
                </div>
            </div>
        </Form>
    </div>
</template>


<script setup>

	import { ref, reactive, computed, watch } from 'vue';
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup';
    import VTextarea from '@/components/common/VTextarea.vue' 

    const props = defineProps(['event_id']);
    const event_id = props.event_id;

    const schema = yup.object({
        review: yup.string().required().min(10).max(1000).label('review'),
    });

    const initialState = {
		server_messages: {
			type: "",
			messages: "",
		},
        rating : 5,
        review : "",
        is_submitting : false,
	};
	const form = reactive({ ...initialState });

    const auth = window.authUser;

    const review_char_count = computed(() =>{
        return form.review.length;
    });
    
    async function submit(){

        form.is_submitting = true;

        var form_data = new FormData();
        form_data.append('event_id',event_id);
        form_data.append('review',form.review);
        form_data.append('rating',form.rating);

        await axios.post('/api/review/add', form_data).then( (response) => {
            
            form.is_submitting = false;

            if(response.data.status_code == 200) {

                toast.success(response.data.msg);
                location.reload();

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

</script>