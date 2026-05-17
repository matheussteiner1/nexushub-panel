import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardServico from './components/CardServico';
import Destaque from './components/Destaque';
import Footer from './components/Footer';
import { servicesData } from './data/services';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        
        {/* Seção dos Cards */}
        <section id="servicos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Nossas Soluções Digitais
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Recursos construídos sob medida com os mais altos padrões de design moderno e escalabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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