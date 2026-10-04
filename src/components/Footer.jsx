import { ArrowUp, AtSign, Clock, Dumbbell, Instagram, Mail, MapPin, Phone, Play } from 'lucide-react'

/**
 * Footer / Rodapé:
 * Logo, descrição, links rápidos, políticas, contatos e redes sociais.
 */
const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Treinos', href: '#treinos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Instrutores', href: '#instrutores' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Play, label: 'YouTube', href: '#' },
  { Icon: AtSign, label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deeper text-slate-300">
      {/* Faixa de CTA final */}
      <div className="section-shell relative py-14">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-brand to-brand-light p-8 text-center shadow-glow sm:p-10 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
              Pronto para começar sua transformação?
            </h3>
            <p className="mt-2 text-sm text-white/80 sm:text-base">
              Agende sua aula experimental gratuita e conheça a estrutura da IronFit.
            </p>
          </div>
          <a href="#inicio" className="btn-flame shrink-0">
            Agendar Aula Experimental
          </a>
        </div>
      </div>

      {/* Conteúdo principal do rodapé */}
      <div className="section-shell grid gap-12 border-t border-white/10 py-14 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
              <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-flame ring-2 ring-brand-deeper" />
            </span>
            <span className="font-display text-2xl font-black tracking-tight text-white">
              Iron<span className="text-flame">Fit</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            Academia completa com treinos personalizados, tecnologia no acompanhamento e uma equipe
            que se dedica ao seu resultado. Sua melhor versão começa aqui.
          </p>

          {/* Redes sociais */}
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame hover:bg-flame hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Links Rápidos
          </h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-flame"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Institucional
          </h4>
          <ul className="mt-5 space-y-3">
            {[
              'Política de Privacidade',
              'Termos de Uso',
              'Trabalhe Conosco',
              'Central de Ajuda',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-slate-400 transition-colors hover:text-flame">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Fale Conosco
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              Av. Energia, 1200 — Centro, São Paulo/SP
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              (11) 4000-1234
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              contato@ironfit.com.br
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              Seg a Dom — 6h às 23h
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} IronFit. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-flame"
          >
            Voltar ao topo
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}