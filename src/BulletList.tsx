interface BulletListProps {
  className?: string;
  content: string[];
}

export function BulletList({ className, content }: BulletListProps) {
  return (
    <ul className={'list-disc list-outside pl-5 ' + className}>
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
