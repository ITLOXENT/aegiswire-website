'use client'

import HeroIllustration from './HeroIllustration'
import SectionDivider from './SectionDivider'

interface PageHeroProps {
  badge?: string
  title: string
  highlight?: string
  description: string
  illustration?: 'platform' | 'vpn' | 'transport' | 'deployments' | 'industries' | 'security' | 'contact'
}

export default function PageHero({ badge, title, highlight, description, illustration }: PageHeroProps) {
  return (
    <>
      <section className="pt-10 pb-8 md:pt-20 md:pb-16">
        <div className="container mx-auto px-6">
          <div className={`grid gap-8 md:gap-8 md:gap-14 items-stretch ${illustration ? 'lg:grid-cols-2' : ''}`}>

            <div className="flex flex-col justify-center">
              {badge && (
                <div className="inline-flex items-center self-start px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">
                  {badge}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
                {title}{' '}
                {highlight && <span className="text-gradient">{highlight}</span>}
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            {illustration && (
              <div className="hidden lg:flex items-stretch min-h-[480px]">
                <div className="w-full h-full">
                  <HeroIllustration variant={illustration} />
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  )
}
