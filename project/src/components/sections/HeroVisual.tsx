const nodes = [
  { x: 300, y: 78, label: 'REQUIREMENT' },
  { x: 492, y: 189, label: 'DESIGN' },
  { x: 492, y: 411, label: 'DATA' },
  { x: 300, y: 522, label: 'AI' },
  { x: 108, y: 411, label: 'ENGINEERING' },
  { x: 108, y: 189, label: 'OUTCOME' },
];

const CENTER = { x: 300, y: 300 };

export function HeroVisual() {
  return (
    <div className="relative rounded-xl border border-line bg-card shadow-card grid-veil overflow-hidden aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <span className="h-1.5 w-1.5 rounded-full bg-beacon animate-beacon" />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">System map</span>
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.14em] text-dim z-10">
        Product · Engineering
      </div>

      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        role="img"
        aria-label="Diagram showing requirement, design, data, AI, engineering and outcome nodes connected around a central product system"
      >
        <circle cx={CENTER.x} cy={CENTER.y} r="100" fill="none" stroke="rgba(18,21,27,0.08)" />
        <circle cx={CENTER.x} cy={CENTER.y} r="160" fill="none" stroke="rgba(18,21,27,0.07)" />
        <circle cx={CENTER.x} cy={CENTER.y} r="220" fill="none" stroke="rgba(18,21,27,0.06)" />

        {nodes.map((node, i) => (
          <line
            key={`line-${node.label}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke="rgba(10,122,95,0.45)"
            strokeWidth="1"
            strokeDasharray="3 7"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {nodes.map((node, i) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="4.5"
              fill="#0A7A5F"
              className="animate-beacon"
              style={{ animationDelay: `${i * 0.22}s` }}
            />
            <circle cx={node.x} cy={node.y} r="14" fill="none" stroke="rgba(18,21,27,0.18)" />
            <text
              x={node.x}
              y={node.y > CENTER.y ? node.y + 30 : node.y - 22}
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10"
              letterSpacing="1.5"
              fill="rgba(18,21,27,0.62)"
            >
              {node.label}
            </text>
          </g>
        ))}

        <rect
          x={CENTER.x - 48}
          y={CENTER.y - 21}
          width="96"
          height="42"
          rx="6"
          fill="#12151B"
        />
        <text
          x={CENTER.x}
          y={CENTER.y + 5}
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          letterSpacing="1"
          fill="#F7F7F4"
        >
          PRODUCT
        </text>
      </svg>
    </div>
  );
}
