import licenseText from '../LICENSE.txt?raw';
import * as React from 'react';
import { Button } from './Button.tsx';
import { memo, useCallback } from 'react';

export interface LicensingModalProps {
  licensingModalOpen: boolean;
  setLicensingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LicensingModal = memo(function LicensingModal({ licensingModalOpen, setLicensingModalOpen }: LicensingModalProps) {
  const toggleLicensingModal = useCallback(() => {
    setLicensingModalOpen(prevOpen => !prevOpen);
  }, []);

  if (!licensingModalOpen) return null;

  return (
    <div className="z-101 fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center">
      <div className="bg-bg-secondary w-full h-full lg:w-fit lg:h-fit lg:border-solid lg:border-1 lg:border-bg-tertiary lg:rounded-4xl px-9 py-9 text-xs overflow-y-auto flex flex-col gap-8 items-center justify-center">
        <h1 className="text-lg">Licensing Information</h1>
        <pre className="max-h-[calc(100vh-350px)] max-w-full overflow-x-auto">{licenseText}</pre>
        <Button className="underline w-fit text-base" onClick={toggleLicensingModal}>Close</Button>
      </div>
    </div>
  );
});