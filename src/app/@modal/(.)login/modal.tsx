'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Modal, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function LoginModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const [opened, { open, close }] = useDisclosure(true);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <Modal opened={opened} className="modal" onClose={onDismiss} withCloseButton={false}>
        {children}
        <Space mt="lg" />
      </Modal>
    </div>,
    document.getElementById('modal-root')!
  );
}