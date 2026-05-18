export default function CardServico({ title, description, icon: Icon, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300 font-sans shadow-sm cursor-pointer transform hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center font-bold text-orange-500 group-hover:bg-orange-100 transition-all">
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mt-5 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
        description
      </p>
      
      <div className="mt-5 text-xs text-orange-500 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
        Ver mais detalhes →
      </div>
    </div>
  );
}