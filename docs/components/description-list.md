---
outline: deep
description: Learn how to use Gurun Kit description list component
---

<script setup>
import DescriptionList from '../../src/components/description-list/description-list'
</script>

# Description List

Used to display content with a title and description.

## Usage

Display the title using the `title` prop and the description using the default slot.

```vue
<script setup>
import { DescriptionList, Input } from 'gurunkit';
</script>

<template>
  <DescriptionList title="Name"> Jhon Doe </DescriptionList>
</template>
```

::: raw
<DescriptionList title="Name">
Jhon Doe
</DescriptionList>
:::

## API

### Props

| Name    | Type     | Required           | Default | Description            |
| ------- | -------- | ------------------ | ------- | ---------------------- |
| `title` | `string` | :white_check_mark: | `-`     | Description list title |

### Slots

| Name      | Data | Description              |
| --------- | ---- | ------------------------ |
| `default` | `-`  | Description list content |
