import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'
import { profile } from '../data/resumeData'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* 3D backdrop */}
      <div className="absolute inset-0 opacity-90">
        <HeroCanvas />
      </div>

      {/* readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10 pointer-events-none" />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-teal text-sm mb-4"
        >
          data model: student.aiml
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-text-primary leading-[1.05] max-w-3xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg sm:text-xl text-text-muted max-w-xl"
        >
          {profile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 bg-amber text-ink font-medium rounded hover:bg-amber/90 transition-colors"
          >
            View projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 border border-line text-text-primary rounded hover:border-teal hover:text-teal transition-colors"
          >
            Contact me
          </button>
        </motion.div>
      </div>
    </section>
  )
}
