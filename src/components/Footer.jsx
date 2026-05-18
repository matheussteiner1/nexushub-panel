export default function Footer() {
  return (
    <footer className="bg-[#0a0f18] border-t border-slate-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Lado Esquerdo: Novo Nome da Marca */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-white">
            Security<span className="text-[#f97316]">Hub</span>
          </span>
          <span className="text-xs text-slate-500">| © {new Date().getFullYear()}</span>
        </div>

        {/* Lado Direito: Integrantes da Dupla Corrigidos */}
        <div className="text-center md:text-right font-sans">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Desenvolvido por:
          </p>
          <p className="text-sm text-slate-300 font-medium">
            Matheus Steiner Milleto & Yohai Ribeiro
          </p>
        </div>

      </div>
    </footer>
  );
}