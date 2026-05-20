import { useState } from 'react';
import { Shield, Activity, Database, Cloud, Mail, Phone, MapPin, Key, RefreshCw, GitBranch, Share2 } from 'lucide-react';
import CardServico from './CardServico';

export default function HeroSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContatoSubmit = (e) => {
    e.preventDefault();
    const emailDestino = "securityhub@gmail.com";
    const assunto = encodeURIComponent(`Contato Comercial via Site - ${nome}`);
    const corpoEmail = encodeURIComponent(`Olá Equipe SecurityHub,\n\n${mensagem}\n\nAtenciosamente,\n${nome}`);
    window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${corpoEmail}`;
  };

  const listaServicos = [
    { id: "seguranca", title: "Pacote de Segurança Avançada", description: "Blindagem digital completa e isolamento de ameaças corporativas em tempo real.", icon: Shield, status: "Protegido", metrica: "Criptografia militar AES-256 ativa", vendas: ["Licença do FireWall de Próxima Geração (NGFW)", "Mitigação DDoS de até 500Gbps", "Isolamento de Perímetro"], vantagens: ["Prevenção contra vazamento de dados", "Conformidade LGPD", "Disponibilidade sob ataques"] },
    { id: "monitoramento", title: "Telemetria em Tempo Real Pro", description: "Acompanhamento instantâneo da saúde dos servidores com alertas inteligentes.", icon: Activity, status: "Estável", metrica: "Uptime da API: 100% nas últimas 24h", vendas: ["Dashboard unificado Web & Mobile", "Agentes de logs internos", "Alertas urgentes via WhatsApp/SMS"], vantagens: ["Identificação de gargalos ágil", "Histórico para auditoria técnica", "Redução no tempo de suporte"] },
    { id: "banco", title: "Clusters SQL Gerenciados", description: "Bancos de dados relacionais dedicados com rotinas automáticas de redundância.", icon: Database, status: "Sincronizado", metrica: "99.99% Uptime histórico", vendas: ["Clusters PostgreSQL/MySQL", "Backups automáticos de hora em hora", "Criptografia de dados em repouso"], vantagens: ["Restauração total garantida", "Máxima velocidade de leitura", "Expansão de armazenamento contínua"] },
    { id: "api", title: "Gateway de API em Nuvem", description: "Roteamento inteligente de requisições externas com cache dinâmico.", icon: Cloud, status: "Operacional", metrica: "Tráfego médio: 4.2k req/s", vendas: ["Roteador para microsserviços", "Módulo de cache em memória", "Limitador Rate Limiting por IP"], vantagens: ["Proteção contra sobrecarga", "Aceleração de dados de até 5x", "Integração segura de parceiros"] },
    { id: "firewall_routing", title: "Roteamento e Firewall de Rede", description: "Controle estrito de tráfego de rede perimetral e roteamento seguro.", icon: Share2, status: "Operacional", metrica: "Filtros de pacotes L7 atualizados", vendas: ["Mapeamento de sub-redes", "Filtro de pacotes por reputação", "Túneis VPN dedicados Matriz/Filial"], vantagens: ["Eliminação de pontos cegos", "Bloqueio imediato de invasões", "Acesso criptografado remoto"] },
    { id: "iam_access", title: "Gestão de Identidade e Acesso", description: "Controle centralizado de credenciais, permissões e autenticação em duas etapas.", icon: Key, status: "Protegido", metrica: "Autenticação MFA ativa", vendas: ["Gestão de papéis de acesso (RBAC)", "Autenticação Única Corporativa (SSO)", "Políticas de rotação de chaves"], vantagens: ["Acessos estritamente necessários", "Login unificado seguro", "Auditoria de ações administrativas"] },
    { id: "disaster_recovery", title: "Backup e Recuperação de Desastres", description: "Replicação total de ambiente em regiões distintas contra falhas físicas.", icon: RefreshCw, status: "Sincronizado", metrica: "Objetivo de Ponto de Recuperação: < 5min", vendas: ["Espelhamento contínuo de nuvem", "Plano de contingência em 1 clique", "Backups à prova de Ransomware"], vantagens: ["Retorno imediato em quedas globais", "Proteção de faturamento operacional", "Preservação absoluta do histórico"] },
    { id: "devops_pipeline", title: "Esteiras de Publicação Automatizada", description: "Esteira automatizada para entrega de código estável sem interrupções.", icon: GitBranch, status: "Estável", metrica: "Taxa de sucesso de publicação: 99.2%", vendas: ["Esteiras automáticas CI/CD", "Testes de segurança integrados", "Rollback automático de versões"], vantagens: ["Atualizações sem indisponibilidade", "Bloqueio preventivo de bugs", "Alta velocidade de deploy"] }
  ];

  const listaPlanos = [
    { nome: "Mensal", valor: "49,90", periodo: "/mês", destaque: false },
    { nome: "Trimestral", valor: "43,30", periodo: "/mês", destaque: true },
    { nome: "Anual", valor: "37,49", periodo: "/mês", destaque: false },
  ];

  return (
    <section className="relative pt-32 pb-24 bg-slate-50 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-1.5 text-xs text-orange-600 font-bold mb-8 shadow-sm">
          PORTFÓLIO CORPORATIVO ATIVO
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
          SecurityHub Console: <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
            Soluções Avançadas em Nuvem
          </span>
        </h1>
        <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
          Monitore clusters de servidores, blinde microsserviços de ponta a ponta e garanta a integridade operacional da sua arquitetura digital.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#servicos" onClick={(e) => handleScrollToSection(e, 'servicos')} className="w-full sm:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all">SOLUÇÕES CATALOGADAS</a>
          <a href="#contato" onClick={(e) => handleScrollToSection(e, 'contato')} className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 shadow-sm transition-all">ENTRE EM CONTATO</a>
        </div>

        {/* Módulos de Contratação */}
        <div id="servicos" className="mt-28 pt-12 border-t border-slate-200 text-left">
          <h2 className="text-2xl font-black text-slate-900 uppercase">MÓDULOS DE CONTRATAÇÃO</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {listaServicos.map((servico) => (
              <CardServico key={servico.id} title={servico.title} description={servico.description} icon={servico.icon} onClick={() => setSelectedService(servico)} />
            ))}
          </div>
        </div>

        {/* Seção de Planos */}
        <div id="planos" className="mt-28 pt-12 border-t border-slate-200 text-left">
          <h2 className="text-2xl font-black text-slate-900 uppercase">Planos de Assinatura</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {listaPlanos.map((plano, index) => (
              <div key={index} className={`p-8 rounded-2xl border-2 ${plano.destaque ? 'border-orange-500 bg-orange-50' : 'border-slate-200 bg-white'}`}>
                <h3 className="text-lg font-bold text-slate-900">{plano.nome}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-black text-slate-900">R$ {plano.valor}</span>
                  <span className="text-sm text-slate-500">{plano.periodo}</span>
                </div>
                {index > 0 && (
                  <p className="text-[10px] text-slate-400 mb-6 font-bold uppercase">Cobrança única antecipada</p>
                )}
                <a 
                  href="/login"
                  className={`block text-center w-full py-3 rounded-xl font-bold uppercase text-xs ${plano.destaque ? 'bg-orange-500 text-white' : 'bg-slate-900 text-white'}`}
                >
                  Selecionar Plano
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Contato */}
        <div id="contato" className="mt-28 pt-16 border-t border-slate-200 text-left max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase">Fale Conosco</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-orange-500" /><span>securityhub@gmail.com</span></div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-orange-500" /><span>+55 (32) 99999-9999</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-orange-500" /><span>Juiz de Fora, MG</span></div>
              </div>
            </div>
            <form onSubmit={handleContatoSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Seu Nome</label>
                <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mensagem</label>
                <textarea required rows="4" value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl uppercase text-sm">Enviar E-mail</button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Detalhes */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 p-8 w-full max-w-2xl rounded-2xl shadow-2xl relative">
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl font-bold">&times;</button>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">{selectedService.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-orange-600 uppercase mb-2">Produtos:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {selectedService.vendas.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-600 uppercase mb-2">Benefícios:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {selectedService.vantagens.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>
            <button onClick={() => setSelectedService(null)} className="w-full mt-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs uppercase">Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}