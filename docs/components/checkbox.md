---
outline: deep
---

<script setup>
import { Checkbox as BaseCheckbox } from '../../src/components/checkbox/checkbox'
import { ref } from 'vue'

const agree = ref(false)
const selected = ref(['javascript', 'php']);

function onChange(e) {
  console.log(e);
}
</script>

# Checkbox

Features:

- Label
- Color
- Size
- Single Value
- Multiple Value

## Usage

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox />
</template>
```

Output:

<BaseCheckbox />

## Label

Add label using `label` and `id` props.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox id="checkbox" label="Checkbox" />
</template>
```

Output:

<BaseCheckbox id="checkbox" label="Checkbox" />

## Wrapper Style

Set wrapper style via `classList.wrapper` props.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox
    id="wrapper_style"
    label="Wrapper Style"
    :class-list="{
      wrapper: 'flex items-center gap-2',
    }"
  />
</template>
```

Output:

<BaseCheckbox
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
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox
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

<BaseCheckbox
    id="label_style"
    label="Label Style"
    :class-list="{
        wrapper: 'flex items-center gap-2',
      label: 'font-bold text-red-600',
    }"
/>

## Base Style

Set base checkbox style via `classList.base` props.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox
    id="base_style"
    label="Base Style"
    :class-list="{
      wrapper: 'flex items-center gap-2',
      base: 'appearance-none size-4 border rounded bg-white border-gray-300',
    }"
  />
</template>
```

Output:

<BaseCheckbox
    id="base_style"
    label="Base Style"
    :class-list="{
        wrapper: 'flex items-center gap-2',
        base: 'appearance-none size-4 border checked:bg-blue-600',
    }"
/>

## Color

`light` is the default color.

Supported colors: `light`, `primary`, `secondary`, `warning`, `error`.

Set colors style list via `classList.colors.{colorName}` props.

Set color via `color` props.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox
    :class-list="{
      wrapper: 'flex items-center gap-2',
      base: 'appearance-none size-4 border checked:bg-blue-600',
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

<BaseCheckbox
    :class-list="{
        wrapper: 'flex items-center gap-2',
            base: 'appearance-none size-4 border checked:bg-blue-600',
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
import { Checkbox as BaseCheckbox } from 'bangui';
</script>

<template>
  <BaseCheckbox
    :class-list="{
      base: 'appearance-none border',
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

<BaseCheckbox
    :class-list="{
        base: 'appearance-none border',
        sizes: {
            sm: 'size-3',
            md: 'size-4',
            lg: 'size-6',
        }
    }"
    size="md"
/>

## v-model Single Value

Add `v-model` directive to bind a single `boolean` value.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
import { ref } from 'vue';

const agree = ref(false);
</script>

<template>
  <BaseCheckbox label="Accept terms and conditions" v-model="agree" />

  <p>Agree: {{ agree }}</p>
</template>
```

Output:

<BaseCheckbox
    label="Accept terms and conditions"
    v-model="agree"
/>

Agree: {{ agree }}

## v-model Multiple Value

Add `v-model` directive to bind a multiple (`array`) value.

Each checkbox needs to have `inputValue` to provide the checkbox `value`.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';
import { ref } from 'vue';

const selected = ref(['javascript', 'php']);
</script>

<template>
  <BaseCheckbox
    label="Javascript"
    input-value="javascript"
    v-model="selected"
  />
  <BaseCheckbox label="PHP" input-value="php" v-model="selected" />
  <BaseCheckbox label="C++" input-value="cpp" v-model="selected" />

  <p>Selected: {{ selected }}</p>
</template>
```

Output:

<BaseCheckbox
label="Javascript"
input-value="javascript"
v-model="selected"
/>
<BaseCheckbox
label="PHP"
input-value="php"
v-model="selected"
/>
<BaseCheckbox
label="C++"
input-value="cpp"
v-model="selected"
/>

<p>Selected: {{ selected }}</p>

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Checkbox as BaseCheckbox } from 'bangui';

function onChange(e) {
  console.log(e);
}
</script>

<template>
  <BaseCheckbox id="8" label="Notify Updates" required @change="onChange" />
</template>
```

Output:

<BaseCheckbox
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
| `label`                | `String` | :x:      | `null`  | Checbox label         |
| `color`                | `String` | :x:      | `light` | Selected color        |
| `size`                 | `String` | :x:      | `md`    | Selected size         |
| HTML Attributes        | -        | :x:      | -       | All HTML attributes   |

### Events

| Name            | Value | Description     |
| --------------- | ----- | --------------- |
| All HTML Events | -     | All HTML Events |

### V-Model

| Name                       | Value     | Description                 |
| -------------------------- | --------- | --------------------------- |
| `default` (single value)   | `boolean` | Bind single `boolean` value |
| `default` (multiple value) | `any[]`   | Bind multiple (array) value |
