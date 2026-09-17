---
outline: deep
description: Learn how to use Gurun Kit badge component
---

<script setup>
import Badge from '../../src/components/badge/badge'
</script>

# Badge

Simple badge component.

## Usage

```vue
<script setup>
import { Badge } from 'gurunkit';
</script>

<template>
  <Badge>Text</Badge>
</template>
```

::: raw
<Badge>Text</Badge>
:::

## Color

Set badge color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

It's also supports dark mode, enable it by adding `dark` class to `html` tag.

```vue
<script setup>
import { Badge } from 'gurunkit';
</script>

<template>
  <Badge color="primary">Primary Badge</Badge>
  <Badge color="warning">Warning Badge</Badge>
  <Badge color="error">Error Badge</Badge>
  <Badge color="light">Light Badge</Badge>
  <Badge color="success">Success Badge</Badge>
</template>
```

::: raw

<div class="flex gap-2">
<Badge color="primary">Primary Badge</Badge>
<Badge color="warning">Warning Badge</Badge>
<Badge color="error">Error Badge</Badge>
<Badge color="light">Light Badge</Badge>
<Badge color="success">Success Badge</Badge>
</div>
:::

## API

### Props

| Name    | Type                                              | Required | Default   | Description |
| ------- | ------------------------------------------------- | -------- | --------- | ----------- |
| `color` | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Badge color |
