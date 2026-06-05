import { h, type FunctionalComponent } from 'vue';
import { useMessage } from './message.compose';

const Message: FunctionalComponent = () => {
  const { getItems } = useMessage();

  return h(
    'div',
    {
      'data-test': 'message-wrapper',
      class: 'fixed top-4 left-1/2 -translate-x-1/2 z-9999 space-y-2',
    },
    getItems().map((item) =>
      h(
        'div',
        {
          'data-test': 'message',
          class: 'bg-gray-900 text-white px-3 py-2 rounded-md dark:bg-gray-700',
        },
        item.message,
      ),
    ),
  );
};

export default Message;
