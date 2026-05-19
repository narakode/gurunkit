---
outline: deep
---

<script setup>
import Checkbox from '../../src/components/checkbox/checkbox'
import { ref } from 'vue'

const name = ref('')

const onInput = () => alert('test');
</script>

# Checkbox

Features:

- Color
- Size
- Label
- Single value binding (boolean)
- Multiple value binding (array)

## Usage

```vue
<script setup>
import { Checkbox } from 'bangui';
</script>

<template>
  <Checkbox label="Checkbox" />
</template>
```

::: raw
<Checkbox label="Checkbox" />
:::

## Color

Set checkbox color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

It's also supports dark mode, enable it by adding `dark` class to `html` tag.

```vue
<script setup>
import { Checkbox } from 'bangui';
</script>

<template>
  <Checkbox color="primary" label="Primary" />
  <Checkbox color="warning" label="Warning" />
  <Checkbox color="error" label="Error" />
  <Checkbox color="light" label="Light" />
  <Checkbox color="success" label="Success" />
</template>
```

::: raw

<div class="flex flex-wrap gap-4">
<Checkbox color="primary" label="Primary" />
<Checkbox color="warning" label="Warning" />
<Checkbox color="error" label="Error" />
<Checkbox color="light" label="Light" />
<Checkbox color="success" label="Success" />
</div>
:::

## Size

Set checkbox size using `size` props. Supported values: `sm`, `md`, `lg`.

```vue
<script setup>
import { Checkbox } from 'bangui';
</script>

<template>
  <Checkbox size="sm" label="Small" />
  <Checkbox size="md" label="Medium" />
  <Checkbox size="lg" label="Large" />
</template>
```

::: raw

<div class="flex flex-wrap gap-4">
<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />
<Checkbox size="lg" label="Large" />
</div>
:::

<!-- ## Custom Class

Add custom class using `class` attribute.

```vue
<script setup>
import { Checkbox } from 'bangui';
</script>

<template>
  <Checkbox placeholder="Checkbox fullwidth" class="w-full" />
</template>
```

::: raw
<Checkbox placeholder="Checkbox fullwidth" class="w-full" />
:::

## V-Model

Bind a value using `v-model`.

```vue
<script setup>
import { Checkbox } from 'bangui';
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <Checkbox placeholder="Enter your name" v-model="name" />
</template>
```

::: raw
<Checkbox placeholder="Enter your name" v-model="name" />
:::

Your name: {{ name }}

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Checkbox } from 'bangui';

const onInput = () => alert('test');
</script>

<template>
  <Checkbox type="password" placeholder="Show Alert" @checkbox="onInput" />
</template>
```

::: raw
<Checkbox type="password" placeholder="Show Alert" @checkbox="onInput" />
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
| `default` | `string` | Bind a value | -->
