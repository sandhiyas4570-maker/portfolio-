import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/resumeData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line bg-panel/20">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="section: skills"
          title="Skills"
          description="Tools and areas I work with, drawn from coursework and hands-on practice."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="panel-frame bg-panel/60 rounded-sm p-5 flex items-center gap-3 transition-colors hover:border-teal"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: i % 2 === 0 ? '#E8A33D' : '#4FB6A8' }}
                aria-hidden="true"
              />
              <span className="text-text-primary font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
