---
outline: deep
---

<script setup>
import Checkbox from '../../src/components/checkbox/checkbox'
import { ref } from 'vue'

const agree = ref(true);
const selected = ref(['javascript'])

const onCheck = () => alert('test');
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

## Without Label

`label` is optional.

```vue
<script setup>
import { Checkbox } from 'bangui';
</script>

<template>
  <Checkbox />
</template>
```

::: raw
<Checkbox />
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

## V-Model

### Boolean Value

Bind a single boolean value using `v-model`.

```vue
<script setup>
import { Checkbox } from 'bangui';
import { ref } from 'vue';

const agree = ref(true);
</script>

<template>
  <Checkbox label="Agree" v-model="agree" />
</template>
```

::: raw
<Checkbox label="Agree" v-model="agree" />
:::

Agree: {{ agree }}

### Array Value

Bind a multiple value (array) using `v-model`.

Specify each checkbox value using `input-value` props.

```vue
<script setup>
import { Checkbox } from 'bangui';
import { ref } from 'vue';

const selected = ref(['javascript', 'php', 'cpp']);
</script>

<template>
  <Checkbox label="Javascript" input-value="javascript" v-model="selected" />
  <Checkbox label="PHP" input-value="php" v-model="selected" />
  <Checkbox label="CPP" input-value="cpp" v-model="selected" />
</template>
```

::: raw

<div class="flex flex-col gap-2">
<Checkbox label="Javascript" input-value="javascript" v-model="selected" />
<Checkbox label="PHP" input-value="php" v-model="selected" />
<Checkbox label="CPP" input-value="cpp" v-model="selected" />
</div>
:::

Selected: {{ selected }}

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Checkbox } from 'bangui';
import { ref } from 'vue';

const onCheck = () => alert('test');
</script>

<template>
  <Checkbox
    id="remember_me"
    name="remember_me"
    label="Remember Me"
    @change="onCheck"
  />
</template>
```

::: raw
<Checkbox id="remember_me" name="remember_me" label="Remember Me" @change="onCheck" />
:::

## API

### Props

| Name                | Type                                              | Required | Default   | Description          |
| ------------------- | ------------------------------------------------- | -------- | --------- | -------------------- |
| `color`             | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Checkbox color       |
| `inputValue`        | `string`                                          | :x:      | `null`    | Checkbox input value |
| `label`             | `string`                                          | :x:      | `null`    | Checkbox label       |
| `size`              | `sm`, `md`, `lg`                                  | :x:      | `md`      | Checkbox size        |
| All HTML attributes | `-`                                               | :x:      | `-`       | HTML attributes      |

### Events

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| All HTML events | `-`  | HTML events |

### Model Value

| Name      | Type                | Description                   |
| --------- | ------------------- | ----------------------------- |
| `default` | `string` or `any[]` | Bind a boolean or array value |
