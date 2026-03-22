'use client'

const styles = {
  'available': 'bg-green-500/10 text-green-400 border border-green-500/20',
  'rollout': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  'roadmap': 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
} as const

const labels = {
  'available': 'Available Now',
  'rollout': 'In Rollout',
  'roadmap': 'Roadmap',
} as const

type StatusType = keyof typeof styles

export default function StatusBadge({ status }: { status: StatusType }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 text-[10px] rounded-full font-mono uppercase tracking-wide ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}
