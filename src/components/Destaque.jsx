export default function Destaque() {
  return (
    <section id="destaque" className="relative bg-white py-24 font-sans overflow-hidden">
      {/* Background decorativo sutil para o tema claro */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-50 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-50 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
            NOSSAS 4 SOLUÇÕES PRINCIPAIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 uppercase tracking-tight">
            Painel de Serviços Integrados
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-xl mx-auto">
            Recursos de alta performance construídos sob medida para a sua infraestrutura digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-900">Dashboard Analítico</h4>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">Visualize métricas complexas em gráficos simples e intuitivos.</p>
            <div className="mt-6 text-xs text-orange-600 font-bold">Ver mais detalhes →</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-900">Segurança Avançada</h4>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">Proteção multicamadas contra invasões e vazamento de dados.</p>
            <div className="mt-6 text-xs text-orange-600 font-bold">Ver mais detalhes →</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-900">Infraestrutura Nuvem</h4>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">Servidores escaláveis com uptime garantido de 99.9%.</p>
            <div className="mt-6 text-xs text-orange-600 font-bold">Ver mais detalhes →</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-900">Otimização de Performance</h4>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">Velocidade máxima de processamento e resposta global.</p>
            <div className="mt-6 text-xs text-orange-600 font-bold">Ver mais detalhes →</div>
          </div>

        </div>
      </div>
    </section>
  );
}