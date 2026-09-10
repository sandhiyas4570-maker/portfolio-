import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile, contact, languages, strengths } from '../data/resumeData'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading tag="section: about" title="About me" />

        <div className="grid md:grid-cols-3 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 text-text-muted leading-relaxed text-lg"
          >
            {profile.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="panel-frame bg-panel/50 p-6 rounded-sm"
          >
            <p className="font-mono text-sm text-teal mb-3">location</p>
            <p className="text-text-primary mb-6">{contact.location}</p>

            <p className="font-mono text-sm text-teal mb-3">languages</p>
            <p className="text-text-primary mb-6">{languages.join(', ')}</p>

            <p className="font-mono text-sm text-teal mb-3">strengths</p>
            <ul className="space-y-1.5">
              {strengths.map((s) => (
                <li key={s} className="text-text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full inline-block" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
