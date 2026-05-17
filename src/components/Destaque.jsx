
import { CheckCircle2 } from 'lucide-react';

export default function Destaque() {
  const differentials = [
    "Implementação ágil e modular sem atrito",
    "Suporte corporativo especializado 24/7",
    "Segurança em conformidade internacional",
    "Integração nativa com APIs REST e GraphQL"
  ];

  return (
    <section id="recursos" className="bg-slate-950 py-20 border-t border-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Por que empresas líderes escolhem o NexusHub?
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              Nossa abordagem une beleza estética, performance inigualável e ferramentas prontas que eliminam semanas de desenvolvimento técnico de sua equipe.
            </p>
            <ul className="mt-8 space-y-4">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400">+10M</span>
              <span className="text-xs text-slate-500 uppercase font-medium mt-2 block tracking-wider">Requisições/dia</span>
            </div>
            <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400">&lt; 45ms</span>
              <span className="text-xs text-slate-500 uppercase font-medium mt-2 block tracking-wider">Latência Média</span>
            </div>
            <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 text-center col-span-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400">99.98%</span>
              <span className="text-xs text-slate-500 uppercase font-medium mt-2 block tracking-wider">Satisfação de Clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}