---
outline: deep
description: Learn how to use Gurun Kit message component
---

<script setup>
import Message from '../../src/components/message/message'
import Button from '../../src/components/button/button'
import { useMessage } from '../../src/components/message/message.compose'

const { info } = useMessage()
</script>

::: raw
<Message />
:::

# Message

A component like an alert to inform users about a specific action.

## Usage

Render the `Message` component in the root component (e.g. `App.vue`).

```vue
<script setup>
import { Message } from 'gurunkit';
</script>

<template>
  <Message />
</template>
```

To create a message, use the `info` method from the `useMessage` composable. It can be used anywhere in your code.

```vue
<script setup>
import { useMessage, Button } from 'gurunkit';

const { info } = useMessage();
</script>

<template>
  <Button @click="info('Hello world!')">Test Message</Button>
</template>
```

::: raw
<Button @click="info('Hello world!')">Test Message</Button>
:::

## Custom Duration

The default message duration is `3s`. To customize it, add second parameter to the `info` method in milliseconds.

```vue
<script setup>
import { useMessage, Button } from 'gurunkit';

const { info } = useMessage();
</script>

<template>
  <Button @click="info('Short message', 1000)">Short Message</Button>
  <Button @click="info('Long message', 5000)">Long Message</Button>
</template>
```

::: raw
<Button @click="info('Short message', 1000)" class="mr-2">Short Message</Button>
<Button @click="info('Long message', 5000)">Long Message</Button>
:::
