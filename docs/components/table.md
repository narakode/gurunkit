---
outline: deep
description: Learn how to use Gurun Kit table component
---

<script setup>
import Table from '../../src/components/table/table'
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
