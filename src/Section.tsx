import * as React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  sectionName: string;
}

export function Section({ id, children, sectionName }: SectionProps) {
  return (
    <div id={id} className="scroll-mt-32 mt-32 flex flex-col dynamic w-full">
      <h1 className="text-xl text-accent mb-7">{sectionName}</h1>
      <div>{children}</div>
    </div>
  );
}
