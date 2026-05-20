---
outline: deep
---

<script setup>
import Select from '../../src/components/select/select'
import { ref } from 'vue'

const selected = ref('javascript')

const onChange = () => alert('test');
</script>

# Select

Features:

- Color
- Size
- Value binding

## Usage

```vue
<script setup>
import { Select } from 'bangui';
</script>

<template>
  <Select :options="['Option 1', 'Option 2', 'Option 3']" />
</template>
```

::: raw
<Select :options="['Option 1', 'Option 2', 'Option 3']" />
:::

## Options

Set `options` using `options` props.

Options should be an array of primitive value. Each value used for the text and value for each option.

Or an array of object `{ id: '', name: '' }`. `id` used for the value, `name` used for the text.

```vue
<script setup>
import { Select } from 'bangui';
</script>

<template>
  <Select :options="['Option 1', 'Option 2', 'Option 3']" />
  <Select
    :options="[
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ]"
  />
</template>
```

::: raw
<Select :options="['Option 1', 'Option 2', 'Option 3']" />
<Select :options="[{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}, {id: 3, name: 'Option 3'}]" />
:::

## Color

Set select color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

It's also supports dark mode, enable it by adding `dark` class to `html` tag.

```vue
<script setup>
import { Select } from 'bangui';
</script>

<template>
  <Select color="primary" />
  <Select color="warning" />
  <Select color="error" />
  <Select color="light" />
  <Select color="success" />
</template>
```

::: raw

<div class="flex flex-wrap gap-2">
<Select color="primary" />
<Select color="warning" />
<Select color="error" />
<Select color="light" />
<Select color="success" />
</div>
:::

## Size

Set select size using `size` props. Supported values: `sm`, `md`, `lg`.

```vue
<script setup>
import { Select } from 'bangui';
</script>

<template>
  <Select size="sm" :options="['Small']" />
  <Select size="md" :options="['Medium']" />
  <Select size="lg" :options="['Large']" />
</template>
```

::: raw

<div class="flex flex-col items-start gap-2">
<Select size="sm" :options="['Small']" />
<Select size="md" :options="['Medium']" />
<Select size="lg" :options="['Large']" />
</div>
:::

## Custom Class

Add custom class using `class` attribute.

```vue
<script setup>
import { Select } from 'bangui';
</script>

<template>
  <Select class="w-full" />
</template>
```

::: raw
<Select class="w-full" />
:::

## V-Model

Bind a value using `v-model`.

```vue
<script setup>
import { Select } from 'bangui';
import { ref } from 'vue';

const selected = ref('javascript');
</script>

<template>
  <Select :options="['javascript', 'php', 'c++']" v-model="selected" />
</template>
```

::: raw
<Select :options="['javascript', 'php', 'c++']" v-model="selected" />
:::

Selected: {{ selected }}

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Select } from 'bangui';

const onChange = () => alert('test');
</script>

<template>
  <Select required :options="[1, 2, 3]" @change="onChange" />
</template>
```

::: raw
<Select required :options="[1,2,3]" @change="onChange" />
:::

## API

### Props

| Name                | Type                                              | Required | Default   | Description     |
| ------------------- | ------------------------------------------------- | -------- | --------- | --------------- |
| `options`           | `any[]` or `{id,name}[]`                          | :x:      | `[]`      | Select options  |
| `color`             | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Select color    |
| `size`              | `sm`, `md`, `lg`                                  | :x:      | `md`      | Select size     |
| All HTML attributes | `-`                                               | :x:      | `-`       | HTML attributes |

### Events

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| All HTML events | `-`  | HTML events |

### Model Value

| Name      | Type     | Description  |
| --------- | -------- | ------------ |
| `default` | `string` | Bind a value |
