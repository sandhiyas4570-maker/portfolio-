import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-sm text-text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-sm text-text-faint">{profile.title}</p>
      </div>
    </footer>
  )
}
