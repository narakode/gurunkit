---
outline: deep
description: Learn how to use Gurun Kit pagination component
---

<script setup>
import Pagination from '../../src/components/pagination/pagination'
import { ref } from 'vue'

const active1 = ref(1)
</script>

# Pagination

Features:

- Item links
- Active item
- Prev and next button

## Usage

Set the total items using the `total` props.

```vue
<script setup>
import { Pagination } from 'gurunkit';
</script>

<template>
  <Pagination :total="5" />
</template>
```

::: raw
<Pagination
:total="5"
/>
:::

## Active

Set the active item using the `active` props.

```vue
<script setup>
import { Pagination } from 'gurunkit';
</script>

<template>
  <Pagination :total="5" :active="2" />
</template>
```

::: raw
<Pagination
:total="5"
:active="2"
/>
:::

## Active V-Model

Use `v-model:active` to bind the active item.

```vue
<script setup>
import { Pagination } from 'gurunkit';
import { ref } from 'vue';

const active = ref(1);
</script>

<template>
  <Pagination :total="5" v-model:active="active" />
</template>
```

::: raw
<Pagination
:total="5"
v-model:active="active1"
/>
:::

## API

### Props

| Name     | Type     | Required           | Default | Description |
| -------- | -------- | ------------------ | ------- | ----------- |
| `total`  | `number` | :white_check_mark: | `0`     | Total items |
| `active` | `number` | :x:                | `null`  | Active item |

### Events

| Name            | Type     | Description                    |
| --------------- | -------- | ------------------------------ |
| `update:active` | `number` | `active` prop value is updated |

### Model Value

| Name     | Type     | Description     |
| -------- | -------- | --------------- |
| `active` | `number` | Set active item |
