import { Reveal } from './Reveal';

interface FlowSequenceProps {
  items: string[];
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export function FlowSequence({ items, orientation = 'vertical', className = '' }: FlowSequenceProps) {
  const isHorizontal = orientation === 'horizontal';

  const content = (
    <div className={`flex ${isHorizontal ? 'flex-row items-center flex-nowrap w-max' : 'flex-col items-start'} ${className}`}>
      {items.map((item, i) => (
        <div
          key={item}
          className={`flex ${isHorizontal ? 'flex-row items-center' : 'flex-col items-start'} ${
            isHorizontal ? '' : 'w-full'
          }`}
        >
          <Reveal delay={i * 0.06}>
            <div className="glass font-mono text-xs sm:text-sm px-4 py-2.5 rounded-lg text-paper whitespace-nowrap">
              {item}
            </div>
          </Reveal>
          {i < items.length - 1 && (
            <div
              className={
                isHorizontal
                  ? 'flex items-center justify-center w-8 sm:w-12 h-px relative mx-1'
                  : 'flex items-center justify-center h-8 w-px relative my-1 ml-[calc(1rem+1px)]'
              }
            >
              <div className={isHorizontal ? 'h-px w-full bg-line-strong' : 'w-px h-full bg-line-strong'} />
              <span
                className="absolute h-1.5 w-1.5 rounded-full bg-beacon animate-beacon"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  if (isHorizontal) {
    return <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">{content}</div>;
  }

  return content;
}
