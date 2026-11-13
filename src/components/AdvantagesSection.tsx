import React from 'react';
import { 
  Handshake, 
  Award, 
  Network, 
  Cloud, 
  AppWindow, 
  Layout, 
  Lock, 
  Eye, 
  Headphones 
} from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  const diferenciais = [
    {
      id: 'parceria',
      title: 'Em parceria com o cliente',
      description: 'O nosso trabalho é realizado de forma conjunta e colaborativa.',
      icon: Handshake,
    },
    {
      id: 'credibilidade',
      title: 'Credibilidade',
      description: 'A nossa marca está associada a qualidade, pois atuamos no mercado com foco no cliente. Nosso compromisso é com a sua satisfação, o que nos permite crescer de forma sustentável.',
      icon: Award,
    },
    {
      id: 'integracao',
      title: 'Integração',
      description: 'A integração existente entre os vários módulos que permitem reproduzir as informações e dados de forma automática, evitando retrabalho, garantindo eficiência e eficácia.',
      icon: Network,
    },
    {
      id: 'inovacao',
      title: 'Inovação',
      description: 'Pode ser acessado via internet de qualquer parte do mundo com segurança do seu banco de dados armazenado em nuvem.',
      icon: Cloud,
    },
    {
      id: 'multi-telas',
      title: 'Multi telas',
      description: 'Permite o uso de várias telas ao mesmo tempo, de modo que o usuário visualize e alimente diversas informações de modo concomitante.',
      icon: AppWindow,
    },
    {
      id: 'facil-de-usar',
      title: 'Fácil de usar',
      description: 'As abas e telas são intuitivas e de fácil assimilação, contribuindo para que até mesmo usuários inexperientes utilizem com segurança.',
      icon: Layout,
    },
    {
      id: 'seguranca',
      title: 'Segurança',
      description: 'O acesso é feito através do cadastro de usuários e senha, por nível de competência e atribuições, registrando toda movimentação no LOG.',
      icon: Lock,
    },
    {
      id: 'transparencia',
      title: 'Transparência',
      description: 'De forma automática os dados e informações imputados são reproduzidas nos canais do Portal de Transparência e de Acesso à Informação, atendendo a legislação em vigor.',
      icon: Eye,
    },
    {
      id: 'suporte-tecnico',
      title: 'Suporte técnico',
      description: 'Nosso time é formado por profissionais multifacetados altamente qualificados, experientes e capazes de fazer implantação, treinamento e fornecer orientação do sistema e regras de negócio.',
      icon: Headphones,
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title - Clean, elegant, no subtitle or badges */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
            Diferenciais
          </h2>
        </div>

        {/* 9 Differentials Grid: Desktop 3 cols x 3 rows, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {diferenciais.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col h-full group hover:border-[#004361]/30"
              >
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-[#004361]/5 border border-[#004361]/10 flex items-center justify-center mb-5 group-hover:bg-[#004361] transition-colors duration-200 shrink-0">
                  <IconComponent className="w-5 h-5 text-[#004361] group-hover:text-white transition-colors duration-200 stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#004361] mb-2.5 tracking-tight">
                  {item.title}
                </h3>

                {/* Full Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed grow">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

