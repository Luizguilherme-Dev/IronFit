import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Play, ShieldCheck, Sparkles, Star } from 'lucide-react'

/**
 * Hero Section:
 * - Título e subtítulo de alto impacto
 * - Formulário rápido (e-mail + CTA laranja) com estado React
 * - Grid de métricas de impacto
 * - Visual split com composição geométrica
 */
const STATS = [
  { value: '+10', label: 'Anos de Experiência' },
  { value: '+5.000', label: 'Alunos Satisfeitos' },
  { value: '+20', label: 'Especialistas Qualificados' },
]

export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  // Validação simples do formulário de captação
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    setStatus(isValid ? 'success' : 'error')
    if (isValid) setEmail('')
  }

  return (
    <section id="inicio" className="relative overflow-hidden bg-mist pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* ---- Blobs geométricos de fundo ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-flame/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:26px_26px]" />
      </div>

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* ================= Coluna de texto ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Sua melhor versão começa hoje
          </span>

          <h1 className="mt-6 font-display text-4xl font-black leading-[1.08] tracking-tight text-brand-dark sm:text-5xl lg:text-[3.4rem]">
            Conquiste o Corpo Ideal e{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">Transforme</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-flame/25" />
            </span>{' '}
            Sua Saúde com a IronFit
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Treinos personalizados, equipamentos de última geração e acompanhamento profissional
            para você alcançar seus objetivos mais rápido.
          </p>

          {/* ---- Formulário rápido de captação ---- */}
          <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xl" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status !== 'idle') setStatus('idle')
                  }}
                  placeholder="Digite seu melhor e-mail"
                  aria-label="Seu e-mail"
                  className={`h-14 w-full rounded-xl border-2 bg-white px-5 text-sm font-medium text-ink outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 ${status === 'error'
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                      : 'border-slate-200 focus:border-brand focus:ring-brand/15'
                    }`}
                />
              </div>
              <button type="submit" className="btn-flame h-14 shrink-0 px-7">
                Começar Agora
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Feedback do formulário */}
            <div className="mt-3 min-h-[22px] text-sm font-medium">
              {status === 'success' && (
                <span className="inline-flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" /> Tudo certo! Enviamos seu acesso à aula
                  experimental.
                </span>
              )}
              {status === 'error' && (
                <span className="text-red-500">Informe um e-mail válido para continuar.</span>
              )}
            </div>
          </form>

          {/* ---- Prova social rápida ---- */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand" /> Sem taxa de matrícula
            </span>
            <span className="inline-flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              4,9/5 em avaliações
            </span>
          </div>
        </motion.div>

        {/* ================= Coluna visual ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Composição geométrica arrojada */}
          <div className="relative">
            {/* Quadrado azul rotacionado atrás */}
            <div className="absolute -inset-4 rotate-6 rounded-[2.5rem] bg-brand" aria-hidden="true" />
            <div
              className="absolute -inset-2 -rotate-3 rounded-[2.5rem] bg-flame/90"
              aria-hidden="true"
            />

            {/* Card principal com "foto" do treino */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-brand-dark shadow-glow sm:aspect-[5/5]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
                alt="Aluno treinando na IronFit"
                loading="lazy"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/85 via-brand-dark/20 to-transparent" />

              {/* Selo flutuante */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-brand shadow-card">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-flame" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
                </span>
                Vagas abertas
              </div>

              {/* Botão de play decorativo */}
              <button
                type="button"
                aria-label="Assistir vídeo institucional"
                className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/95 text-brand shadow-card transition-transform duration-300 hover:scale-110"
              >
                <Play className="h-5 w-5 fill-current" />
              </button>

              {/* Mini card de progresso sobre a imagem */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-display text-sm font-bold">Meta semanal</p>
                    <p className="text-xs text-white/70">4 de 5 treinos concluídos</p>
                  </div>
                  <span className="font-display text-lg font-black text-flame">80%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-flame to-flame-light"
                  />
                </div>
              </div>
            </div>

            {/* Card flutuante de instrutor */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:block lg:-left-10"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=120&q=80"
                  alt="Personal trainer"
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-bold text-brand-dark">Coach Rafael</p>
                  <p className="text-xs text-slate-500">Personal dedicado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ================= Métricas de impacto ================= */}
      <div className="section-shell relative mt-20">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white px-6 py-8 text-center sm:py-10"
            >
              <p className="font-display text-4xl font-black tracking-tight text-brand sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}