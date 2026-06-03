import { Github, Mail, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const navItems = [
  { id: 'hero', label: '~' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

const pathColors = [
  'text-tokyo-green',
  'text-tokyo-blue',
  'text-tokyo-purple',
  'text-tokyo-orange',
  'text-tokyo-yellow',
  'text-tokyo-red',
  'text-tokyo-blue',
]

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (id) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-tokyo-bg/90 backdrop-blur-md border-b border-tokyo-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-6xl mx-auto px-3 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="hidden md:flex md:items-center font-mono text-xs md:text-sm">
            <div className="flex items-center">
              <span className="text-tokyo-muted">ahmad@dev</span>
              <span className="text-tokyo-muted mx-1 md:mx-2">:</span>
            </div>
            <div className="flex items-center">
              {navItems.map((item, index) => (
                <motion.div key={item.id} className="flex items-center" whileHover={{ scale: 1.05 }}>
                  {index > 0 && <span className="text-tokyo-muted mx-0.5 md:mx-1">/</span>}
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-xs md:text-sm ${pathColors[index]} hover:text-tokyo-text transition-colors`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-tokyo-purple"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              ))}
              <span className="text-tokyo-green ml-1 md:ml-2">$</span>
              <motion.span
                className="text-tokyo-green ml-0.5 md:ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              >
                ▊
              </motion.span>
            </div>
          </div>

          <div className="md:hidden flex items-center font-mono text-xs">
            <span className="text-tokyo-muted">ahmad@dev</span>
            <span className="text-tokyo-muted mx-1">:</span>
            <span className="text-tokyo-green">~$</span>
            <motion.span
              className="text-tokyo-green ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            >
              ▊
            </motion.span>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <div className="hidden md:flex items-center gap-1 md:gap-3">
              <motion.a
                href="https://github.com/M-Ahmad-ma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-0 text-tokyo-muted hover:text-tokyo-text transition-colors rounded-md touch-target"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:muhammadahmadma4642@gmail.com"
                className="p-2 md:p-0 text-tokyo-muted hover:text-tokyo-text transition-colors rounded-md touch-target"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-tokyo-muted hover:text-tokyo-text transition-colors rounded-md touch-target"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed z-40 md:hidden border-t border-tokyo-border bg-tokyo-bg/95 backdrop-blur-md overflow-hidden flex flex-col"
            style={{ top: '60px', left: 0, right: 0, bottom: 0 }}
          >
            <div className="px-4 pt-3 pb-2 space-y-1 flex-1 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left font-mono text-sm py-3.5 px-3 rounded-md flex items-center gap-3 transition-colors ${
                      activeSection === item.id
                        ? 'bg-tokyo-surface/70 text-tokyo-text'
                        : 'text-tokyo-muted hover:bg-tokyo-surface/50 hover:text-tokyo-text'
                    }`}
                  >
                    <span className="text-tokyo-muted w-4 text-right shrink-0">$</span>
                    <span className={`${pathColors[index]} font-medium`}>
                      {item.label === '~' ? '~' : item.label}
                    </span>
                    {activeSection === item.id && (
                      <motion.span
                        className="text-tokyo-green ml-auto"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                      >
                        ▊
                      </motion.span>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
            <div className="px-4 py-4 border-t border-tokyo-border flex items-center gap-4 shrink-0">
              <motion.a
                href="https://github.com/M-Ahmad-ma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tokyo-muted hover:text-tokyo-text transition-colors p-2 rounded-md touch-target-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="mailto:muhammadahmadma4642@gmail.com"
                className="text-tokyo-muted hover:text-tokyo-text transition-colors p-2 rounded-md touch-target-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
