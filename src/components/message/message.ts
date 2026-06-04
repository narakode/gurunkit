import { h, type FunctionalComponent } from 'vue';
import { useMessage } from './message.compose';

const Message: FunctionalComponent = () => {
  const { getItems } = useMessage();

  return h(
    'div',
    { 'data-test': 'message-wrapper' },
    getItems().map((item) =>
      h('div', { 'data-test': 'message' }, item.message),
    ),
  );
};

export default Message;
