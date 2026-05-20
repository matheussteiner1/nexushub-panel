export default function CardServico({ title, description, icon: Icon, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-orange-500 cursor-pointer transition-all text-left"
    >
      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-orange-600" />
      </div>
      <h4 className="text-lg font-black text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500 mt-2">{description}</p>
    </div>
  );
}