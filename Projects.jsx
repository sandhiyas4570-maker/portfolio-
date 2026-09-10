import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data/resumeData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line bg-panel/20">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading tag="section: projects" title="Projects" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="panel-frame bg-panel/60 rounded-sm p-7 hover:border-amber transition-colors"
            >
              <p className="font-mono text-xs text-teal mb-4">{project.field}</p>
              <h3 className="font-display text-xl text-text-primary font-medium leading-snug">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
