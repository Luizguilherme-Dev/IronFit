import { motion } from 'framer-motion'
// Ícones de marca do lucide-react foram depreciados (Facebook, Youtube, Twitter…).
// Usamos os equivalentes genéricos não depreciados para manter os links sociais sem avisos.
import { AtSign, Instagram, Play } from 'lucide-react'

/**
 * Seção "Nossa Equipe":
 * Cards de instrutores com foto, nome, especialidade e links sociais.
 */
const TEAM = [
  {
    name: 'Rafael Moraes',
    role: 'Hipertrofia e Força',
    photo:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Camila Duarte',
    role: 'Emagrecimento & Cardio',
    photo:
      'https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Bruno Almeida',
    role: 'Treino Funcional',
    photo:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Juliana Prado',
    role: 'Nutrição Esportiva',
    photo:
      'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Team() {
  return (
    <section id="instrutores" className="bg-white py-20 lg:py-28">
      <div className="section-shell">
        {/* ---- Cabeçalho ---- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossa Equipe</span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.6rem]">
            Especialistas que treinam ao seu lado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Profissionais certificados e apaixonados por resultado, prontos para ajustar cada
            detalhe da sua rotina.
          </p>
        </div>

        {/* ---- Grid de instrutores ---- */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Foto */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.photo}
                  alt={`Personal trainer ${member.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/80 via-transparent to-transparent" />

                {/* Links sociais que aparecem no hover */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-2 pb-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {[
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: AtSign, label: 'Facebook' },
                    { Icon: Play, label: 'YouTube' },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`${label} de ${member.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-brand transition-colors hover:bg-flame hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Informações */}
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold text-brand-dark">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-flame">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}