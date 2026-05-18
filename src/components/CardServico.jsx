export default function CardServico({ title, description, icon: Icon }) {
  return (
    <div className="relative group bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-slate-900/80 shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between h-full overflow-hidden">
      
      {/* Linha brilhante decorativa no topo do card ao passar o mouse */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Ícone com fundo iluminado */}
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6 shadow-inner">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 mt-3 text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Detalhe estético no rodapé do card */}
      <div className="mt-6 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        Ativo no Sistema &rarr;
      </div>
    </div>
  );
}