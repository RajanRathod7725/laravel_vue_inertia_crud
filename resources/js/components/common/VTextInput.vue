<template>
    <div :class="[formFieldClasses,'form-field']">
        <Field :name="name" label="label" v-slot="{ field, meta, errors }" v-model="value">
            <label v-if="label != ''" class="label">{{ label }} <span v-if="required" class="text-danger">*</span> </label>
            <!-- <div class="input-group mb-3"> -->
                <input
                class=""
                :type="type"
                v-bind="field"
                :placeholder="placeholder"
                :class="[
                    { 'border-danger' : !meta.valid && meta.touched },
                    { 'form-control-lg' : size == 'large' },
                    { 'form-control-sm' : size == 'small' },
                    classes,
                ]"
                :max="max"
                :min="min"
                :readonly="readonly"
                :disabled="disabled"
                />
                <!-- <div class="input-group-append" v-if="input_group_text">
                        <span class="input-group-text h-100 form-control-solid" id="basic-addon2">{{ input_group_text }}</span>
                    </div>
                </div> -->
        </Field>
        <ErrorMessage :name="name" as="div" :class="error_class"></ErrorMessage>
    </div>
</template>

<script setup>

    import { Field, ErrorMessage } from 'vee-validate';

    const props = defineProps({
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
        size: {
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
            default: false
        },
        error_class: {
            type: String,
            default: 'error'
        },
        modelValue: [String,Number],
        classes: String,
        formFieldClasses: {
            type: String,
            default: ""
        },
        max: {
            type : String,
            default: ""
        },
        min: {
            type : String,
            default: ""
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    });

    const emit = defineEmits(['update:modelValue'])
    const {modelValue} = toRefs(props);

    const value = computed({
        get(){
            return modelValue.value;
        },
        set(value){
            emit('update:modelValue', value);
        }
    });


</script>
