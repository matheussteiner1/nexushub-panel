import { useState } from 'react';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estado para guardar quem está logado no sistema atualmente
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // 📝 BANCO DE DADOS EM MEMÓRIA CORRIGIDO
  const usuariosCadastrados = [
    { usuario: "matheus steiner", nome: "Matheus Steiner Milleto", cargo: "DevOps Engineer" },
    { usuario: "yohai ribeiro", nome: "Yohai Ribeiro", cargo: "FullStack Developer" },
    { usuario: "alunouni", nome: "Administrador Geral", cargo: "Acesso Administrativo" },
    { usuario: "aluno uni", nome: "Administrador Geral", cargo: "Acesso Administrativo" }
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Remove espaços extras e joga tudo para minúsculo
    const inputLimpo = email.trim().toLowerCase();
    const senhaLimpa = password.trim();

    // Busca o usuário na nossa lista simulada
    const usuarioEncontrado = usuariosCadastrados.find(
      (u) => u.usuario === inputLimpo
    );

    // Valida as credenciais contra a senha padrão
    if (usuarioEncontrado && senhaLimpa === "12345678") {
      setUsuarioLogado(usuarioEncontrado);
      setIsLoginOpen(false);
      setEmail('');
      setPassword('');
    } else {
      alert(`❌ Erro de Autenticação!\n\nUsuário incorreto ou senha diferente de 12345678. Tente novamente.`);
    }
  };

  const handleLogout = () => {
    setUsuarioLogado(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Nova: SecurityHub */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#f97316] flex items-center justify-center font-bold text-white shadow-md shadow-[#f97316]/20">
              S
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              Security<span className="text-[#f97316]">Hub</span>
            </span>
          </div>

          {/* Links de Navegação */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servicos" className="hover:text-slate-900 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-slate-900 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-slate-900 transition-colors">Contato</a>
          </nav>

          {/* Botão Dinâmico de Login */}
          <div>
            {!usuarioLogado ? (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-all cursor-pointer transform hover:-translate-y-0.5 shadow-md shadow-orange-500/10"
              >
                Acessar Painel
              </button>
            ) : (
              <span className="text-xs bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full font-semibold">
                Sessão Segura Ativa
              </span>
            )}
          </div>
        </div>
      </header>

      {/* --- MODAL DE LOGIN (TEMA CLARO LIMPO) --- */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-slate-900/40 transition-all">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md p-8 shadow-2xl relative">
            
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl p-1 leading-none"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Acesse o SecurityHub</h3>
              <p className="text-sm text-slate-500 mt-1">Insira suas credenciais de acesso</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nome de Usuário</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="" 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Senha de Acesso</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors" 
                />
              </div>

              <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all mt-2 shadow-lg shadow-orange-500/20">
                Entrar no Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- CARD DE SESSÃO ATIVA (CANTO INFERIOR DIREITO TEMA CLARO) --- */}
      {usuarioLogado && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-xs flex items-center gap-4 border-l-4 border-l-orange-500 animate-slideUp">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>

          <div className="flex-1 font-sans">
            <p className="text-xs text-slate-400 font-medium leading-none">Conectado como:</p>
            <h4 className="text-sm font-bold text-slate-900 mt-1">{usuarioLogado.nome}</h4>
            <p className="text-[11px] text-orange-600 font-semibold uppercase tracking-wider mt-0.5">{usuarioLogado.cargo}</p>
          </div>

          <button 
            onClick={handleLogout}
            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer font-medium"
          >
            Sair
          </button>
        </div>
      )}
    </>
  );
}