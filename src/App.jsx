import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

/**
 * IronFit — Landing Page
 * Estrutura: Header > Hero > Programas > Benefícios > Planos > Equipe > Depoimentos > Footer
 * Todas as seções são componentes independentes e responsivos (mobile first).
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Programs />
        <Benefits />
        <Pricing />
        <Team />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}