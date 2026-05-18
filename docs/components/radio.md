---
outline: deep
---

<script setup>
import { Radio as BaseRadio } from '../../src/components/radio/radio'
import { ref } from 'vue'

const agree = ref(false)
const selected = ref('javascript');

function onChange(e) {
  console.log(e);
}
</script>

# Radio

Features:

- Label
- Color
- Size

## Usage

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio input-value="test" />
</template>
```

Output:

<BaseRadio />

## Label

Add label using `label` and `id` props.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio id="radio" label="Radio" />
</template>
```

Output:

<BaseRadio id="test_checkbox" label="Radio" />

## Wrapper Style

Set wrapper style via `classList.wrapper` props.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio
    id="wrapper_style"
    label="Wrapper Style"
    :class-list="{
      wrapper: 'flex items-center gap-2',
    }"
  />
</template>
```

Output:

<BaseRadio
    id="wrapper_style"
    label="Wrapper Style"
    :class-list="{
        wrapper: 'flex items-center gap-2'
    }"
/>

## Label Style

Set label style via `classList.label` props.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio
    id="label_style"
    label="Label Style"
    :class-list="{
      wrapper: 'flex items-center gap-2',
      label: 'font-bold text-red-600',
    }"
  />
</template>
```

Output:

<BaseRadio
    id="label_style"
    label="Label Style"
    :class-list="{
        wrapper: 'flex items-center gap-2',
      label: 'font-bold text-red-600',
    }"
/>

## Base Style

Set base radio style via `classList.base` props.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio
    id="base_style"
    label="Base Style"
    :class-list="{
      wrapper: 'flex items-center gap-2',
      base: 'appearance-none size-4 border rounded-full bg-white border-gray-300',
    }"
  />
</template>
```

Output:

<BaseRadio
    id="base_style"
    label="Base Style"
    :class-list="{
      wrapper: 'flex items-center gap-2',
      base: 'appearance-none size-4 border rounded-full bg-white border-gray-300',
    }"
/>

## Color

`light` is the default color.

Supported colors: `light`, `primary`, `secondary`, `warning`, `error`.

Set colors style list via `classList.colors.{colorName}` props.

Set color via `color` props.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio
    :class-list="{
      wrapper: 'flex items-center gap-2',
      base: 'appearance-none size-4 border rounded-full checked:bg-blue-600',
      colors: {
        light: 'border-gray-300',
        primary: 'border-blue-300',
        secondary: 'border-gray-300',
        warning: 'border-yellow-300',
        error: 'border-red-300',
      },
    }"
    color="error"
  />
</template>
```

Output:

<BaseRadio
    :class-list="{
        wrapper: 'flex items-center gap-2',
            base: 'appearance-none size-4 border rounded-full checked:bg-blue-600',
            colors: {
                light: 'border-gray-300 checked:bg-blue-600',
                primary: 'border-blue-300 checked:bg-blue-600',
                secondary: 'border-gray-300 checked:bg-gray-600',
                warning: 'border-yellow-300 checked:bg-yellow-600',
                error: 'border-red-300 checked:bg-red-600',
            },
    }"
    color="error"
/>

## Size

`md` is the default size.

Supported sizes: `sm`, `md`, `lg`.

Set sizes style list via `classList.sizes.{sizeName}` props.

Set size via `size` props.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
</script>

<template>
  <BaseRadio
    :class-list="{
      base: 'appearance-none border rounded-full',
      sizes: {
        sm: 'size-3',
        md: 'size-4',
        lg: 'size-6',
      },
    }"
    size="md"
  />
</template>
```

Output:

<BaseRadio
    :class-list="{
        base: 'appearance-none border rounded-full',
        sizes: {
            sm: 'size-3',
            md: 'size-4',
            lg: 'size-6',
        }
    }"
    size="md"
/>

## v-model

Add `v-model` directive to bind a value.

Each radio needs to have `inputValue` to provide the radio `value`.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';
import { ref } from 'vue';

const selected = ref('javascript');
</script>

<template>
  <BaseRadio
    label="Javascript"
    input-value="javascript"
    id="javascript"
    v-model="selected"
  />
  <BaseRadio label="PHP" input-value="php" id="php" v-model="selected" />
  <BaseRadio label="C++" input-value="cpp" id="cpp" v-model="selected" />

  <p>Selected: {{ selected }}</p>
</template>
```

Output:

<BaseRadio
label="Javascript"
id="javascript"
input-value="javascript"
v-model="selected"
/>
<BaseRadio
label="PHP"
id="php"
input-value="php"
v-model="selected"
/>
<BaseRadio
label="C++"
id="cpp"
input-value="cpp"
v-model="selected"
/>

<p>Selected: {{ selected }}</p>

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Radio as BaseRadio } from 'bangui';

function onChange(e) {
  console.log(e);
}
</script>

<template>
  <BaseRadio id="8" label="Notify Updates" required @change="onChange" />
</template>
```

Output:

<BaseRadio
id="8"
label="Notify Updates"
required
@change="onChange"
/>

## API

### Props

| Name                   | Type     | Required | Default | Description           |
| ---------------------- | -------- | -------- | ------- | --------------------- |
| `classList`            | `Object` | :x:      | `null`  | Class list            |
| `classList.wrapper`    | `String` | :x:      | `null`  | Wrapper class list    |
| `classList.label`      | `String` | :x:      | `null`  | Label class list      |
| `classList.base`       | `String` | :x:      | `null`  | Base class list       |
| `classList.colors.{x}` | `String` | :x:      | `null`  | Color name class list |
| `classList.sizes.{x}`  | `String` | :x:      | `null`  | Size name class list  |
| `label`                | `String` | :x:      | `null`  | Radio label           |
| `inputValue`           | `any`    | :x:      | `null`  | Radio value           |
| `color`                | `String` | :x:      | `light` | Selected color        |
| `size`                 | `String` | :x:      | `md`    | Selected size         |
| HTML Attributes        | -        | :x:      | -       | All HTML attributes   |

### Events

| Name            | Value | Description     |
| --------------- | ----- | --------------- |
| All HTML Events | -     | All HTML Events |

### V-Model

| Name      | Value | Description  |
| --------- | ----- | ------------ |
| `default` | `any` | Bind a value |
