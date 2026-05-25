---
outline: deep
description: Learn how to use Gurun Kit table component
---

<script setup>
import Table from '../../src/components/table/table'
import { h } from 'vue'
</script>

# Table

Full featured table component.

## Usage

```vue
<script setup>
import { Table } from 'gurunkit';
</script>

<template>
  <Table
    :columns="[
      { id: 'name', name: 'Name' },
      { id: 'email', name: 'Email' },
    ]"
    :data="[
      { name: 'Josh', email: 'josh@email.com' },
      { name: 'Admin', email: 'admin@email.com' },
      { name: 'Lim', email: 'lim@email.com' },
    ]"
  />
</template>
```

::: raw

<Table
:columns="[
{ id: 'name', name: 'Name' },
{ id: 'email', name: 'Email' }]"
:data="[
{ name: 'Josh', email: 'josh@email.com' },
{ name: 'Admin', email: 'admin@email.com' },
{ name: 'Lim', email: 'lim@email.com' }]"
/>
:::

## Column

Set table columns via the `columns` prop. It is should be an array of object with the following structure:

- `id` the key of each data item that will displayed.
- `name` the column name.

## Data

Set table data via the `data` prop. It is should be an array of object with any structure.

Each object should have a property defined as the `id` in the `columns` prop.

## Custom Render Column

You can render a custom component in specific column by adding a `render` property to the object in the `columns` array.

The `render` property should be a valid component that will be rendered and receive an `item` prop containing the rendered item.

```js
{
  id: 'name',
  name: 'Name',
  render: ({ item }) => h('p', { class: 'font-bold' }, item.name)
}
```

Example:

```vue
<script setup>
import { Table } from 'gurunkit';
import { h } from 'vue';
</script>

<template>
  <Table
    :columns="[
      {
        id: 'name',
        name: 'Name',
        render: ({ item }) => h('p', { class: 'font-bold' }, item.name),
      },
      { id: 'email', name: 'Email' },
    ]"
    :data="[
      { name: 'Josh', email: 'josh@email.com' },
      { name: 'Admin', email: 'admin@email.com' },
      { name: 'Lim', email: 'lim@email.com' },
    ]"
  />
</template>
```

::: raw

<Table
:columns="[
{ id: 'name', name: 'Name', render: ({ item }) => h('p', { class: 'font-bold' }, item.name) },
{ id: 'email', name: 'Email' }]"
:data="[
{ name: 'Josh', email: 'josh@email.com' },
{ name: 'Admin', email: 'admin@email.com' },
{ name: 'Lim', email: 'lim@email.com' }]"
/>
:::

## API

### Props

| Name      | Type                                                     | Required           | Default | Description   |
| --------- | -------------------------------------------------------- | ------------------ | ------- | ------------- |
| `columns` | `{ id: string, name: string, render?: Vue.Component }[]` | :white_check_mark: | `[]`    | Table columns |
| `data`    | `any[]`                                                  | :x:                | `[]`    | Table data    |
