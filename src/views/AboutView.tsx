import React from 'react';
import { PageId } from '../types';
import { 
  History, 
  Briefcase, 
  Layers, 
  Award, 
  Target, 
  Compass, 
  ShieldCheck, 
  Building2, 
  Users,
  Ribbon
} from 'lucide-react';
import { ClientsAndReachSection } from '../components/ClientsAndReachSection';

interface AboutViewProps {
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Header - Minimalist & Institutional */}
      <section className="bg-[#004361] text-white py-14 sm:py-18 border-b border-[#335B8F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Nossa História
            </h1>
            <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              Conheça a trajetória, os valores e a estrutura operacional da GPI Sistemas a serviço da gestão pública.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container for Reading Flow */}
      <div className="space-y-20 py-16 sm:py-24">

        {/* 1. História da Empresa */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Texto */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361]">
                  <History className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                  História da Empresa
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                <p>
                  Em 16 de outubro de 2016, em Salvador, Bahia, se inicia a nossa história. Nascemos com o propósito de transformar a tecnologia em uma aliada da administração pública, oferecendo soluções capazes de auxiliar diante dos desafios e das necessidades do Setor Público.
                </p>
                <p>
                  Desde o início da nossa trajetória, identificamos a importância de oferecer ferramentas que integrem tecnologia, segurança, agilidade e praticidade, e que contribuam para a modernização dos processos e uma administração pública mais eficiente.
                </p>
                <p>
                  No decorrer dos anos, ampliamos a nossa atuação e consolidamos um portfólio de soluções voltadas para prefeituras, câmaras, autarquias, fundações e consórcios, abrangendo diferentes áreas da administração pública.
                </p>
                <p>
                  Nossa trajetória é marcada pela busca contínua por inovação e evolução, através do fornecimento de soluções tecnológicas que integrem diferentes áreas da administração pública. Dessa forma, contribuímos para que nossos clientes adotem novos métodos de organização, controle e acesso às informações necessárias para uma gestão pública moderna e eficiente.
                </p>
                <p>
                  Ao longo da nossa história, consolidamos a nossa atuação no fornecimento de soluções tecnológicas voltadas à modernização do setor público, entendendo que, gestão pública eficiente é o resultado de procedimentos bem estruturados e padronizados, envolvendo o esforço conjunto entre sistemas, processos e pessoas.
                </p>
              </div>
            </div>

            {/* Imagem Institucional */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80"
                  alt="Sede e Soluções Tecnológicas da GPI Sistemas"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-100" />
        </div>

        {/* 2. Experiência */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                Experiência
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Com o passar dos anos, acumulamos uma ampla experiência no fornecimento, implantação e aplicação de soluções voltadas às diferentes áreas do setor público. Essa experiência, nos permite compreender de forma abrangente os fluxos, as rotinas e as necessidades presentes no dia a dia de prefeituras, câmaras, autarquias, fundações e consórcios, considerando as particularidades de cada órgão e dos seus processos de gestão.
              </p>
              <p>
                A experiência que adquirimos, nos permite aprimorar a nossa prestação de serviços de acordo às normas e regulamentações que norteiam a administração pública, bem como suas constantes mudanças. Dessa forma, buscamos oferecer soluções em conformidade com as necessidades e regras do setor, permitindo a integração das informações, a padronização dos processos e maior segurança e controle no acompanhamento e na tomada de decisões da gestão pública.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-100" />
        </div>

        {/* 3. Atuação */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361]">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                Atuação
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Atuamos no fornecimento de soluções tecnológicas e serviços profissionais para a administração pública, ofertando um portfólio diverso, voltado ao atendimento eficiente das demandas de diversos órgãos públicos. Nossa atuação combina tecnologia, conhecimento técnico e experiência no setor público, buscando proporcionar maior integração entre as áreas, padronização dos processos, transparência das informações e eficiência da gestão.
              </p>
              <p>
                Nossas soluções abrangem as diferentes áreas da administração pública, incluindo planejamento, gestão, finanças, recursos humanos, saúde, educação, entre outras, considerando ainda as suas particularidades e as normas legais que orientam cada uma delas. Além das soluções de gestão, também contribuímos para iniciativas relacionadas às políticas públicas e à proteção social.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Especialização em Gestão Pública */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#004361]/5 via-slate-50 to-white rounded-2xl p-8 sm:p-12 border border-[#004361]/15 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004361] text-white flex items-center justify-center shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                Especialização em Gestão Pública
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-4xl pt-1">
              <p>
                Nossa atuação é pautada pelo conhecimento das particularidades que envolvem a gestão pública brasileira, considerando os seus processos, responsabilidades, controles e requisitos legais. Ao longo dos anos, desenvolvemos uma visão abrangente sobre o funcionamento dos órgãos públicos e sobre os desafios enfrentados pelos gestores na condução das suas atividades.
              </p>
              <p>
                A nossa experiência nos permite compreender que gestão pública exige mais do que recursos tecnológicos: requer organização, planejamento, transparência, controle e observância às normas que regulamentam a atuação. Por essa razão, as soluções e serviços que ofertamos, buscam auxiliar os gestores na organização das informações, no acompanhamento dos processos, no aprimoramento das rotinas e no cumprimento das obrigações legais e dos requisitos aplicáveis à gestão pública.
              </p>
              <p>
                O conhecimento que acumulamos sobre as diferentes realidades da administração pública, nos permite uma atuação mais próxima às necessidades de cada instituição, respeitando as suas especificidades e contribuindo para que a tecnologia esteja efetivamente a serviço da gestão e do interesse público.
              </p>
            </div>
          </div>
        </section>

        {/* 5, 6, 7. Missão, Visão e Valores (Três blocos lado a lado) */}
        <section className="bg-slate-50/70 py-16 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Missão */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#004361]/10 flex items-center justify-center mb-5 text-[#004361]">
                    <Target className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#004361] mb-3 tracking-tight">
                    Missão
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Oferecer solução tecnológica e serviços profissionais para atender com eficiência as demandas do mercado.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#004361]/10 flex items-center justify-center mb-5 text-[#004361]">
                    <Compass className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#004361] mb-3 tracking-tight">
                    Visão
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Conquistar posição de destaque no mercado de tecnologia e serviços.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#004361]/10 flex items-center justify-center mb-5 text-[#004361]">
                    <ShieldCheck className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#004361] mb-3 tracking-tight">
                    Valores
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Qualidade, Compromisso, Integridade, Inovação, Responsabilidade, Segurança e Ética.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. Estrutura e Capacidade Operacional */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361]">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                Estrutura e Capacidade Operacional
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                A nossa sede fica situada em Salvador, Bahia, possuindo uma estrutura integrada composta pelas áreas Administrativa, Comercial, Suporte Técnico e Financeira, e atuamos de maneira coordenada visando assegurar a eficiência dos processos internos e a qualidade dos serviços prestados aos nossos clientes.
              </p>
              <p>
                Oferecemos um atendimento próximo e eficiente, com suporte realizado de forma remota ou presencial, de acordo com as necessidades de cada cliente. Essa flexibilidade, aliada a uma abordagem técnica e humanizada, nos permite compreender as particularidades de cada instituição e proporcionar um acompanhamento mais adequado às suas demandas.
              </p>
              <p>
                O nosso programa de integridade é fundamentado em princípios de ética, governança, responsabilidade, inclusão e promoção da igualdade, contemplando instrumentos como Código de Ética e Regimento Interno, além da observância às legislações, normas e requisitos que permeiam e orientam a nossa atuação. Esse conjunto de práticas fortalece a nossa cultura organizacional e reafirma o nosso compromisso em atuar de forma íntegra, transparente, responsável e alinhadas às exigências aplicadas às nossas atividades.
              </p>

              {/* Destaque discreto para os Selos de Integridade e Diversidade */}
              <div className="bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-5 sm:p-6 my-6 shadow-2xs">
                <div className="flex items-start gap-3">
                  <Ribbon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                    Refletindo esse posicionamento, somos reconhecidos e certificados com o Selo da Diversidade Étnico-Racial, concedido pela Secretaria Municipal da Reparação de Salvador (SEMUR), e com o Selo Lilás, concedido pela Secretaria de Políticas para as Mulheres do Estado da Bahia (SPM).
                  </p>
                </div>
              </div>

              <p>
                Estamos presentes em diferentes regiões da Bahia, levando nossas soluções tecnológicas e serviços profissionais a diversas realidades da administração pública. Em cada lugar onde atuamos, buscamos manter a proximidade com as instituições que atendemos, compreendendo suas necessidades e contribuindo para uma gestão mais eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-100" />
        </div>

        {/* Nossos Clientes e Abrangência */}
        <ClientsAndReachSection />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-100" />
        </div>

        {/* 9. Equipe */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Texto */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361]">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                  Equipe
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                <p>
                  Nossa equipe é formada por profissionais comprometidos, qualificados e com ampla experiência nas diversas atividades que envolvem a prestação de serviços e o atendimento às necessidades da administração pública, incluindo migração, implantação, treinamento e suporte técnico. O conhecimento das regras de negócio e das particularidades de cada área permite que os nossos profissionais estejam preparados para prestar serviços técnicos especializados, com eficiência e proximidade junto aos clientes.
                </p>
                <p>
                  Investimos continuamente na capacitação e atualização da nossa equipe, por meio de programas e ações de desenvolvimento profissional, buscando acompanhar as transformações do setor e manter a qualidade dos nossos serviços.
                </p>
                <p>
                  O nosso quadro de colaboradores, reúne profissionais de diferentes áreas de conhecimento, incluindo Administradores, Contadores, Analistas de Sistemas, Especialistas em Tecnologia, Especialistas em Gestão Pública e Especialistas em Finanças Corporativas, formando uma equipe multidisciplinar capaz de integrar diferentes perspectivas e conhecimentos na execução das nossas atividades.
                </p>
                <p>
                  Como parte da nossa política de desenvolvimento de pessoas, mantemos um programa de estágio, proporcionando aos estudantes das áreas afins a oportunidade de vivenciar a prática profissional, desenvolver competências e ampliar a sua preparação para o mercado de trabalho.
                </p>
              </div>
            </div>

            {/* Imagem da Equipe */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Equipe Multidisciplinar da GPI Sistemas"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
              </div>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
};

