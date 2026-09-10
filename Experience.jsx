import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading tag="section: experience" title="Experience" />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.organization}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="panel-frame bg-panel/60 rounded-sm p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <h3 className="font-display text-xl sm:text-2xl text-text-primary font-medium">
                {exp.role} · {exp.organization}
              </h3>
              <span className="font-mono text-sm text-amber">{exp.duration}</span>
            </div>

            <p className="font-mono text-sm text-teal mb-3">topics covered</p>
            <div className="flex flex-wrap gap-2">
              {exp.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 border border-line rounded text-sm text-text-primary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
