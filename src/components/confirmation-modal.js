import * as React from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {ExclamationIcon} from '@heroicons/react/outline';

function ConfirmationModal({
  title,
  text,
  confirmText,
  open,
  toggle,
  onConfirm
}) {
  const handleConfirm = () => {
    toggle();
    onConfirm();
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={toggle}
      >
        <div className="flex items-end justify-center font-pixel min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-blue-800 rounded-md border-2 border-yellow-300 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full ">
                <ExclamationIcon
                  className="h-10 w-10 text-yellow-300"
                  aria-hidden="true"
                />
              </div>
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-yellow-300 text-shadow-sm"
                  >
                    {title}
                  </Dialog.Title>
                </div>
                <div className="pt-4 sm:pt-6 text-green-200">{text}</div>
              </div>
              <div className="flex mt-5 sm:mt-6 gap-1 sm:gap-5 lg:gap-7">
                <button
                  type="button"
                  className="flex -z-10 flex-col flex-1 items-center text-xs mx-3 gap-2 justify-between w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 sm:text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  onClick={toggle}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  name="walletConnect"
                  className="flex flex-col flex-1 items-center whitespace-nowrap text-xs mx-3 gap-2 justify-between w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 sm:text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleConfirm}
                >
                  {confirmText || 'Ok'}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export {ConfirmationModal};
