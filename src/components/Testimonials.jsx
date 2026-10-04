import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

/**
 * Seção "O que dizem nossos alunos":
 * Cards de avaliação com foto, nome, 5 estrelas e depoimento.
 */
const TESTIMONIALS = [
  {
    name: 'Marina Souza',
    result: 'Perdeu 14kg em 6 meses',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    text: 'A IronFit mudou completamente minha relação com o exercício. Os treinos são desafiadores, mas o acompanhamento faz toda a diferença. Em 6 meses perdi 14kg e ganhei uma energia que eu não tinha há anos.',
  },
  {
    name: 'Diego Fernandes',
    result: 'Ganhou 9kg de massa magra',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Treinava há anos sem evolução real. Na IronFit recebi periodização de verdade, correção de técnica e dieta ajustada. Ganhei 9kg de massa magra com o plano Pro e o personal exclusivo do VIP.',
  },
  {
    name: 'Beatriz Lima',
    result: 'Reduziu 8% de gordura',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'O aplicativo exclusivo é sensacional: consigo ver minha evolução, ajustar cargas e falar direto com meu treinador. Reduzi 8% de gordura mantendo a força. Recomendo para qualquer pessoa que queira resultados reais.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-flame/10 blur-3xl"
      />

      <div className="section-shell relative">
        {/* ---- Cabeçalho ---- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.6rem]">
            O que dizem nossos alunos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Histórias reais de quem decidiu investir na própria saúde com a IronFit.
          </p>
        </div>

        {/* ---- Cards de depoimento ---- */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Aspas decorativas */}
              <Quote className="absolute right-6 top-6 h-9 w-9 text-brand-soft transition-colors duration-300 group-hover:text-flame/25" />

              {/* Classificação 5/5 */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                “{item.text}”
              </blockquote>

              {/* Autor */}
              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                <img
                  src={item.photo}
                  alt={`Aluno ${item.name}`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-soft"
                />
                <div>
                  <p className="font-display text-sm font-bold text-brand-dark">{item.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-flame">
                    {item.result}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}