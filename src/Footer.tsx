import { memo, useCallback } from 'react';
import {
  FOOTER_TEXT,
  FOOTER_SEPARATOR,
  FOOTER_LICENSING_BTN_TEXT,
} from './textConstants.ts';
import { Button } from './Button.tsx';
import type { LicensingModalProps } from './LicensingModal.tsx';

export const Footer = memo(function Footer({
  setLicensingModalOpen,
}: LicensingModalProps) {
  const toggleLicensingModal = useCallback(() => {
    setLicensingModalOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <footer className="text-fg-secondary text-center mt-35 mb-3 flex gap-1">
      <span>{FOOTER_TEXT}</span>
      <span>{FOOTER_SEPARATOR}</span>
      <Button className="underline" onClick={toggleLicensingModal}>
        {FOOTER_LICENSING_BTN_TEXT}
      </Button>
    </footer>
  );
});
