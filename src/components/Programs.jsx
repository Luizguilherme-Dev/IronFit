import { motion } from 'framer-motion'
import { ArrowUpRight, Dumbbell, Flame, Smartphone, Zap } from 'lucide-react'

/**
 * Seção "Nossos Programas":
 * Grid de cards interativos com hover (elevação + troca de cor do ícone).
 */
const PROGRAMS = [
  {
    icon: Dumbbell,
    title: 'Hipertrofia e Força',
    description:
      'Periodização inteligente para ganho de massa muscular com progressão de cargas e técnica guiada.',
    tags: ['Musculação', 'Força'],
  },
  {
    icon: Flame,
    title: 'Emagrecimento & Cardio',
    description:
      'Combinação de treinos metabólicos e cardio estratégico para reduzir gordura sem perder desempenho.',
    tags: ['Cardio', 'Definição'],
  },
  {
    icon: Zap,
    title: 'Treino Funcional',
    description:
      'Movimentos dinâmicos que desenvolvem mobilidade, resistência e condicionamento físico geral.',
    tags: ['Funcional', 'Mobilidade'],
  },
  {
    icon: Smartphone,
    title: 'Consultoria Online',
    description:
      'Treine de onde quiser com acompanhamento remoto, planilhas atualizadas e suporte pelo app.',
    tags: ['Online', 'App'],
  },
]

export default function Programs() {
  return (
    <section id="treinos" className="relative bg-white py-20 lg:py-28">
      <div className="section-shell">
        {/* ---- Cabeçalho da seção ---- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossos Programas</span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.6rem]">
            Escolha o treino perfeito para o seu objetivo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Cada programa é montado por especialistas e ajustado conforme sua evolução dentro da
            IronFit.
          </p>
        </div>

        {/* ---- Grid de cards ---- */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program, i) => {
            const Icon = program.icon
            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-glow"
              >
                {/* Gradiente sutil no hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-soft via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative">
                  {/* Ícone */}
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-flame group-hover:text-white group-hover:shadow-flame">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </span>

                  <h3 className="mt-6 font-display text-lg font-bold text-brand-dark">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link de ação */}
                <a
                  href="#planos"
                  className="relative mt-7 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-brand transition-colors duration-300 group-hover:text-flame"
                >
                  Quero este treino
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}