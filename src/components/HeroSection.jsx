export default function HeroSection() {
  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#030712]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 text-xs text-indigo-300 font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Nova era da gestão digital
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Centralize suas operações <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-200 to-slate-200">
            tecnológicas em um só lugar.
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Monitore, escale e otimize toda a infraestrutura e os serviços digitais da sua empresa utilizando a plataforma do NexusHub.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servicos"
            onClick={(e) => handleScrollToSection(e, 'servicos')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 text-center cursor-pointer transform hover:-translate-y-0.5"
          >
            Comece agora
          </a>
          
          <a
            href="#destaque"
            onClick={(e) => handleScrollToSection(e, 'destaque')}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-300 font-semibold rounded-xl transition-all duration-200 text-center cursor-pointer transform hover:-translate-y-0.5"
          >
            Saber mais
          </a>
        </div>
      </div>
    </section>
  );
}