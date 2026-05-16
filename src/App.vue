<script setup>
import { Checkbox } from './components/checkbox/checkbox';
import { ref } from 'vue';

const single = ref(true);
const multi = ref(['test 2']);
</script>

<template>
  <div>
    <Checkbox label="Test" v-model="single" />

    {{ single }}

    <Checkbox label="Test 1" input-value="test 1" v-model="multi" />
    <Checkbox label="Test 2" input-value="test 2" v-model="multi" />
    <Checkbox label="Test 3" input-value="test 3" v-model="multi" />

    {{ multi }}
  </div>
</template>
