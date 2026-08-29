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
- Variant
- Size
- Loading
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

## Variant

Supported variants:

- `solid` (default)
- `outline`

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button color="primary" variant="solid">Primary Solid</Button>
  <Button color="warning" variant="solid">Warning Solid</Button>
  <Button color="error" variant="outline">Error Outline</Button>
  <Button color="light" variant="outline">Light Outline</Button>
  <Button color="success" variant="outline">Success Outline</Button>
</template>
```

::: raw

<div class="flex flex-wrap gap-2">
<Button color="primary" variant="solid">Primary Solid</Button>
<Button color="warning" variant="solid">Warning Solid</Button>
<Button color="error" variant="outline">Error Outline</Button>
<Button color="light" variant="outline">Light Outline</Button>
<Button color="success" variant="outline">Success Outline</Button>
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

## Loading

When the button is loading, it becomes disabled and displays a spinner.

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button loading>Loading</Button>
</template>
```

::: raw
<Button loading>Loading</Button>
:::

## Icon

Display an icon using the `icon` slot.

> [!TIP]
> We don't provide an icon library. You can use any icon library you prefer. For example, you can use [Iconify](https://icon-sets.iconify.design).

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button>
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M6.49 21.59c-.26 0-.515-.08-.735-.24c-.39-.28-.58-.75-.5-1.225l.94-5.49L2.21 10.75a1.23 1.23 0 0 1-.315-1.28c.15-.455.535-.78 1.01-.85l5.51-.8l2.465-4.99c.21-.43.64-.695 1.12-.695s.91.265 1.12.695l2.465 4.99l5.51.8a1.247 1.247 0 0 1 .695 2.13l-3.985 3.885l.94 5.485a1.25 1.25 0 0 1-1.815 1.32L12 18.85l-4.93 2.59a1.3 1.3 0 0 1-.585.145z"
        />
      </svg>
    </template>
    Star
  </Button>
</template>
```

::: raw
<Button>
<template #icon>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
<path d="M0 0h24v24H0z" fill="none" />
<path fill="currentColor" d="M6.49 21.59c-.26 0-.515-.08-.735-.24c-.39-.28-.58-.75-.5-1.225l.94-5.49L2.21 10.75a1.23 1.23 0 0 1-.315-1.28c.15-.455.535-.78 1.01-.85l5.51-.8l2.465-4.99c.21-.43.64-.695 1.12-.695s.91.265 1.12.695l2.465 4.99l5.51.8a1.247 1.247 0 0 1 .695 2.13l-3.985 3.885l.94 5.485a1.25 1.25 0 0 1-1.815 1.32L12 18.85l-4.93 2.59a1.3 1.3 0 0 1-.585.145z" />
</svg>
</template>
Loading
</Button>
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

| Name                | Type                                              | Required | Default   | Description          |
| ------------------- | ------------------------------------------------- | -------- | --------- | -------------------- |
| `color`             | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Button color         |
| `size`              | `sm`, `md`, `lg`                                  | :x:      | `md`      | Button size          |
| `variant`           | `solid`, `outline`                                | :x:      | `solid`   | Button variant       |
| `loading`           | `boolean`                                         | :x:      | `false`   | Button loading state |
| `tag`               | `string` or Vue component                         | :x:      | `null`    | Custom tag           |
| All HTML attributes | `-`                                               | :x:      | `-`       | HTML attributes      |

### Slots

| Name      | Data | Description        |
| --------- | ---- | ------------------ |
| `default` | `-`  | Render button text |
| `icon`    | `-`  | Render button icon |

### Events

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| All HTML events | `-`  | HTML events |
