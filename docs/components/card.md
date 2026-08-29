---
outline: deep
description: Learn how to use Gurun Kit card component
---

<script setup>
import Card from '../../src/components/card/card'
import Button from '../../src/components/button/button'
</script>

# Card

Card is a component that dipslays a content in a card.

Features:

- Header
- Action
- Body
- Footer

## Usage

```vue
<script setup>
import { Card } from 'gurunkit';
</script>

<template>
  <Card> Card Body </Card>
</template>
```

::: raw
<Card>
Card Body
</Card>
:::

## Header

Only rendered when the `title` prop is set. Contains the card title and the action slot.

```vue
<script setup>
import { Card, Button } from 'gurunkit';
</script>

<template>
  <Card title="Card Title"> Card Body </Card>
</template>
```

::: raw
<Card title="Card Title">
Card Body
</Card>
:::

### Action Slot

Renders content at the end of the header.

```vue
<script setup>
import { Card, Button } from 'gurunkit';
</script>

<template>
  <Card title="Card Title">
    Card Body

    <template #action>
      <Button>Action</Button>
    </template>
  </Card>
</template>
```

::: raw
<Card title="Card Title">
Card Body

<template #action>
<Button>Action</Button>
</template>
</Card>
:::

## Body

Always rendered. Renders anything inside the default slot.

## Footer

Only rendered when the `footer` slot is provided. Renders the `footer` slot.

```vue
<script setup>
import { Card, Button } from 'gurunkit';
</script>

<template>
  <Card>
    Card Body
    <template #footer>
      <Button>Footer</Button>
    </template>
  </Card>
</template>
```

::: raw
<Card>
Card Body
<template #footer>
<Button>Footer</Button>
</template>
</Card>
:::

## API

### Props

| Name    | Type     | Required | Default | Description |
| ------- | -------- | -------- | ------- | ----------- |
| `title` | `string` | :x:      | `-`     | Card title  |

### Slots

| Name      | Data | Description                |
| --------- | ---- | -------------------------- |
| `action`  | `-`  | Render modal header action |
| `default` | `-`  | Render modal body          |
| `footer`  | `-`  | Render modal footer        |
