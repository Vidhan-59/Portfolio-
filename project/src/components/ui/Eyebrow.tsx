interface EyebrowProps {
  children: string;
  invert?: boolean;
}

export function Eyebrow({ children, invert }: EyebrowProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`h-[6px] w-[6px] rounded-full ${invert ? 'bg-beacon-bright' : 'bg-beacon'}`} />
      <span className={`tag ${invert ? 'tag-invert' : ''}`}>{children}</span>
    </div>
  );
}
