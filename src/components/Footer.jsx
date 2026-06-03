import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-tokyo-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-tokyo-muted text-xs md:text-sm mt-1 md:mt-2">
          © {currentYear} Muhammad Ahmad. <span className="text-tokyo-string">All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
