

export default function CardServico({ title, description, icon: Icon }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 group shadow-md hover:shadow-indigo-500/5">
      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mb-5">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 mt-3 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}