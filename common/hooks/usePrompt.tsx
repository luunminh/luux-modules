// import { Transition } from 'history';
// import { useCallback } from 'react';
// import { Callback } from '../utils';
// import useBlocker from './useBlocker';

// type UsePromptProps = {
//   message?: string;
//   when: boolean;
//   isAskConfirmCancel?: boolean;
//   cancelText?: string;
//   cancelOkText?: string;
//   cancelMessage?: string;
//   cancelTitle?: string;
//   title?: string;
//   onBlocker?: Callback;
// };

// /**
//  * Prompts the user with an Alert before they leave the current screen.
//  *
//  * @param  message
//  * @param  when
//  */
// const usePrompt = ({
//   message = '',
//   when = true,
//   isAskConfirmCancel = false,
//   cancelText = 'No, stay',
//   cancelMessage,
//   cancelOkText,
//   cancelTitle,
//   title,
//   onBlocker,
// }: UsePromptProps) => {
//   const { showDialog, hideDialog } = useDialog();

//   const blocker = useCallback(
//     (tx: Transition) => {
//       if (onBlocker) {
//         onBlocker(tx);
//         return;
//       }

//       showDialog({
//         type: DialogTypes.YESNO_DIALOG,
//         data: {
//           cancelText: isAskConfirmCancel ? cancelText : 'No, stay',
//           onCancel: () => hideDialog(),
//           onOk: () => {
//             hideDialog();
//             tx.retry();
//           },
//           okText: isAskConfirmCancel ? cancelOkText : 'Yes, leave',
//           content: isAskConfirmCancel ? cancelMessage : message,
//           title: isAskConfirmCancel ? cancelTitle : title,
//           maxWidth: 'xs',
//         },
//       });
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [message, isAskConfirmCancel, cancelMessage, cancelOkText, cancelText, message, title],
//   );

//   useBlocker(blocker, when);
// };

// export default usePrompt;
