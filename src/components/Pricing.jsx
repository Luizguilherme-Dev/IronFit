import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Crown, Rocket, Star, Zap } from 'lucide-react'

/**
 * Seção "Nossos Planos":
 * - Fundo em tom azul (background diferenciado)
 * - Tabs controladas por estado React (Mensal / Trimestral / Anual)
 * - 3 cards: Start, Pro (destaque) e VIP
 */
const PLANS = [
  {
    id: 'start',
    name: 'Plano Start',
    icon: Rocket,
    tagline: 'Ideal para quem está começando',
    monthly: 89,
    features: [
      'Acesso à musculação e cardio',
      'Avaliação física inicial',
      'Treinos guiados pelo app',
      'Horário: 6h às 22h',
      'Suporte da equipe técnica',
    ],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Plano Pro',
    icon: Zap,
    tagline: 'O mais vendido entre nossos alunos',
    monthly: 149,
    features: [
      'Tudo do Plano Start',
      'Acesso ilimitado 7 dias por semana',
      'Treino funcional e aulas coletivas',
      'Acompanhamento nutricional',
      'Acesso a todas as unidades',
      'Avaliação física trimestral',
    ],
    highlighted: true,
  },
  {
    id: 'vip',
    name: 'Plano VIP',
    icon: Crown,
    tagline: 'Acesso completo com personal exclusivo',
    monthly: 279,
    features: [
      'Tudo do Plano Pro',
      'Personal trainer exclusivo',
      'Plano nutricional individualizado',
      'Fisioterapia e recuperação',
      'Agendamento prioritário',
      'Convidado mensal gratuito',
    ],
    highlighted: false,
  },
]

// Ciclos de cobrança e seus descontos
const CYCLES = [
  { id: 'mensal', label: 'Mensal', months: 1, discount: 0 },
  { id: 'trimestral', label: 'Trimestral', months: 3, discount: 0.1 },
  { id: 'anual', label: 'Anual', months: 12, discount: 0.2 },
]

export default function Pricing() {
  const [cycleId, setCycleId] = useState('mensal')
  const cycle = CYCLES.find((c) => c.id === cycleId)

  // Calcula o preço mensal com o desconto do ciclo selecionado
  const priceFor = (plan) => Math.round(plan.monthly * (1 - cycle.discount))

  return (
    <section id="planos" className="relative overflow-hidden bg-brand-dark py-20 lg:py-28">
      {/* ---- Camadas decorativas de fundo ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-deeper" />
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-flame/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:30px_30px]" />
      </div>

      <div className="section-shell relative">
        {/* ---- Cabeçalho ---- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/15">
            <Star className="h-3.5 w-3.5 text-flame" />
            Nossos Planos
          </span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Um plano para cada nível de dedicação
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Sem taxa de matrícula e sem fidelidade abusiva. Escolha o ciclo e comece hoje mesmo.
          </p>
        </div>

        {/* ---- Tabs de cobrança (estado React) ---- */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Ciclo de cobrança"
            className="inline-flex flex-wrap justify-center gap-1 rounded-2xl border border-white/15 bg-white/10 p-1.5 backdrop-blur"
          >
            {CYCLES.map((c) => {
              const active = c.id === cycleId
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCycleId(c.id)}
                  className={`relative rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-colors duration-300 ${active ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                >
                  {active && (
                    <motion.span
                      layoutId="cycle-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-flame shadow-flame"
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {c.label}
                    {c.discount > 0 && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${active ? 'bg-white/25 text-white' : 'bg-flame/20 text-flame-light'
                          }`}
                      >
                        -{Math.round(c.discount * 100)}%
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ---- Cards de preço ---- */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${plan.highlighted
                    ? 'bg-white shadow-glow ring-2 ring-flame lg:scale-[1.04]'
                    : 'border border-white/12 bg-white/[0.06] text-white backdrop-blur'
                  }`}
              >
                {/* Badge "Mais Popular" */}
                {plan.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-flame px-4 py-1.5 font-display text-[11px] font-black uppercase tracking-wider text-white shadow-flame">
                    Mais Popular
                  </span>
                )}

                {/* Cabeçalho do card */}
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${plan.highlighted ? 'bg-brand-soft text-brand' : 'bg-white/10 text-flame'
                      }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3
                      className={`font-display text-xl font-black ${plan.highlighted ? 'text-brand-dark' : 'text-white'
                        }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs font-semibold ${plan.highlighted ? 'text-slate-500' : 'text-slate-400'
                        }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>
                </div>

                {/* Preço */}
                <div className="mt-7 flex items-end gap-2">
                  <span
                    className={`font-display text-5xl font-black leading-none tracking-tight ${plan.highlighted ? 'text-brand-dark' : 'text-white'
                      }`}
                  >
                    R$ {priceFor(plan)}
                  </span>
                  <span
                    className={`pb-1 text-sm font-semibold ${plan.highlighted ? 'text-slate-500' : 'text-slate-400'
                      }`}
                  >
                    /mês
                  </span>
                </div>
                {cycle.discount > 0 && (
                  <p
                    className={`mt-1 text-xs font-semibold ${plan.highlighted ? 'text-emerald-600' : 'text-emerald-400'
                      }`}
                  >
                    Economia de R$ {(plan.monthly - priceFor(plan)) * cycle.months} no plano{' '}
                    {cycle.label.toLowerCase()}
                  </p>
                )}

                {/* Divisor */}
                <div
                  className={`my-7 h-px w-full ${plan.highlighted ? 'bg-slate-200' : 'bg-white/15'
                    }`}
                />

                {/* Recursos */}
                <ul className="flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${plan.highlighted
                            ? 'bg-flame text-white'
                            : 'bg-white/15 text-white'
                          }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-sm font-medium ${plan.highlighted ? 'text-slate-600' : 'text-slate-300'
                          }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA do card */}
                <a
                  href="#inicio"
                  className={`mt-8 w-full ${plan.highlighted ? 'btn-flame' : 'btn-ghost'
                    }`}
                >
                  {plan.highlighted ? 'Assinar Agora' : 'Escolher Plano'}
                </a>
              </motion.article>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Todos os planos incluem app exclusivo IronFit e suporte com nossa equipe técnica.
        </p>
      </div>
    </section>
  )
}