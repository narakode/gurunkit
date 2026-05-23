import { h, type FunctionalComponent } from 'vue';
import X from '../icons/x.vue';

export const classlist = {
  wrapper: 'fixed',
  content: 'bg-white',
  header: 'border-bottom',
  title: 'font-bold',
  close: 'p-2',
  body: 'p-4',
  footer: 'p-4',
};

const Modal: FunctionalComponent<
  {
    title?: string;
    visible?: boolean;
  },
  { 'update:visible'(newValue: boolean): void; close(): void }
> = (props, ctx) => {
  if (props.visible) {
    return h(
      'div',
      { role: 'dialog', class: classlist.wrapper },
      h('div', { 'data-test': 'dialog-content', class: classlist.content }, [
        props.title
          ? h('header', { class: classlist.header }, [
              h('h2', { class: classlist.title }, props.title),
              h(
                'button',
                {
                  'aria-label': 'Close Modal',
                  class: classlist.close,
                  onClick: () => {
                    ctx.emit('update:visible', false);
                    ctx.emit('close');
                  },
                },
                h(X),
              ),
            ])
          : null,
        h(
          'div',
          { 'data-test': 'dialog-body', class: classlist.body },
          ctx.slots.default?.(),
        ),
        ctx.slots.footer
          ? h('footer', { class: classlist.footer }, ctx.slots.footer())
          : null,
      ]),
    );
  }
};

Modal.props = {
  title: String,
  visible: Boolean,
};
Modal.emits = ['update:visible', 'close'];

export default Modal;
