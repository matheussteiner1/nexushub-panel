import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardServico from './components/CardServico';
import Destaque from './components/Destaque';
import Footer from './components/Footer';
import { servicesData } from './data/services';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] antialiased text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        
        {/* Seção dos Cards com fundo trabalhado */}
        <section id="servicos" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Efeito de luz de fundo atrás dos cards */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Nossas 4 Soluções Principais
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-4">
              Painel de Serviços Integrados
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Recursos de alta performance construídos sob medida para a sua infraestrutura digital.
            </p>
          </div>

          {/* Grid reforçado para os 4 cards ficarem perfeitamente visíveis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {servicesData.map((service) => (
              <CardServico
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        <Destaque />
      </main>
      <Footer />
    </div>
  );
}