import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dumbbell, Menu, X } from 'lucide-react'

/**
 * Header / Navbar fixa com:
 * - Logo "IronFit" estilizado
 * - Navegação com smooth scroll
 * - CTA "AULA EXPERIMENTAL"
 * - Menu hambúrguer responsivo (estado controlado por React)
 */
const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Treinos', href: '#treinos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Instrutores', href: '#instrutores' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Adiciona fundo sólido ao header depois de rolar a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? 'border-b border-slate-200/70 bg-white/90 py-3 shadow-sm backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent py-5'
        }`}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        {/* ---- Logo ---- */}
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
            <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-flame ring-2 ring-white" />
          </span>
          <span className="font-display text-2xl font-black leading-none tracking-tight text-brand-dark">
            Iron<span className="text-flame">Fit</span>
          </span>
        </a>

        {/* ---- Navegação desktop ---- */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-brand"
            >
              {link.label}
              {/* Sublinhado animado no hover */}
              <span className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-flame transition-transform duration-300 hover:scale-x-100 peer-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* ---- CTA desktop ---- */}
        <div className="hidden lg:block">
          <a href="#planos" className="btn-flame">
            Aula Experimental
          </a>
        </div>

        {/* ---- Botão hambúrguer (mobile) ---- */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-brand-dark shadow-sm transition-colors hover:border-brand hover:text-brand lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ---- Painel do menu mobile ---- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="section-shell flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-xl px-4 py-3 font-display text-base font-bold text-slate-700 transition-colors hover:bg-brand-soft hover:text-brand"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#planos"
                onClick={() => setIsOpen(false)}
                className="btn-flame mt-3 w-full"
              >
                Aula Experimental
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}