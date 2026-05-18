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
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContatoSubmit = (e) => {
    e.preventDefault();
    const emailDestino = "securityhub@gmail.com";
    const assunto = encodeURIComponent(`Contato Comercial via Site - ${nome}`);
    const corpoEmail = encodeURIComponent(`Olá Equipe SecurityHub,\n\n${mensagem}\n\nAtenciosamente,\n${nome}`);
    window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${corpoEmail}`;
  };

  // 📝 CATÁLOGO COM OS 8 SERVIÇOS TOTALMENTE EM PORTUGUÊS
  const listaServicos = [
    {
      id: "seguranca",
      title: "Pacote de Segurança Avançada",
      description: "Blindagem digital completa e isolamento de ameaças corporativas em tempo real.",
      icon: Shield,
      status: "Protegido",
      metrica: "Criptografia militar AES-256 ativa",
      vendas: [
        "Licença do FireWall de Próxima Geração (NGFW)",
        "Mitigação ativa contra ataques DDoS de até 500Gbps",
        "Módulo de Isolamento de Perímetro de Redes"
      ],
      vantagens: [
        "Prevenção total contra vazamento de dados corporativos",
        "Conformidade total e segurança jurídica perante a LGPD",
        "Disponibilidade do ecossistema sob ataques massivos"
      ]
    },
    {
      id: "monitoramento",
      title: "Telemetria em Tempo Real Pro",
      description: "Acompanhamento instantâneo da saúde dos servidores com alertas inteligentes.",
      icon: Activity,
      status: "Estável",
      metrica: "Uptime da API: 100% nas últimas 24h",
      vendas: [
        "Painel de controle unificado (Dashboard Web & Mobile)",
        "Agentes automatizados de coleta de logs internos",
        "Disparador de alertas urgentes via WhatsApp e SMS"
      ],
      vantagens: [
        "Identificação de gargalos antes de afetar o cliente final",
        "Histórico completo e detalhado para auditorias técnicas",
        "Redução no tempo de resposta da equipe de suporte"
      ]
    },
    {
      id: "banco",
      title: "Clusters SQL Gerenciados",
      description: "Bancos de dados relacionais dedicados com rotinas automáticas de redundância.",
      icon: Database,
      status: "Sincronizado",
      metrica: "99.99% Uptime histórico medido",
      vendas: [
        "Clusters SQL escaláveis (PostgreSQL ou MySQL dedicados)",
        "Rotina contínua de backup automatizado de hora em hora",
        "Proteção e criptografia de dados em repouso"
      ],
      vantagens: [
        "Garantia absoluta de restauração contra perda de dados",
        "Máxima velocidade de leitura em buscas complexas",
        "Expansão de armazenamento sem indisponibilidade"
      ]
    },
    {
      id: "api",
      title: "Gateway de API em Nuvem",
      description: "Roteamento inteligente de requisições externas com cache dinâmico.",
      icon: Cloud,
      status: "Operacional",
      metrica: "Tráfego médio equilibrado: 4.2k req/s",
      vendas: [
        "Roteador centralizado para requisições de microsserviços",
        "Módulo integrado de cache rápido em memória",
        "Limitador inteligente de acessos por IP (Controle de Taxa)"
      ],
      vantagens: [
        "Blindagem completa de servidores contra sobrecarga",
        "Velocidade de carregamento de dados até 5x superior",
        "Facilidade na integração de novas aplicações e parceiros"
      ]
    },
    {
      id: "firewall_routing",
      title: "Roteamento e Firewall de Rede",
      description: "Controle estrito de tráfego de rede perimetral e roteamento seguro.",
      icon: Share2,
      status: "Operacional",
      metrica: "Filtros de pacotes L7 atualizados",
      vendas: [
        "Mapeamento inteligente de rotas de sub-redes",
        "Filtro avançado de pacotes baseado em reputação de IP",
        "Túneis VPN dedicados para conexões matriz e filial"
      ],
      vantagens: [
        "Eliminação de pontos cegos na comunicação de rede",
        "Bloqueio imediato de conexões externas não autorizadas",
        "Conexão criptografada segura para colaboradores remotos"
      ]
    },
    {
      id: "iam_access",
      title: "Gestão de Identidade e Acesso",
      description: "Controle centralizado de credenciais, permissões e autenticação em duas etapas.",
      icon: Key,
      status: "Protegido",
      metrica: "Múltiplo Fator de Autenticação (MFA) ativo",
      vendas: [
        "Console central de gestão de usuários e papéis de acesso",
        "Módulo de Autenticação Única Corporativa (SSO)",
        "Políticas restritas de rotatividade de chaves de segurança"
      ],
      vantagens: [
        "Garantia de que cada usuário acessa apenas o necessário",
        "Facilidade de login unificado para ferramentas da empresa",
        "Histórico e trilha de auditoria para ações de administradores"
      ]
    },
    {
      id: "disaster_recovery",
      title: "Backup e Recuperação de Desastres",
      description: "Replicação total de ambiente em regiões distintas contra falhas físicas.",
      icon: RefreshCw,
      status: "Sincronizado",
      metrica: "Objetivo de Ponto de Recuperação: menos de 5min",
      vendas: [
        "Espelhamento contínuo de disco e volumes de nuvem",
        "Plano de contingência estruturado com ativação em 1 clique",
        "Backups imutáveis à prova de ataques de sequestro de dados"
      ],
      vantagens: [
        "Retorno imediato da operação em caso de queda global da nuvem",
        "Proteção do faturamento contra indisponibilidades severas",
        "Tranquilidade absoluta na preservação do histórico da empresa"
      ]
    },
    {
      id: "devops_pipeline",
      title: "Esteiras de Publicação Automatizada",
      description: "Esteira automatizada para entrega de código estável sem interrupções.",
      icon: GitBranch,
      status: "Estável",
      metrica: "Taxa de sucesso de publicação: 99.2%",
      vendas: [
        "Construção de esteiras automáticas de publicação de código",
        "Testes automatizados de segurança integrados ao fluxo",
        "Retorno automático à versão anterior em caso de erros"
      ],
      vantagens: [
        "Publicação de novas atualizações sem derrubar o site",
        "Garantia de que códigos com problemas não cheguem ao cliente",
        "Ganho expressivo de velocidade para a equipe de desenvolvimento"
      ]
    }
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50 font-sans text-slate-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-100 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-1.5 text-xs text-orange-600 font-bold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          PORTFÓLIO CORPORATIVO ATIVO
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
          SecurityHub Console: <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
            Soluções Avançadas em Nuvem
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Monitore clusters de servidores, blinde microsserviços de ponta a ponta e garanta a integridade operacional da sua arquitetura digital.
        </p>

        {/* Botões */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#servicos"
            onClick={(e) => handleScrollToSection(e, 'servicos')}
            className="w-full sm:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 text-center cursor-pointer"
          >
            SOLUÇÕES CATALOGADAS
          </a>
          <a
            href="#contato"
            onClick={(e) => handleScrollToSection(e, 'contato')}
            className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl transition-all duration-200 text-center cursor-pointer hover:bg-slate-100 shadow-sm"
          >
            ENTRE EM CONTATO
          </a>
        </div>

        {/* --- 📊 SEÇÃO DOS 8 CARDS PORTUGUÊS --- */}
        <div id="servicos" className="mt-28 pt-12 border-t border-slate-200 text-left">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wider">MÓDULOS DE CONTRATAÇÃO</h2>
            <p className="text-sm text-slate-400 mt-2">Clique em qualquer uma de nossas soluções para verificar os pacotes de itens inclusos e as vantagens exclusivas.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {listaServicos.map((servico) => (
              <CardServico
                key={servico.id}
                title={servico.title}
                description={servico.description}
                icon={servico.icon}
                onClick={() => setSelectedService(servico)}
              />
            ))}
          </div>
        </div>

        {/* --- ✉️ SEÇÃO DE CONTATOS --- */}
        <div id="contato" className="mt-28 pt-16 border-t border-slate-200 text-left max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase">Fale Conosco</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Tem alguma dúvida ou precisa de uma proposta personalizada? Envie uma mensagem direto para nossa engenharia.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>securityhub@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+55 (32) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Juiz de Fora, MG - UniAcademia</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContatoSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mensagem ou Dúvida</label>
                <textarea 
                  required
                  rows="4"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md text-sm uppercase tracking-wider"
              >
                Disparar E-mail para Engenharia
              </button>
            </form>

          </div>
        </div>

      </div>

      {/* --- 🖥️ MODAL CORPORATIVO PORTUGUÊS --- */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm font-sans">
          <div className="bg-white border border-slate-200 p-8 w-full max-w-2xl rounded-2xl shadow-2xl relative">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl p-1 leading-none"
            >
              &times;
            </button>

            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-wide">{selectedService.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Status operacional: <span className="text-emerald-600 font-bold">{selectedService.status}</span></p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Produtos Incluídos:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {selectedService.vendas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Benefícios Reais:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {selectedService.vantagens.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
              <span>MÉTRICA ATIVA:</span>
              <span className="text-slate-700 font-medium">{selectedService.metrica}</span>
            </div>

            <button 
              onClick={() => setSelectedService(null)}
              className="w-full mt-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest transition-all rounded-xl"
            >
              Fechar Catálogo
            </button>
          </div>
        </div>
      )}
    </section>
  );
}