import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading tag="section: education" title="Education" />

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-ink border-2 border-amber"
                aria-hidden="true"
              />
              <p className="font-mono text-sm text-teal mb-1">{item.period}</p>
              <h3 className="font-display text-xl sm:text-2xl text-text-primary font-medium">
                {item.degree}
              </h3>
              <p className="text-text-muted mt-1">{item.institution}</p>
              <p className="text-text-faint">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
