---
outline: deep
description: Learn how to use Gurun Kit form item component
---

<script setup>
import FormItem from '../../src/components/form-item/form-item'
import Input from '../../src/components/input/input'
</script>

# Form Item

A component to create a form item element with a label and a form element.

## Usage

```vue
<script setup>
import { FormItem, Input } from 'gurunkit';
</script>

<template>
  <FormItem label="Name" v-slot="{ id }">
    <Input :id="id" placeholder="Jhon doe" class="w-full" />
  </FormItem>
</template>
```

::: raw
<FormItem label="Name" v-slot="{ id }">
<Input :id="id" placeholder="Jhon doe" class="w-full" />
</FormItem>
:::

## API

### Props

| Name                | Type     | Required           | Default   | Description                |
| ------------------- | -------- | ------------------ | --------- | -------------------------- |
| `id`                | `string` | :x:                | `useId()` | `for` label and `id` Input |
| `label`             | `string` | :white_check_mark: | `-`       | Form item label            |
| All HTML attributes | `-`      | :x:                | `-`       | HTML attributes            |

### Slots

| Name      | Data             | Description         |
| --------- | ---------------- | ------------------- |
| `default` | `{ id: string }` | Render form element |
