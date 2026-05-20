---
outline: deep
---

<script setup>
import Input from '../../src/components/input/input'
import { ref } from 'vue'

const name = ref('')

const onInput = () => alert('test');
</script>

# Input

Features:

- Color
- Size
- Input File
- Value binding

## Usage

```vue
<script setup>
import { Input } from 'bangui';
</script>

<template>
  <Input placeholder="Input placeholder" />
</template>
```

::: raw
<Input placeholder="Input placeholder" />
:::

## Color

Set input color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

It's also supports dark mode, enable it by adding `dark` class to `html` tag.

```vue
<script setup>
import { Input } from 'bangui';
</script>

<template>
  <Input color="primary" placeholder="Primary" />
  <Input color="warning" placeholder="Warning" />
  <Input color="error" placeholder="Error" />
  <Input color="light" placeholder="Light" />
  <Input color="success" placeholder="Success" />
</template>
```

::: raw

<div class="flex flex-wrap gap-2">
<Input color="primary" placeholder="Primary" />
<Input color="warning" placeholder="Warning" />
<Input color="error" placeholder="Error" />
<Input color="light" placeholder="Light" />
<Input color="success" placeholder="Success" />
</div>
:::

## Size

Set input size using `size` props. Supported values: `sm`, `md`, `lg`.

```vue
<script setup>
import { Input } from 'bangui';
</script>

<template>
  <Input size="sm" placeholder="Small" />
  <Input size="md" placeholder="Medium" />
  <Input size="lg" placeholder="Large" />
</template>
```

::: raw

<div class="flex flex-col items-start gap-2">
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />
</div>
:::

## Input File

Set input file using `type` props with `file` value.

```vue
<script setup>
import { Input } from 'bangui';
</script>

<template>
  <Input type="file" />
</template>
```

::: raw

<div class="flex flex-col items-start gap-2">
<Input type="file" />
</div>
:::

## Custom Class

Add custom class using `class` attribute.

```vue
<script setup>
import { Input } from 'bangui';
</script>

<template>
  <Input placeholder="Input fullwidth" class="w-full" />
</template>
```

::: raw
<Input placeholder="Input fullwidth" class="w-full" />
:::

## V-Model

Bind a value using `v-model`.

```vue
<script setup>
import { Input } from 'bangui';
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <Input placeholder="Enter your name" v-model="name" />
</template>
```

::: raw
<Input placeholder="Enter your name" v-model="name" />
:::

Your name: {{ name }}

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Input } from 'bangui';

const onInput = () => alert('test');
</script>

<template>
  <Input type="password" placeholder="Show Alert" @input="onInput" />
</template>
```

::: raw
<Input type="password" placeholder="Show Alert" @input="onInput" />
:::

## API

### Props

| Name                | Type                                              | Required | Default   | Description     |
| ------------------- | ------------------------------------------------- | -------- | --------- | --------------- |
| `color`             | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Button color    |
| `size`              | `sm`, `md`, `lg`                                  | :x:      | `md`      | Button size     |
| All HTML attributes | `-`                                               | :x:      | `-`       | HTML attributes |

### Events

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| All HTML events | `-`  | HTML events |

### Model Value

| Name      | Type     | Description  |
| --------- | -------- | ------------ |
| `default` | `string` | Bind a value |
