import { h, TransitionGroup, type FunctionalComponent } from 'vue';
import { useMessage } from './message.compose';

const Message: FunctionalComponent = () => {
  const { getItems } = useMessage();

  return h(
    TransitionGroup,
    {
      tag: 'div',
      enterFromClass: 'opacity-0 -translate-y-full',
      enterActiveClass: 'transition transition-all duration-150',
      enterToClass: 'opacity-100 translate-y-0',
      leaveFromClass: 'opacity-100 translate-y-0',
      leaveActiveClass: 'transition transition-all duration-150 absolute',
      leaveToClass: 'opacity-0 -translate-y-full',
      moveClass: 'transition transition-all duration-150',
      'data-test': 'message-wrapper',
      class: 'fixed top-4 left-1/2 -translate-x-1/2 z-9999 space-y-2',
    },
    () =>
      getItems().map((item) =>
        h(
          'div',
          {
            key: item.id,
            'data-test': 'message',
            class:
              'bg-gray-900 text-white px-3 py-2 rounded-md whitespace-nowrap dark:bg-gray-700',
          },
          item.message,
        ),
      ),
  );
};

export default Message;
