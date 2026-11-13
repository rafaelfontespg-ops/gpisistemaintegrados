import React, { useEffect, useState } from 'react';
import { PageId } from '../types';
import { 
  HeartHandshake, 
  ShieldCheck, 
  UserCheck, 
  Users, 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  FileText, 
  GraduationCap, 
  Store, 
  Network, 
  Scale, 
  HeartPulse, 
  Building2,
  Play,
  ArrowLeft,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Award,
  BookOpen,
  Activity,
  Layers,
  Smartphone,
  Eye,
  X,
  ChevronLeft
} from 'lucide-react';
import { SosAppScreensGallery } from '../components/SosAppScreensGallery';

interface SosMariaDaPenhaViewProps {
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: (solutionId?: string) => void;
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

export const SosMariaDaPenhaView: React.FC<SosMariaDaPenhaViewProps> = ({
  setActivePage,
  onOpenDemoModal
}) => {
  const [activeSection, setActiveSection] = useState<string>('apresentacao');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-16">
      
      {/* ==================================================
          HERO BANNER
         ================================================== */}
      <section className="bg-gradient-to-b from-[#00344D] via-[#004361] to-[#002B3F] text-white pt-12 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#EA4D82]/20 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="max-w-4xl mx-auto text-left space-y-6">
            {/* Logo Oficial SOS Maria da Penha */}
            <div className="inline-block bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-rose-100">
              <img 
                src="/logo_sosmariadapenha.webp" 
                alt="Logo Oficial SOS Maria da Penha" 
                className="h-14 sm:h-18 lg:h-20 w-auto object-contain"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Proteção às Mulheres <br className="hidden sm:inline" />
              <span className="text-[#EA4D82]">(SOS Maria da Penha)</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
              Um aplicativo voltado exclusivamente ao público feminino, gratuito, sigiloso e disponível 24 horas por dia, desenvolvido para apoiar e fortalecer a proteção de mulheres em situação de violência e integrar a rede de apoio pública.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenDemoModal('sos-maria-da-penha')}
                className="px-6 py-3.5 rounded-xl bg-[#EA4D82] hover:bg-[#d63b6f] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Apresentação</span>
              </button>

