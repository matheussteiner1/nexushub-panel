
import { Cpu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-400">
          <Cpu className="w-6 h-6 text-indigo-500" />
          <span>NexusHub</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-indigo-400 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-indigo-400 transition-colors">Serviços</a>
          <a href="#recursos" className="hover:text-indigo-400 transition-colors">Diferenciais</a>
        </nav>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5">
            Acessar Painel
          </button>
        </div>
      </div>
    </header>
  );
}