---
description: How to set up dark mode in Gurun Kit
---

# Dark Mode

All components in Gurun Kit support dark mode.

Dark mode is automatically enabled using `prefers-color-scheme`.

To manually enable dark mode, add the following code to your Tailwind CSS file:

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));
```

Add the `dark` class to the `<html>` tag to enable the dark theme.

```html
<html class="dark">
  <!-- ... -->
</html>
```

Read more [Tailwind CSS dark mode](https://tailwindcss.com/docs/dark-mode).
