---
outline: deep
---

<script setup>
import { Input as BaseInput } from '../../src/components/input/input'
import { ref } from 'vue'

const name = ref('')

function onInput(e) {
    console.log(e)
}
</script>

# Input

Features:

- Color
- Size
- Model Value

## Usage

```vue
<script setup>
import { Input as BaseInput } from 'bangui';
</script>

<template>
  <BaseInput placeholder="Base input" />
</template>
```

Output:

<BaseInput placeholder="Base input" />

## Base Style

Set base style via `classList.base` props.

```vue
<script setup>
import { Input as BaseInput } from 'bangui';
</script>

<template>
  <BaseInput
    :class-list="{
      base: 'w-full border border-gray-300 p-3',
    }"
  />
</template>
```

Output:

<BaseInput
    :class-list="{
        base: 'w-full border border-gray-300 p-3'
    }"
/>

## Color

`light` is the default color.

Supported colors: `light`, `primary`, `secondary`, `warning`, `error`.

Set colors style list via `classList.colors.{colorName}` props.

Set color via `color` props.

```vue
<script setup>
import { Input as BaseInput } from 'bangui';
</script>

<template>
  <BaseInput
    :class-list="{
      base: 'w-full border p-3',
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

<BaseInput
    :class-list="{
        base: 'w-full border p-3',
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

## Size

`md` is the default size.

Supported colors: `sm`, `md`, `lg`.

Set sizes style list via `classList.sizes.{sizeName}` props.

Set size via `size` props.

```vue
<script setup>
import { Input as BaseInput } from 'bangui';
</script>

<template>
  <BaseInput
    :class-list="{
      base: 'w-full border border-gray-300',
      sizes: {
        sm: 'p-2',
        md: 'p-3',
        lg: 'p-4',
      },
    }"
    size="md"
  />
</template>
```

Output:

<BaseInput
    :class-list="{
        base: 'w-full border border-gray-300',
        sizes: {
            sm: 'p-2',
            md: 'p-3',
            lg: 'p-4',
        }
    }"
    size="md"
/>

## v-model

Add `v-model` directive to bind a value.

```vue
<script setup>
import { Input as BaseInput } from 'bangui';
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <BaseInput
    :class-list="{
      base: 'w-full border border-gray-300 p-3',
    }"
    placeholder="Enter your name"
    v-model="name"
  />

  <p>Your name: {{ name }}</p>
</template>
```

Output:

<BaseInput
    :class-list="{
        base: 'w-full border border-gray-300 p-3'
    }"
    placeholder="Enter your name"
    v-model="name"
/>

Your name: {{ name }}

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Input as BaseInput } from 'bangui';

function onInput(e) {
  console.log(e);
}
</script>

<template>
  <BaseInput
    id="8"
    :class-list="{
      base: 'w-full border border-gray-300 p-3',
    }"
    placeholder="Enter your password"
    type="password"
    name="password"
    min="8"
    required
    @input="onInput"
  />
</template>
```

Output:

<BaseInput
id="8"
:class-list="{
base: 'w-full border border-gray-300 p-3'
}"
placeholder="Enter your password"
type="password"
name="password"
min="8"
required
@input="onInput"
/>

## API

### Props

| Name                   | Type     | Required | Default | Description           |
| ---------------------- | -------- | -------- | ------- | --------------------- |
| `classList`            | `Object` | :x:      | `null`  | Class list            |
| `classList.base`       | `String` | :x:      | `null`  | Base class list       |
| `classList.colors.{x}` | `String` | :x:      | `null`  | Color name class list |
| `classList.sizes.{x}`  | `String` | :x:      | `null`  | Size name class list  |
| `color`                | `String` | :x:      | `light` | Selected color        |
| `size`                 | `String` | :x:      | `md`    | Selected size         |
| HTML Attributes        | -        | :x:      | -       | All HTML attributes   |

### Events

| Name            | Value | Description     |
| --------------- | ----- | --------------- |
| All HTML Events | -     | All HTML Events |

### V-Model

| Name      | Value    | Description      |
| --------- | -------- | ---------------- |
| `default` | `String` | Bind input value |
