export default function SectionDivider() {
  return (
    <div className="relative w-full flex items-center justify-center py-0">
      {/* Full-width gradient line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />
      {/* Centre bright segment */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[1px]" />
      {/* Centre diamond */}
      <div className="relative z-10 w-2 h-2 rotate-45 bg-blue-500/80 ring-2 ring-blue-400/20 shadow-[0_0_8px_2px_rgba(59,130,246,0.45)]" />
    </div>
  )
}
