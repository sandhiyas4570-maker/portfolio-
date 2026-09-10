import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/resumeData'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-line bg-panel/20">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading tag="section: certifications" title="Certifications" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="panel-frame bg-panel/60 rounded-sm p-7 flex gap-4 items-start"
            >
              <span className="w-2 h-2 mt-2 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg text-text-primary font-medium leading-snug">
                  {cert.title}
                </h3>
                <p className="text-text-muted mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
