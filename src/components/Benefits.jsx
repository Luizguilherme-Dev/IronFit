import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

/**
 * Seção "Por que escolher a IronFit?":
 * Layout em 2 colunas (texto + imagem estilizada) com lista de checkmarks coloridos.
 */
const BENEFITS = [
  'Avaliação física gratuita',
  'Acesso ilimitado 7 dias por semana',
  'Aplicativo exclusivo para treino',
  'Acompanhamento nutricional dedicado',
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      {/* Detalhe geométrico de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* ================= Coluna de imagem ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Molduras decorativas */}
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl border-4 border-flame/40"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-brand/15"
            />

            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              alt="Estrutura completa da academia IronFit"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card lg:aspect-[5/4]"
            />

            {/* Card de destaque sobreposto */}
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-card sm:left-10 sm:right-auto sm:w-64">
              <p className="font-display text-3xl font-black text-brand">+5.000</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                alunos transformados nos últimos anos
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= Coluna de texto ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow">Benefícios Exclusivos</span>

          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.6rem]">
            Por que escolher a <span className="text-flame">IronFit</span>?
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            Mais do que uma academia, entregamos um ecossistema completo de saúde: estrutura
            premium, tecnologia no acompanhamento e uma equipe que se envolve com o seu resultado.
          </p>

          {/* Lista de benefícios com checkmarks */}
          <ul className="mt-8 space-y-4">
            {BENEFITS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3.5"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-base font-semibold text-slate-700">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <a href="#planos" className="btn-brand">
              Saiba Mais
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}