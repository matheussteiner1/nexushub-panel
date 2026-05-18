import { useState } from 'react';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estado para guardar quem está logado no sistema atualmente
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // 📝 BANCO DE DADOS EM MEMÓRIA ATUALIZADO
  const usuariosCadastrados = [
    { usuario: "matheus steiner", nome: "Matheus Steiner Milleto", cargo: "DevOps Engineer" },
    { usuario: "yohai ribeiro", nome: "Yohai Ribeiro", cargo: "FullStack Developer" },
    { usuario: "alunouni", nome: "Administrador Geral", cargo: "Acesso Administrativo" },
    { usuario: "aluno uni", nome: "Administrador Geral", cargo: "Acesso Administrativo" } // Aceita com espaço também!
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Limpa espaços extras nas pontas e padroniza para minúsculo
    const inputLimpo = email.trim().toLowerCase();
    const senhaLimpa = password.trim();

    // Busca o usuário na nossa lista
    const usuarioEncontrado = usuariosCadastrados.find(
      (u) => u.usuario === inputLimpo
    );

    // Valida o usuário e a senha fixa 12345678
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#030712]/60 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/20">
              N
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              Nexus<span className="text-indigo-500">Hub</span>
            </span>
          </div>

          {/* Links de Navegação */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#servicos" className="hover:text-white transition-colors">Início</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#destaque" className="hover:text-white transition-colors">Diferenciais</a>
          </nav>

          {/* Botão Dinâmico de Login */}
          <div>
            {!usuarioLogado ? (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Acessar Painel
              </button>
            ) : (
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full font-medium">
                Sessão Segura Ativa
              </span>
            )}
          </div>
        </div>
      </header>

      {/* --- MODAL DE LOGIN OTIMIZADO --- */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 transition-all">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-md p-8 shadow-2xl relative">
            
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white text-xl p-1"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white">Acesse o NexusHub</h3>
              <p className="text-sm text-slate-400 mt-1">Insira suas credenciais de acesso</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Nome de Usuário</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: aluno uni" 
                  required 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Senha de Acesso</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                />
              </div>

              <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 mt-2">
                Entrar no Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- CARD DE SESSÃO ATIVA (CANTO INFERIOR DIREITO) --- */}
      {usuarioLogado && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950/90 border border-indigo-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-xs flex items-center gap-4 border-l-4 border-l-indigo-500 animate-slideUp">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-400 font-medium leading-none">Conectado como:</p>
            <h4 className="text-sm font-bold text-white mt-1">{usuarioLogado.nome}</h4>
            <p className="text-[11px] text-indigo-400 font-semibold uppercase tracking-wider mt-0.5">{usuarioLogado.cargo}</p>
          </div>

          <button 
            onClick={handleLogout}
            className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Sair
          </button>
        </div>
      )}
    </>
  );
}