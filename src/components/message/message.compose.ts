import { ref } from 'vue';

interface Message {
  id: number;
  message: string;
  duration?: number;
}

const items = ref<Message[]>([]);

export function useMessage() {
  function getItems(): Message[] {
    return items.value;
  }

  function info(message: string, duration: number = 3000) {
    const id = Date.now();

    items.value.push({
      id,
      message,
      duration,
    });

    setTimeout(() => close(id), duration);
  }

  function clear() {
    items.value = [];
  }

  function close(id: Message['id']) {
    items.value = items.value.filter((item) => item.id !== id);
  }

  return {
    getItems,
    info,
    clear,
    close,
  };
}
