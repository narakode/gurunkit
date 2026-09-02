---
outline: deep
description: Learn how to use Gurun Kit button component
---

<script setup>
import Alert from '../../src/components/alert/alert'
import Button from '../../src/components/button/button'

const onClose = () => alert('close')
</script>

# Alert

Features:

- Color
- Icon
- Closable
- Action

## Usage

```vue
<script setup>
import { Alert } from 'gurunkit';
</script>

<template>
  <Alert>Alert Message</Alert>
</template>
```

::: raw
<Alert>Alert Message</Alert>
:::

## Color

Set alert color using `color` props. Supported values: `primary`, `light`, `error`, `warning`, `success`.

It's also supports dark mode, enable it by adding `dark` class to `html` tag.

```vue
<script setup>
import { Alert } from 'gurunkit';
</script>

<template>
  <Alert color="primary">Primary Alert</Alert>
  <Alert color="warning">Warning Alert</Alert>
  <Alert color="error">Error Alert</Alert>
  <Alert color="light">Light Alert</Alert>
  <Alert color="success">Success Alert</Alert>
</template>
```

::: raw

<div class="flex flex-col gap-2">
<Alert color="primary">Primary Alert</Alert>
<Alert color="warning">Warning Alert</Alert>
<Alert color="error">Error Alert</Alert>
<Alert color="light">Light Alert</Alert>
<Alert color="success">Success Alert</Alert>
</div>
:::

## Icon

Display an icon using the `icon` slot.

> [!TIP]
> We don't provide an icon library. You can use any icon library you prefer. For example, you can use [Iconify](https://icon-sets.iconify.design).

```vue
<script setup>
import { Alert } from 'gurunkit';
</script>

<template>
  <Alert color="warning">
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
          d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7"
        />
      </svg>
    </template>
    Alert with icon
  </Alert>
</template>
```

::: raw
<Alert color="warning">
<template #icon>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
<path d="M0 0h24v24H0z" fill="none" />
<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7" />
</svg>
</template>
Alert with icon
</Alert>
:::

## Close

Add the `closable` prop to display a close icon at the end of the alert. Clicking the icon emits the `close` event.

```vue
<script setup>
import { Alert } from 'gurunkit';

const onClose = () => alert('close');
</script>

<template>
  <Alert color="error" closable @close="onClose">
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
          d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7"
        />
      </svg>
    </template>
    Alert closable
  </Alert>
</template>
```

::: raw
<Alert color="error" closable @close="onClose">
<template #icon>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
<path d="M0 0h24v24H0z" fill="none" />
<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7" />
</svg>
</template>
Alert closable
</Alert>
:::

## Action

Add the `action` slot to display content at the end of the alert.

> [!WARNING]
> If `closable` is `true`, the close button will not be rendered.

```vue
<script setup>
import { Alert, Button } from 'gurunkit';
</script>

<template>
  <Alert color="primary">
    <template #action>
      <Button size="sm"> Action </Button>
    </template>
    Alert with action
  </Alert>
</template>
```

::: raw
<Alert color="primary">
<template #action>
<Button size="sm">
Action
</Button>
</template>
Alert with action
</Alert>
:::

## API

### Props

| Name       | Type                                              | Required | Default   | Description            |
| ---------- | ------------------------------------------------- | -------- | --------- | ---------------------- |
| `color`    | `primary`, `light`, `success`, `warning`, `error` | :x:      | `primary` | Alert color            |
| `closable` | `boolean`                                         | :x:      | `false`   | Display a close button |

### Slots

| Name      | Data | Description         |
| --------- | ---- | ------------------- |
| `default` | `-`  | Render alert text   |
| `icon`    | `-`  | Render alert icon   |
| `action`  | `-`  | Render alert action |

### Events

| Name  | Type | Description          |
| ----- | ---- | -------------------- |
| Close | `-`  | Close button clicked |
