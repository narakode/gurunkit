---
outline: deep
description: Learn how to use Gurun Kit modal component
---

<script setup>
import Modal from '../../src/components/modal/modal'
import Button from '../../src/components/button/button'
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>

# Modal

Modal is a component that dipslays a popup dialog.

Features:

- Modal
- Parts (header, body, footer)
- Transition
- Close on click outside

## Usage

```vue
<script setup>
import { Modal, Button } from 'gurunkit';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <Button @click="visible = true">Open Modal</Button>
  <Modal v-model:visible="visible"> Modal Body </Modal>
</template>
```

::: raw
<Button @click="visible1 = true">Open Modal</Button>
<Modal v-model:visible="visible1">
Modal Body
</Modal>
:::

## Visibility

Control the modal visibility by binding the `visible` prop to a boolean value. Supports `v-model` as well.

## Parts

Supported parts: header, body, footer.

### Header

Only rendered when the `title` prop is set. Contains the modal title and a close button.

```vue
<script setup>
import { Modal, Button } from 'gurunkit';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <Button @click="visible = true">Open Modal</Button>
  <Modal title="Modal Title" v-model:visible="visible"> Modal Body </Modal>
</template>
```

::: raw
<Button @click="visible2 = true">Open Modal</Button>
<Modal title="Modal Title" v-model:visible="visible2">
Modal Body
</Modal>
:::

### Body

Always rendered. Renders anything inside the default slot.

### Footer

Only rendered when the `footer` slot is provided. Renders the `footer` slot.

```vue
<script setup>
import { Modal, Button } from 'gurunkit';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <Button @click="visible = true">Open Modal</Button>
  <Modal v-model:visible="visible">
    Modal Body
    <template #footer>
      <Button @click="visible = false">Close</Button>
    </template>
  </Modal>
</template>
```

::: raw
<Button @click="visible3 = true">Open Modal</Button>
<Modal v-model:visible="visible3">
Modal Body
<template #footer>
<Button @click="visible3 = false">Close</Button>
</template>
</Modal>
:::

## API

### Props

| Name      | Type      | Required | Default | Description              |
| --------- | --------- | -------- | ------- | ------------------------ |
| `visible` | `boolean` | :x:      | `-`     | Control modal visibility |
| `title`   | `string`  | :x:      | `-`     | Modal title              |

### Events

| Name             | Type      | Description                     |
| ---------------- | --------- | ------------------------------- |
| `update:visible` | `boolean` | `visible` prop value is updated |
| `close`          | `-`       | Modal is closed                 |

### Model Value

| Name      | Type      | Description        |
| --------- | --------- | ------------------ |
| `visible` | `boolean` | Control visibility |
