import { h, type FunctionalComponent } from 'vue';
import X from '../icons/x.vue';

const Modal: FunctionalComponent<{
  title: string;
}> = (props, ctx) =>
  h(
    'div',
    { role: 'dialog' },
    h('div', { 'data-test': 'dialog-content' }, [
      props.title
        ? h('header', [
            h('h2', props.title),
            h('button', { 'aria-label': 'Close Modal' }, h(X)),
          ])
        : null,
      h('div', { 'data-test': 'dialog-body' }, ctx.slots.default?.()),
      ctx.slots.footer ? h('footer', ctx.slots.footer()) : null,
    ]),
  );

Modal.props = {
  title: String,
};

export default Modal;
