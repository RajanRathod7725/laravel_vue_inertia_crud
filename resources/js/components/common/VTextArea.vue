<template>
    <div>
        <Field :name="name" label="label" v-slot="{ field, meta, errors }" >
            <label class="label" v-if="label != ''">{{ label }} <span v-if="required" class="text-danger">*</span></label>
            <textarea
                class=""
                v-bind="field"
                v-on:input="updateValue($event.target.value)"
                :placeholder="placeholder"
                :class="[
                    { 'border-danger' : !meta.valid && meta.touched },
                    { 'form-control-lg' : size == 'large' },
                    { 'form-control-sm' : size == 'small' },
                ]"
                :max="max"
                :min="min"
                :readonly="readonly"
                :disabled="disabled"
                :title="title"
            >{{ props.modelValue }}</textarea>
        </Field>
        <ErrorMessage :name="name" as="div" class="error"></ErrorMessage>
    </div>
</template>

<script setup>
    import { Field, ErrorMessage } from 'vee-validate';

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
        placeholder: {
            type: String,
            default: "",
        },
        title: {
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
        modelValue: [String,Number],
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

    function updateValue(value) {
        emit('update:modelValue', value)
    }
</script>
