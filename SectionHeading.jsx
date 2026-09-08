import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, description }) {
  return (
    <motion.div
      className="mb-10 md:mb-14"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p className="font-mono text-sm text-teal mb-2">{tag}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-muted max-w-xl leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
