import {
  SECTION_IDS,
  INTERESTS_HEADER,
  INTERESTS_PIANO_HEADER,
  INTERESTS_PROGRAMMING_HEADER,
  INTERESTS_PUBLIC_SERVICE_HEADER,
  INTERESTS_OTHER_HEADER,
  INTERESTS_PIANO_DESCRIPTION,
  INTERESTS_PROGRAMMING_DESCRIPTION,
  INTERESTS_PUBLIC_SERVICE_DESCRIPTION,
  INTERESTS_OTHER_DESCRIPTION,
} from './textConstants.ts';
import { Section } from './Section.tsx';
import { BulletList } from './BulletList.tsx';
import { memo } from 'react';

interface InterestCardProps {
  header: string;
  description: string[];
}

function InterestCard({ header, description }: InterestCardProps) {
  return (
    <div className="stylized-box">
      <h2 className="text-fg-secondary font-bold mb-3 text-lg">{header}</h2>
      <BulletList content={description} className="text-fg-secondary" />
    </div>
  );
}

export const InterestsSection = memo(function InterestsSection() {
  return (
    <Section id={SECTION_IDS.INTERESTS} sectionName={INTERESTS_HEADER}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InterestCard header={INTERESTS_PIANO_HEADER} description={INTERESTS_PIANO_DESCRIPTION} />
        <InterestCard header={INTERESTS_PROGRAMMING_HEADER} description={INTERESTS_PROGRAMMING_DESCRIPTION} />
        <InterestCard header={INTERESTS_PUBLIC_SERVICE_HEADER} description={INTERESTS_PUBLIC_SERVICE_DESCRIPTION} />
        <InterestCard header={INTERESTS_OTHER_HEADER} description={INTERESTS_OTHER_DESCRIPTION} />
      </div>
    </Section>
  )
});