---
outline: deep
description: Learn how to use Gurun Kit radio component
---

<script setup>
import Radio from '../../src/components/radio/radio'
import { ref } from 'vue'

const selected = ref('javascript')

const onCheck = () => alert('test');
</script>

# Radio

Features:

- Color
- Size
- Label
- Value binding

## Usage

```vue
<script setup>
import { Radio } from 'gurunkit';
</script>

<template>
  <Radio label="Radio" />
</template>
```

::: raw
<Radio label="Radio" />
:::

## Without Label

`label` is optional.

```vue
<script setup>
import { Radio } from 'gurunkit';
</script>

<template>
  <Radio />
</template>
```

::: raw
<Radio />
:::

## Color

Set radio color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

It's also supports dark mode, enable it by adding `dark` class to `html` tag.

```vue
<script setup>
import { Radio } from 'gurunkit';
</script>

<template>
  <Radio color="primary" label="Primary" />
  <Radio color="warning" label="Warning" />
  <Radio color="error" label="Error" />
  <Radio color="light" label="Light" />
  <Radio color="success" label="Success" />
</template>
```

::: raw

<div class="flex flex-wrap gap-4">
<Radio color="primary" label="Primary" />
<Radio color="warning" label="Warning" />
<Radio color="error" label="Error" />
<Radio color="light" label="Light" />
<Radio color="success" label="Success" />
</div>
:::

## Size

Set radio size using `size` props. Supported values: `sm`, `md`, `lg`.

```vue
<script setup>
import { Radio } from 'gurunkit';
</script>

<template>
  <Radio size="sm" label="Small" />
  <Radio size="md" label="Medium" />
  <Radio size="lg" label="Large" />
</template>
```

::: raw

<div class="flex flex-wrap gap-4">
<Radio size="sm" label="Small" />
<Radio size="md" label="Medium" />
<Radio size="lg" label="Large" />
</div>
:::

## V-Model

Bind a value using `v-model`.

Specify each radio value using `input-value` props.

```vue
<script setup>
import { Radio } from 'gurunkit';
import { ref } from 'vue';

const selected = ref('javascript');
</script>

<template>
  <Radio label="Javascript" input-value="javascript" v-model="selected" />
  <Radio label="PHP" input-value="php" v-model="selected" />
  <Radio label="CPP" input-value="cpp" v-model="selected" />
</template>
```

::: raw

<div class="flex flex-col gap-2">
<Radio label="Javascript" input-value="javascript" v-model="selected" />
<Radio label="PHP" input-value="php" v-model="selected" />
<Radio label="CPP" input-value="cpp" v-model="selected" />
</div>
:::

Selected: {{ selected }}

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Radio } from 'gurunkit';
import { ref } from 'vue';

const onCheck = () => alert('test');
</script>

<template>
  <Radio
    id="period_year"
    input-value="_year"
    name="period"
    label="Year"
    @change="onCheck"
  />
  <Radio
    id="period_month"
    input-value="month"
    name="period"
    label="Month"
    @change="onCheck"
  />
</template>
```

::: raw

<div class="flex gap-4">
<Radio id="period_year" input-value="_year" name="period" label="Year" @change="onCheck" />
<Radio id="period_month" input-value="month" name="period" label="Month" @change="onCheck" />
</div>
:::

## API

### Props

| Name                | Type                                              | Required | Default   | Description       |
| ------------------- | ------------------------------------------------- | -------- | --------- | ----------------- |
| `color`             | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Radio color       |
| `inputValue`        | `string`                                          | :x:      | `null`    | Radio input value |
| `label`             | `string`                                          | :x:      | `null`    | Radio label       |
| `size`              | `sm`, `md`, `lg`                                  | :x:      | `md`      | Radio size        |
| All HTML attributes | `-`                                               | :x:      | `-`       | HTML attributes   |

### Events

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| All HTML events | `-`  | HTML events |

### Model Value

| Name      | Type     | Description           |
| --------- | -------- | --------------------- |
| `default` | `string` | Bind a selected value |
