
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 pt-24 pb-20 lg:pt-32 lg:pb-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
            ✨ Nova era da gestão digital
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r flow-root from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-none">
            Centralize suas operações tecnológicas em um só lugar.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
            Monitore, escale e otimize toda a infraestrutura e os serviços digitais da sua empresa utilizando a plataforma do NexusHub.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium shadow-xl shadow-indigo-500/10 flex items-center justify-center gap-2 group transition-all">
              Começar Agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-slate-300 px-6 py-3 rounded-xl font-medium transition-all">
              Agendar Demo
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 relative hidden lg:block">
          <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 shadow-2xl flex items-center justify-center backdrop-blur-3xl">
            <div className="text-center">
              <span className="text-5xl font-black text-indigo-400">99.9%</span>
              <p className="text-sm text-slate-400 mt-2 tracking-widest uppercase">Uptime Garantido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}