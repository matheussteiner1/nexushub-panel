import { Shield, Zap, Cpu } from 'lucide-react';

export default function FeatureSection() {
  return (
    <section id="destaque" className="relative bg-slate-950/40 border-y border-slate-900 py-24 overflow-hidden">
      {/* Efeito de luz decorativo de fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Alta Performance</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Porquê escolher o NexusHub?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            Uma infraestrutura robusta e segura desenhada para escalar o teu negócio sem fricção.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {/* Diferencial 1 */}
            <div className="relative group bg-slate-900/20 border border-slate-900 rounded-2xl p-6 hover:border-slate-800 transition-all">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-white">Velocidade Ultra-Rápida</p>
              </dt>
              <dd className="mt-2 ml-16 text-sm text-slate-400 leading-relaxed">
                Otimizado com Vite e componentes leves para entregar uma experiência instantânea ao utilizador.
              </dd>
            </div>

            {/* Diferencial 2 */}
            <div className="relative group bg-slate-900/20 border border-slate-900 rounded-2xl p-6 hover:border-slate-800 transition-all">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-white">Segurança de Ponta</p>
              </dt>
              <dd className="mt-2 ml-16 text-sm text-slate-400 leading-relaxed">
                Camadas de proteção de dados estruturadas para manter o teu painel e operações totalmente blindados.
              </dd>
            </div>

            {/* Diferencial 3 */}
            <div className="relative group bg-slate-900/20 border border-slate-900 rounded-2xl p-6 hover:border-slate-800 transition-all">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Cpu className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-semibold text-white">Arquitetura Modular</p>
              </dt>
              <dd className="mt-2 ml-16 text-sm text-slate-400 leading-relaxed">
                Componentização limpa em React, facilitando a manutenção e a expansão de novos recursos.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}