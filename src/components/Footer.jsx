export default function Footer() {
  return (
    <footer className="bg-slate-950/80 border-t border-slate-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Lado Esquerdo: Nome da Marca */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-white">
            Nexus<span className="text-indigo-500">Hub</span>
          </span>
          <span className="text-xs text-slate-500">| © {new Date().getFullYear()}</span>
        </div>

        {/* Lado Direito: Nomes Corrigidos da Dupla */}
        <div className="text-center md:text-right">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
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