<template>
    <div class="form-field">
        <Field :name="name" :label="label" v-slot="{ field, meta, errors }" >

            <label class="label" v-if="label != ''">{{ label }} <span v-if="required" class="text-danger">*</span> </label>
            <select
             class="form-select bg-white"
             v-bind="field"
             :name="name"
             v-on:change="updateValue($event.target.value)"
             :placeholder="placeholder"
             :class="{
                'border-danger' : !meta.valid && meta.touched,
                'form-control-lg' : size == 'large',
                'form-control-sm' : size == 'small'
             }"
            >
                <option value=""> {{ placeholder }}</option>

                <option :value="option.key" v-for="(option,index) in options" :key="index">{{ option.value }}</option>
            </select>
        </Field>
        <ErrorMessage  :name="name" as="div" class="error"></ErrorMessage>
    </div>
</template>

<script setup>

    import { Field, ErrorMessage } from 'vee-validate';
    const props = defineProps({
        options: {
            type: [Array,Object],
            required: true,
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
        required: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "",
        },
        modelValue: [String,Number],
    });

    const emit = defineEmits(['update:modelValue'])

    function updateValue(value) {
        emit('update:modelValue', value)
    }

</script>