              <button
                onClick={() => scrollToSection('telas')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-[#EA4D82]" />
                <span>Ver Telas do App</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          STICKY NAVIGATION BAR
         ================================================== */}
      <nav className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-3 py-2 pr-4 border-r border-rose-100 shrink-0">
            <img 
              src="/logo_sosmariadapenha.webp" 
              alt="SOS Maria da Penha" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar text-xs sm:text-sm font-semibold text-slate-600 flex-1 pl-0 md:pl-4">
            {[
              { id: 'apresentacao', label: 'Apresentação' },
              { id: 'para-mulheres', label: 'Para as mulheres' },
              { id: 'para-instituicoes', label: 'Para as instituições' },
              { id: 'beneficios', label: 'Benefícios' },
              { id: 'funcionalidades', label: 'Funcionalidades' },
              { id: 'telas', label: 'Telas do App' },
              { id: 'video', label: 'Vídeo' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeSection === tab.id
                    ? 'bg-[#EA4D82] text-white shadow-2xs font-bold'
                    : 'hover:bg-rose-50 hover:text-[#EA4D82]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* ==================================================
            SEÇÃO 1: APRESENTAÇÃO
           ================================================== */}
        <section id="apresentacao" className="scroll-mt-32 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-rose-100 shadow-2xs space-y-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#EA4D82]"></div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] border-b border-slate-100 pb-3 flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#EA4D82] inline-block"></span>
              Apresentação
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Acreditamos que a construção de políticas públicas de proteção, conscientização e sensibilização, passa pelo compromisso conjunto entre o poder público, as empresas e toda a sociedade. Por essa razão, incorporamos esse compromisso à nossa política institucional, que se traduz em ações voltadas ao respeito, prevenção e valorização das mulheres. Isso é evidenciado através da certificação com o Selo Lilás pelo segundo biênio consecutivo, reforçando a nossa atuação na construção de ambientes mais seguros, conscientes e acolhedores.
              </p>
              <p>
                É nesse contexto que apresentamos o SOS Maria da Penha, um aplicativo voltado exclusivamente ao público feminino, desenvolvido para apoiar e fortalecer a proteção de mulheres em situação de violência e contribuir para a integração da rede de apoio.
              </p>
              <p>
                Gratuito, sigiloso e disponível 24 horas por dia, o aplicativo pode ser acessado por meio de dispositivos Android e iOS, reunindo recursos de informação, orientação, apoio e proteção em um único ambiente.
              </p>
              <p>
                Desenvolvido pela 3Tecnos Tecnologia e integra a nossa atuação em iniciativas que utilizam a tecnologia como instrumento de transformação social. Essa atuação também é fortalecida através do Termo de Cooperação Técnica que firmamos com o Tribunal de Justiça do Estado da Bahia (TJBA) e pela presença da solução em diferentes cidades do país.
              </p>
              <p>
                Mais do que uma ferramenta tecnológica, o SOS Maria da Penha busca ampliar o acesso à informação e aos mecanismos de proteção, contribuindo para o fortalecimento da rede de apoio às mulheres.
              </p>
            </div>
          </div>
        </section>


        {/* ==================================================
            SEÇÃO 2: PARA AS MULHERES
           ================================================== */}
        <section id="para-mulheres" className="scroll-mt-32 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-200/80 shadow-2xs space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EA4D82]"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#EA4D82]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361]">
                Para as mulheres
              </h2>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              O aplicativo oferece acesso gratuito e permanente a recursos de informação, apoio e proteção. Sua utilização é gratuita para as mulheres, enquanto determinados recursos dependem da integração com os serviços públicos disponíveis e da contratação pelo órgão responsável, conforme a estrutura de cada localidade.
            </p>

            {/* Visual Highlight Cards for Women */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#EA4D82] text-white flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004361] text-base">Botão do Pânico</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Acionamento imediato de guardiões com envio de localização em tempo real para auxílio em emergências.
                </p>
              </div>

              <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#EA4D82] text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004361] text-base">Rede de Apoio</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Localização rápida no mapa das delegacias, CRAS, CREAS e órgãos de apoio no município.
                </p>
              </div>

              <div className="bg-rose-50/50 rounded-xl p-5 border border-rose-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#EA4D82] text-white flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004361] text-base">Informação & Direitos</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Conteúdos educativos, podcasts, orientação sobre leis e canal direto para denúncias.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ==================================================
            SEÇÃO 3: PARA AS INSTITUIÇÕES
           ================================================== */}
        <section id="para-instituicoes" className="scroll-mt-32 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#004361]/20 shadow-2xs space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#004361]"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004361]/10 border border-[#004361]/15 flex items-center justify-center text-[#004361]">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361]">
                Para as instituições
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Para as instituições públicas, o SOS Maria da Penha oferece recursos que visam fortalecer e integrar a rede de apoio e proteção às mulheres, promovendo maior articulação entre serviços, profissionais e informações, bem como facilitar o acompanhamento das situações de violência.
              </p>
              <p>
                A contratação pelo poder público possibilita a integração do aplicativo com as estruturas de proteção disponíveis no município ou região, de acordo com a capacidade operacional de cada instituição. Entre as possibilidades de integração estão a Guarda Municipal, Polícia Militar, delegacias e demais serviços que compõem a rede pública de atendimento e proteção.
              </p>
              <p>
                A solução também disponibiliza recursos para apoiar o registro, a gestão e o acompanhamento das ocorrências, contribuindo para uma atuação mais organizada e integrada e para a geração de informações que podem subsidiar o planejamento e o aprimoramento das políticas públicas voltadas às mulheres.
              </p>
              <p>
                Conforme a contratação e a estrutura disponibilizada pelo órgão público, também podem ser oferecidos serviços especializados, como teleconsultas para orientação jurídica e psicológica, acesso a informações sobre políticas públicas, oportunidades de emprego, cursos e capacitações, além da integração com outros serviços da rede de proteção.
              </p>
              <p>
                Dessa forma, o SOS Maria da Penha aproxima tecnologia e poder público, ampliando os canais de acesso à informação e à proteção, fortalecendo a atuação das instituições e contribuindo para uma rede de atendimento mais integrada e que responda às necessidades das mulheres.
              </p>
            </div>

            {/* Interactive Institutional Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="bg-[#004361]/5 rounded-xl p-5 border border-[#004361]/15 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#004361] text-white flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004361] text-base">Gestão & Monitoramento</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Acompanhamento de ocorrências e dados estratégicos para fundamentar políticas públicas municipais.
                </p>
              </div>

              <div className="bg-[#004361]/5 rounded-xl p-5 border border-[#004361]/15 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#004361] text-white flex items-center justify-center font-bold">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004361] text-base">Resposta Mais Rápida</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Articulação direta com Guarda Municipal, Polícia Militar e órgãos municipais de segurança e assistência.
                </p>
              </div>

              <div className="bg-[#004361]/5 rounded-xl p-5 border border-[#004361]/15 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#004361] text-white flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#004361] text-base">Integração de Serviços</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Opções para suporte jurídico, psicológico, capacitações e acesso a programas de autonomia feminina.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ==================================================
            SEÇÃO 4: BENEFÍCIOS
           ================================================== */}
        <section id="beneficios" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#004361]">
              Benefícios
            </h2>
            <div className="w-12 h-1 bg-[#EA4D82] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Benefícios: Para as mulheres */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#EA4D82]" />
                <h3 className="text-xl font-bold text-[#004361]">
                  Para as mulheres
                </h3>
              </div>

              <ul className="space-y-3.5">
                {[
                  'Acesso gratuito e sigiloso;',
                  'Disponibilidade 24 horas por dia;',
                  'Facilidade de acesso a informações e serviços de apoio;',
                  'Centralização de diferentes recursos em um único aplicativo;',
                  'Facilitação do acesso à rede de proteção;',
                  'Acesso a conteúdo de orientação, prevenção e conscientização.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#EA4D82] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefícios: Para as instituições */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Users className="w-5 h-5 text-[#004361]" />
                <h3 className="text-xl font-bold text-[#004361]">
                  Para as instituições
                </h3>
              </div>

              <ul className="space-y-3.5">
                {[
                  'Fortalecimento e integração da rede de proteção;',
                  'Maior organização e acompanhamento das ocorrências;',
                  'Facilitação da articulação entre os serviços envolvidos;',
                  'Apoio à gestão das informações;',
                  'Subsídios para o planejamento de políticas públicas;',
                  'Ampliação dos canais de atendimento e proteção às mulheres.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#004361] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>


        {/* ==================================================
            SEÇÃO 5: FUNCIONALIDADES
           ================================================== */}
        <section id="funcionalidades" className="scroll-mt-32 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#004361]">
              Funcionalidades
            </h2>
            <div className="w-12 h-1 bg-[#EA4D82] mx-auto rounded-full"></div>
          </div>

          {/* Subgrupo 1: Recursos disponíveis gratuitamente */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#004361]">
                Recursos disponíveis gratuitamente
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Cadastro exclusivo para mulheres',
                  desc: 'Acesso seguro e direcionado aos recursos disponíveis no aplicativo.',
                  icon: <UserCheck className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Cadastro de até 3 guardiões',
                  desc: 'Permite cadastrar até três pessoas de confiança para serem acionadas em situações de necessidade.',
                  icon: <Users className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Botão do Pânico',
                  desc: 'Ao pressionar o botão por três segundos, a usuária pode acionar os guardiões cadastrados, que recebem sua localização para prestar auxílio ou acionar a rede de proteção.',
                  icon: <PhoneCall className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Mapa da Rede de Apoio',
                  desc: 'Facilita a localização dos serviços e instituições que integram a rede de proteção.',
                  icon: <MapPin className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Solicitação de Medidas Protetivas',
                  desc: 'Integração com a plataforma TJZela.',
                  icon: <FileText className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Informações e orientações',
                  desc: 'Acesso a conteúdo sobre direitos das mulheres, medidas protetivas, canais de denúncia e políticas públicas.',
                  icon: <ShieldCheck className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Cursos e podcasts',
                  desc: 'Conteúdos voltados à informação, conscientização, prevenção e fortalecimento da autonomia das mulheres.',
                  icon: <GraduationCap className="w-5 h-5 text-[#EA4D82]" />
                },
                {
                  title: 'Apoio e divulgação de empreendedoras',
                  desc: 'Espaço destinado à divulgação de iniciativas, produtos, serviços e oportunidades para mulheres empreendedoras.',
                  icon: <Store className="w-5 h-5 text-[#EA4D82]" />
                }
              ].map((feat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-[#EA4D82]/50 transition-colors">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                      {feat.icon}
                    </div>
                    <h4 className="font-bold text-[#004361] text-base leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subgrupo 2: Recursos integrados à rede de proteção */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#004361]"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#004361]">
                Recursos integrados à rede de proteção
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Integração com a rede pública de proteção',
                  desc: 'Possibilita a articulação com serviços como Guarda Municipal, Polícia Militar, delegacias e outros órgãos responsáveis pelo atendimento e proteção.',
                  icon: <Network className="w-5 h-5 text-[#004361]" />
                },
                {
                  title: 'Teleconsulta com aconselhamento jurídico',
                  desc: 'Serviço que pode ser disponibilizado conforme a estrutura e os serviços integrados à solução.',
                  icon: <Scale className="w-5 h-5 text-[#004361]" />
                },
                {
                  title: 'Teleconsulta com aconselhamento psicológico',
                  desc: 'Serviço sujeito à disponibilidade e à integração com profissionais ou serviços da rede.',
                  icon: <HeartPulse className="w-5 h-5 text-[#004361]" />
                },
                {
                  title: 'Acesso a serviços e políticas públicas',
                  desc: 'Disponibilização de informações, serviços e oportunidades oferecidos pelo poder público, conforme a estrutura e as iniciativas existentes em cada localidade.',
                  icon: <Building2 className="w-5 h-5 text-[#004361]" />
                }
              ].map((feat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-[#004361]/40 transition-colors">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#004361]/10 flex items-center justify-center shrink-0">
                      {feat.icon}
                    </div>
                    <h4 className="font-bold text-[#004361] text-base leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>


        {/* ==================================================
            SEÇÃO 6: TELAS E INTERFACE DO APLICATIVO
           ================================================== */}
        <section id="telas" className="scroll-mt-32 space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#004361]">
              Telas e Interface do SOS Maria da Penha
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Conheça a usabilidade simples, discreta e segura do aplicativo desenvolvida para o público feminino.
            </p>
          </div>

          <SosAppScreensGallery />
        </section>


        {/* ==================================================
            SEÇÃO 7: VÍDEO OFICIAL
           ================================================== */}
        <section id="video" className="scroll-mt-32 space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#004361]">
              Vídeo
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-[#EA4D82]">
              Conheça o SOS Maria da Penha
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Assista ao vídeo e conheça a solução, seus recursos e como a tecnologia pode contribuir para fortalecer a rede de proteção às mulheres.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-3 sm:p-4 rounded-2xl border border-rose-100 shadow-md">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black relative shadow-inner">
              <iframe
                src="https://www.youtube.com/embed/HhkWC0YnVHM"
                title="Apresentação SOS Maria da Penha"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pt-3 pb-1 text-center flex items-center justify-center gap-2 text-slate-600 text-xs sm:text-sm font-semibold">
              <Play className="w-4 h-4 text-[#EA4D82] fill-[#EA4D82]" />
              <span>Apresentação SOS Maria da Penha</span>
            </div>
          </div>
        </section>


        {/* ==================================================
            SEÇÃO 8: CTA FINAL NA LANDING PAGE
           ================================================== */}
        <section className="bg-gradient-to-br from-[#00344D] via-[#004361] to-[#002B3F] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#EA4D82]/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Traga o SOS Maria da Penha para o seu Município
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Apoie a rede de apoio local, aproxime o poder público das cidadãs e ofereça uma ferramenta tecnológica moderna e eficaz na proteção e valorização das mulheres.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenDemoModal('sos-maria-da-penha')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#EA4D82] hover:bg-[#d63b6f] text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Solicitar Apresentação Institucional
              </button>

              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-base transition-colors cursor-pointer"
              >
                Falar com a Nossa Equipe
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

