'use client';

import React from 'react';
import { Button } from './button';
import * as motion from 'motion/react-client';
import { X } from 'lucide-react';

interface IModalProps {
  openModalButtonText?: string;
  closeModalButtonText?: string;
  title?: string;
  description?: string;
  content: React.ReactNode | string;
}

export default function Modal(props: IModalProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Button onClick={handleModalClick}>{props.openModalButtonText || 'Open Modal'}</Button>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/30 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div className="relative gap-4border bg-background rounded-lg shadow-lg max-w-xl md:max-w-3xl max-h-[420px] md:max-h-[450px] mx-8 md:mx-0 overflow-auto">
            <div className="flex gap-3 justify-between py-6 px-4">
              <div className="flex flex-col mb-4 gap-y-2">
                {/* Title */}
                <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
                  {props.title || 'Modal Title'}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-[1rem]">
                  {props.description || 'Modal Description....'}
                </p>
              </div>

              <Button variant={'ghost'} onClick={handleModalClick} className="absolute top-0 right-0">
                <X className="size-4" />
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-6 p-4">{props.content}</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
