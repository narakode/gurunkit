---
outline: deep
description: Learn how to use Gurun Kit button component
---

<script setup>
import Button from '../../src/components/button/button'

const onClick = () => alert('test')
</script>

# Button

Features:

- Color
- Size
- Custom tag

## Usage

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button>Button</Button>
</template>
```

::: raw
<Button>Button</Button>
:::

## Color

Set button color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button color="primary">Primary</Button>
  <Button color="warning">Warning</Button>
  <Button color="error">Error</Button>
  <Button color="light">Light</Button>
  <Button color="success">Success</Button>
</template>
```

::: raw

<div class="flex flex-wrap gap-2">
<Button color="primary">Primary</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="light">Light</Button>
<Button color="success">Success</Button>
</div>
:::

## Size

Set button size using `size` props. Supported values: `sm`, `md`, `lg`.

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</template>
```

::: raw

<div class="flex flex-wrap gap-2">
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
</div>
:::

## Custom Tag

Set button tag using `tag` props. Accepts HTML tag name or Vue component.

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button tag="a" href="https://google.com" color="light">Google</Button>
</template>
```

::: raw
<Button tag="a" href="https://google.com" color="light">Google</Button>
:::

## Custom Class

Add custom class using `class` attribute.

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button class="w-full">Button fullwidth</Button>
</template>
```

::: raw
<Button class="w-full">Button fullwidth</Button>
:::

## HTML Attributes and Events

HTML attributes and events are automatically inherited.

```vue
<script setup>
import { Button } from 'gurunkit';

const onClick = () => alert('test');
</script>

<template>
  <Button type="button" title="Show Alert" @click="onClick">Test</Button>
</template>
```

::: raw
<Button type="button" title="Show Alert" @click="onClick">Test</Button>
:::

## API

### Props

| Name                | Type                                              | Required | Default   | Description     |
| ------------------- | ------------------------------------------------- | -------- | --------- | --------------- |
| `color`             | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Button color    |
| `size`              | `sm`, `md`, `lg`                                  | :x:      | `md`      | Button size     |
| `tag`               | `string` or Vue component                         | :x:      | `null`    | Custom tag      |
| All HTML attributes | `-`                                               | :x:      | `-`       | HTML attributes |

### Events

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| All HTML events | `-`  | HTML events |
