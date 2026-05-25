import { h, Transition, type FunctionalComponent } from 'vue';
import X from '../icons/x.vue';

const Modal: FunctionalComponent<
  {
    title?: string;
    visible?: boolean;
  },
  { 'update:visible'(newValue: boolean): void; close(): void }
> = (props, ctx) => {
  const close = () => {
    ctx.emit('update:visible', false);
    ctx.emit('close');
  };

  return h(
    Transition,
    {
      enterFromClass: 'opacity-0',
      enterActiveClass: 'transition transition-all duration-150',
      enterToClass: 'opacity-100',
      leaveFromClass: 'opacity-100',
      leaveActiveClass: 'transition transition-all duration-150',
      leaveToClass: 'opacity-0',
    },
    () =>
      !props.visible
        ? undefined
        : h(
            'div',
            {
              role: 'dialog',
              class:
                'fixed inset-0 bg-black/50 w-full h-screen z-30 flex items-center justify-center',
              onClick: close,
            },
            h(
              'div',
              {
                'data-test': 'dialog-content',
                class:
                  'bg-white text-gray-900 max-w-screen-md w-full rounded-md shadow',
                onClick: (e) => {
                  e.stopPropagation();
                },
              },
              [
                props.title
                  ? h(
                      'header',
                      {
                        class:
                          'p-4 border-b border-gray-300 flex items-center justify-between',
                      },
                      [
                        h('h2', { class: 'font-bold text-lg' }, props.title),
                        h(
                          'button',
                          {
                            'aria-label': 'Close Modal',
                            class: 'cursor-pointer',
                            onClick: close,
                          },
                          h(X, { class: 'size-5' }),
                        ),
                      ],
                    )
                  : null,
                h(
                  'div',
                  { 'data-test': 'dialog-body', class: 'p-4' },
                  ctx.slots.default?.(),
                ),
                ctx.slots.footer
                  ? h(
                      'footer',
                      { class: 'p-4 border-t border-gray-300' },
                      ctx.slots.footer(),
                    )
                  : null,
              ],
            ),
          ),
  );
};

Modal.props = {
  title: String,
  visible: Boolean,
};
Modal.emits = ['update:visible', 'close'];

export default Modal;
