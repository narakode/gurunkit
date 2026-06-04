interface Message {
  message: string;
  duration?: number;
}

export function useMessage() {
  function getItems(): Message[] {
    return [];
  }

  return {
    getItems,
  };
}
