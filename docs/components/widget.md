---
outline: deep
description: Learn how to use Gurun Kit widget component
---

<script setup>
import Widget from '../../src/components/widget/widget'
import { h } from 'vue'
</script>

# Widget

Simple card with label and value.

## Usage

```vue
<script setup>
import { Widget } from 'gurunkit';
</script>

<template>
  <Widget label="Expense" value="Rp 245.000" />
  <Widget label="Income" :value="300_000" />
</template>
```

::: raw

<div class="space-y-4">
<Widget
label="Expense"
value="Rp 245.000"
/>
<Widget
label="Income"
:value="300_000"
/>
</div>
:::

## API

### Props

| Name    | Type               | Required           | Default | Description  |
| ------- | ------------------ | ------------------ | ------- | ------------ |
| `label` | `string`           | :white_check_mark: | `-`     | Widget label |
| `value` | `string or number` | :white_check_mark: | `-`     | Widget value |
