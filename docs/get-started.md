---
description: Get started with Gurun Kit, check the requirements, install it, and try the basic usage
---

<script setup>
import Button from '../src/components/button/button'
</script>

# Get Started

## Requirements

- Vue.js 3+
- Tailwind CSS 4+

## Installation

```bash
npm install gurunkit
```

## Add Style

Open your Tailwind CSS file. Register `gurunkit` package to the source paths.

```css
@import 'tailwindcss';

@source "../node_modules/gurunkit";
```

[Explicitly registering sources in Tailwind CSS](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).

## Basic Usage

```vue
<script setup>
import { Button } from 'gurunkit';
</script>

<template>
  <Button>My Button</Button>
</template>
```

::: raw
<Button>My Button</Button>
:::
