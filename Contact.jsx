import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { contact } from '../data/resumeData'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="section: contact"
          title="Get in touch"
          description="Open to opportunities to learn, build, and grow as an AI & ML developer."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          <a
            href={`mailto:${contact.email}`}
            className="panel-frame bg-panel/60 rounded-sm p-6 hover:border-amber transition-colors group"
          >
            <p className="font-mono text-sm text-teal mb-2">email</p>
            <p className="text-text-primary group-hover:text-amber transition-colors break-all">
              {contact.email}
            </p>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="panel-frame bg-panel/60 rounded-sm p-6 hover:border-amber transition-colors group"
          >
            <p className="font-mono text-sm text-teal mb-2">phone</p>
            <p className="text-text-primary group-hover:text-amber transition-colors">
              {contact.phone}
            </p>
          </a>

          <div className="panel-frame bg-panel/60 rounded-sm p-6">
            <p className="font-mono text-sm text-teal mb-2">location</p>
            <p className="text-text-primary">{contact.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
