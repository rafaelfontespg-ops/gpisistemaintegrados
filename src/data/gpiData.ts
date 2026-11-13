import { Solution, Metric, SuccessCase, BlogPost, Material, FaqItem, ClientLogo } from '../types';

export const GPI_METRICS: Metric[] = [
  {
    label: 'Anos de Experiência',
    value: '18+',
    number: 18,
    suffix: '+',
    description: 'Dedicação exclusiva ao desenvolvimento de software para a Gestão Pública.',
    iconName: 'Award'
  },
  {
    label: 'Municípios Atendidos',
    value: '120+',
    number: 120,
    suffix: '+',
    description: 'Prefeituras e Câmaras com gestão modernizada e dados integrados.',
    iconName: 'Building2'
  },
  {
    label: 'Clientes e Órgãos',
    value: '450+',
    number: 450,
    suffix: '+',
    description: 'Autarquias, Secretarias, Institutos de Previdência e Câmaras Municipais.',
    iconName: 'Users'
  },
  {
    label: 'Soluções Disponíveis',
    value: '15',
    number: 15,
    suffix: '',
    description: 'Sistemas especializados cobrindo todas as áreas da administração municipal.',
    iconName: 'Layers'
  },
  {
    label: 'Cidadãos Impactados',
    value: '3.5M+',
    number: 3,
    suffix: '.5M+',
    description: 'Atendimentos mais rápidos, transparentes e acessíveis para a população.',
    iconName: 'HeartHandshake'
  }
];

export const GPI_SOLUTIONS: Solution[] = [
  {
    id: 'planejamento',
    slug: 'planejamento',
    name: 'Planejamento',
    summary: 'O módulo de Planejamento é uma solução voltada para a gestão e organização do planejamento público, integrando PPA, LDO e LOA.',
    shortDescription: 'O módulo de Planejamento é uma solução voltada para a gestão e organização do planejamento público, integrando PPA, LDO e LOA.',
    fullDescription: 'O módulo de Planejamento é uma solução voltada para a gestão e organização do planejamento público. Ele permite estruturar e acompanhar as peças orçamentárias, desde o Plano Plurianual (PPA) até a elaboração da Lei de Diretrizes Orçamentárias (LDO) e da Lei Orçamentária Anual (LOA).',
    fullTextParagraphs: [
      'O módulo de Planejamento é uma solução voltada para a gestão e organização do planejamento público. Ele permite estruturar e acompanhar as peças orçamentárias, desde o Plano Plurianual (PPA) até a elaboração da Lei de Diretrizes Orçamentárias (LDO) e da Lei Orçamentária Anual (LOA). A solução integra informações importantes para apoiar a gestão pública, proporcionando uma visão mais clara das metas, objetivos e ações governamentais.'
    ],
    iconName: 'PieChart',
    category: 'gestao',
    categoryLabel: 'Planejamento Público',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Planejamento é uma solução voltada para a gestão e organização do planejamento público. Ele permite estruturar e acompanhar as peças orçamentárias, desde o Plano Plurianual (PPA) até a elaboração da Lei de Diretrizes Orçamentárias (LDO) e da Lei Orçamentária Anual (LOA). A solução integra informações importantes para apoiar a gestão pública, proporcionando uma visão mais clara das metas, objetivos e ações governamentais.'
    ],
    problemSolvedParagraphs: [
      'O módulo resolve a necessidade de centralizar e organizar as informações relacionadas ao planejamento governamental e às peças orçamentárias. Além disso, facilita o acompanhamento da execução das ações planejadas, permitindo relacionar programas, objetivos, indicadores e metas com a execução do orçamento e contribuindo para uma gestão mais eficiente das políticas públicas.'
    ],
    benefits: [
      'Maior organização das informações do planejamento público;',
      'Integração entre PPA, LDO e LOA;',
      'Melhor acompanhamento das metas e objetivos governamentais;',
      'Apoio à avaliação da eficiência das políticas públicas;',
      'Informações que auxiliam na tomada de decisão;',
      'Maior controle e monitoramento das ações governamentais;',
      'Visão integrada entre planejamento e execução orçamentária.'
    ],
    featuresIntro: 'O módulo permite trabalhar com as principais informações necessárias para a construção das peças de planejamento, incluindo:',
    features: [
      'Cadastro e elaboração do Plano Plurianual (PPA);',
      'Estruturação de Programas;',
      'Cadastro de Objetivos;',
      'Definição e acompanhamento de Indicadores;',
      'Cadastro de Metas;',
      'Organização das informações por Regionalização;',
      'Subsídio para elaboração da LDO;',
      'Subsídio para elaboração da LOA;',
      'Acompanhamento das ações governamentais;',
      'Integração das informações do planejamento com a execução orçamentária.'
    ],
    videoStatusText: '(Em preparação)',
    differentiators: [
      'Integração entre as principais peças do planejamento público: PPA, LDO e LOA;',
      'Estruturação completa de programas, objetivos, indicadores e metas;',
      'Possibilidade de acompanhamento e avaliação das ações governamentais;',
      'Integração com a execução orçamentária;',
      'Apoio à tomada de decisões por meio de dados e informações da gestão;',
      'Visão integrada das metas, objetivos e resultados das políticas públicas.'
    ],
    integrationsIntroParagraphs: [
      'O módulo de Planejamento interage diretamente com o módulo de Contabilidade, permitindo acompanhar a execução das despesas e os ingressos das receitas previstos na Lei Orçamentária Anual. Essa integração gera dados e informações que auxiliam no planejamento, na análise, no monitoramento das ações governamentais e na avaliação dos resultados alcançados.'
    ],
    faqs: [
      {
        question: 'O que é possível elaborar no módulo de Planejamento?',
        answer: 'O módulo auxilia na construção e organização das principais peças do planejamento público, como o PPA, a LDO e a LOA.'
      },
      {
        question: 'É possível cadastrar programas e metas?',
        answer: 'Sim. O módulo permite estruturar informações como programas, objetivos, indicadores, metas e regionalização.'
      },
      {
        question: 'O módulo possui integração com outros sistemas?',
        answer: 'Sim. O Planejamento interage com o módulo de Contabilidade, utilizando informações relacionadas à execução das despesas e às receitas previstas no orçamento.'
      },
      {
        question: 'Como o módulo auxilia na gestão pública?',
        answer: 'Por meio da organização e integração das informações, o módulo oferece suporte ao acompanhamento das metas e objetivos, à avaliação das políticas públicas e à tomada de decisão'
      }
    ]
  },
  {
    id: 'contabilidade-financas',
    slug: 'contabilidade-financas',
    name: 'Contabilidade e Finanças',
    summary: 'O módulo de Contabilidade e Finanças é uma solução completa para a gestão pública, desenvolvida para registrar, controlar e executar os atos e fatos administrativos, contábeis, orçamentários, patrimoniais e financeiros da entidade.',
    shortDescription: 'O módulo de Contabilidade e Finanças é uma solução completa para a gestão pública, desenvolvida para registrar, controlar e executar os atos e fatos administrativos, contábeis, orçamentários, patrimoniais e financeiros da entidade.',
    fullDescription: 'O módulo de Contabilidade e Finanças é uma solução completa para a gestão pública, desenvolvida para registrar, controlar e executar os atos e fatos administrativos, contábeis, orçamentários, patrimoniais e financeiros da entidade.',
    fullTextParagraphs: [
      'O módulo de Contabilidade e Finanças é uma solução completa para a gestão pública, desenvolvida para registrar, controlar e executar os atos e fatos administrativos, contábeis, orçamentários, patrimoniais e financeiros da entidade.',
      'A ferramenta centraliza informações essenciais para a gestão e promove maior segurança, agilidade e consistência nos processos, contribuindo para uma administração pública mais eficiente e para o correto atendimento às exigências legais e fiscais.'
    ],
    iconName: 'Receipt',
    category: 'financas',
    categoryLabel: 'Contabilidade & Finanças',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Contabilidade e Finanças é uma solução completa para a gestão pública, desenvolvida para registrar, controlar e executar os atos e fatos administrativos, contábeis, orçamentários, patrimoniais e financeiros da entidade.',
      'A ferramenta centraliza informações essenciais para a gestão e promove maior segurança, agilidade e consistência nos processos, contribuindo para uma administração pública mais eficiente e para o correto atendimento às exigências legais e fiscais.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar desafios relacionados ao controle das informações contábeis e financeiras, à execução orçamentária e ao cumprimento das exigências legais.',
      'Além disso, reduz a necessidade de controles manuais e ajuda a identificar inconsistências durante a execução dos procedimentos, prevenindo situações que possam gerar irregularidades e comprometimento no processo de prestação de contas.'
    ],
    benefits: [
      'Maior segurança e controle das informações contábeis e financeiras;',
      'Automação de procedimentos e controles;',
      'Agilidade na execução das rotinas administrativas;',
      'Integração entre os diversos módulos do sistema;',
      'Identificação de inconsistências e possíveis irregularidades;',
      'Maior confiabilidade na consolidação das informações;',
      'Apoio ao processo de prestação de contas;',
      'Atualizações em tempo real conforme novas regras e exigências;',
      'Apoio ao cumprimento dos limites e controles legais;',
      'Transparência das informações relacionadas às receitas e despesas públicas.'
    ],
    featuresIntro: 'O módulo oferece recursos para apoiar as principais rotinas contábeis, orçamentárias, patrimoniais e financeiras, incluindo:',
    features: [
      'Registro e escrituração dos atos e fatos administrativos e contábeis;',
      'Controle da execução orçamentária;',
      'Gestão das informações patrimoniais e financeiras;',
      'Processamento de informações gerenciais;',
      'Parametrização de controles e limites legais;',
      'Consolidação das informações das entidades descentralizadas;',
      'Parametrização da periodicidade de fechamento;',
      'Identificação automática de inconsistências durante as rotinas;',
      'Alertas sobre contratos e aditivos vencidos ou sem saldo;',
      'Verificação de patrimônios ainda não incorporados;',
      'Identificação de materiais de consumo sem entrada no estoque;',
      'Alertas sobre notas fiscais sem processos administrativos;',
      'Automação de procedimentos financeiros;',
      'Gestão e controle de pagamentos;',
      'Possibilidade de integração com pagamentos via internet banking.',
      'Exportação para o SIOPE',
      'Exportação para o SIOPS',
      'Exportação para o SICONFI – Matriz de Saldos Contábeis (MSC)',
      'Exportação para o Tribunal de Contas (SIGA)',
      'Geração de relatórios fiscais (RREO e RGF)',
      'Integração com o EFD-Reinf',
      'Integração com o E-Social',
      'Realização de Conciliação Automática dos lançamentos bancários',
      'Controle dos Repasses concedidos e recebidos entre as entidades'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo é a integração entre as diversas áreas, permitindo que informações geradas em outros módulos sejam utilizadas de forma integrada durante a execução contábil e financeira.',
      'Além disso, a solução permite a criação de alertas automáticos para identificar possíveis inconsistências ou ausências que possam configurar irregularidades, proporcionando maior segurança durante a execução das rotinas.',
      'Outro diferencial é a atualização das regras e exigências aplicáveis à gestão pública, contribuindo para que a entidade mantenha suas rotinas alinhadas às normas vigentes.'
    ],
    integrationsIntroParagraphs: [
      'O módulo possui integração com diferentes áreas, permitindo o compartilhamento e a consolidação das informações.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'Gestão Financeira, proporcionando maior agilidade e segurança nos procedimentos financeiros;',
      'Internet Banking, possibilitando a realização de pagamentos de forma integrada;',
      'Contratos, permitindo a identificação de contratos e aditivos vencidos ou sem saldo;',
      'Patrimônio, auxiliando no acompanhamento da incorporação dos bens;',
      'Almoxarifado, permitindo verificar materiais de consumo sem entrada no estoque;',
      'Processos Administrativos, possibilitando a identificação de notas fiscais sem o respectivo processo;',
      'Transparência Pública, permitindo a divulgação detalhada das informações de receitas e despesas.'
    ],
    faqs: [
      {
        question: 'Quais informações são controladas pelo módulo?',
        answer: 'O módulo contempla informações relacionadas aos aspectos contábil, orçamentário, patrimonial e financeiro da entidade.'
      },
      {
        question: 'O sistema identifica possíveis inconsistências?',
        answer: 'Sim. Por meio de parametrizações e integrações, o sistema pode alertar sobre situações como contratos vencidos ou sem saldo, patrimônio não incorporado, materiais sem entrada no estoque e outras inconsistências.'
      },
      {
        question: 'É possível realizar pagamentos integrados ao sistema?',
        answer: 'O módulo possui interface com a gestão financeira e contempla a automação de procedimentos, incluindo a possibilidade de integração para pagamentos via internet banking.'
      },
      {
        question: 'O sistema acompanha as exigências legais?',
        answer: 'Sim. A solução é atualizada conforme novas regras e está estruturada para atender aos controles e limites estabelecidos pela legislação e demais normas aplicáveis à gestão pública.'
      },
      {
        question: 'É possível definir períodos de fechamento?',
        answer: 'Sim. Dentro das permissões de parametrização, é possível definir a periodicidade do fechamento.'
      },
      {
        question: 'As informações podem ser divulgadas para a população?',
        answer: 'Sim. Por meio da integração com a ferramenta de Transparência Pública, é possível disponibilizar informações detalhadas sobre receitas e despesas, permitindo o acompanhamento da execução orçamentária e financeira.'
      }
    ]
  },
  {
    id: 'almoxarifado',
    slug: 'almoxarifado',
    name: 'Almoxarifado',
    summary: 'O módulo de Almoxarifado é uma solução desenvolvida para apoiar a gestão pública no controle, acompanhamento e organização dos estoques de materiais e suprimentos.',
    shortDescription: 'O módulo de Almoxarifado é uma solução desenvolvida para apoiar a gestão pública no controle, acompanhamento e organização dos estoques de materiais e suprimentos.',
    fullDescription: 'O módulo de Almoxarifado é uma solução desenvolvida para apoiar a gestão pública no controle, acompanhamento e organização dos estoques de materiais e suprimentos.',
    fullTextParagraphs: [
      'O módulo de Almoxarifado é uma solução desenvolvida para apoiar a gestão pública no controle, acompanhamento e organização dos estoques de materiais e suprimentos.',
      'A ferramenta possibilita o gerenciamento das rotinas de entrada, movimentação, saída e inventário dos itens, permitindo que a administração mantenha o controle adequado dos recursos materiais utilizados pelas diversas unidades e setores da entidade.'
    ],
    iconName: 'Package',
    category: 'gestao',
    categoryLabel: 'Almoxarifado & Estoque',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Almoxarifado é uma solução desenvolvida para apoiar a gestão pública no controle, acompanhamento e organização dos estoques de materiais e suprimentos.',
      'A ferramenta possibilita o gerenciamento das rotinas de entrada, movimentação, saída e inventário dos itens, permitindo que a administração mantenha o controle adequado dos recursos materiais utilizados pelas diversas unidades e setores da entidade.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar desafios relacionados ao controle de estoque, como a falta de visibilidade sobre saldos disponíveis, dificuldades no acompanhamento de saídas, perdas por vencimento e falhas na organização dos suprimentos.',
      'Além disso, reduz a dependência de controles manuais e ajuda a evitar tanto o desabastecimento de itens essenciais quanto o acúmulo excessivo de materiais, promovendo uma gestão de estoque mais eficiente e transparente.'
    ],
    benefits: [
      'Maior controle sobre o fluxo de entrada e saída de materiais;',
      'Rastreabilidade das movimentações por unidade e setor;',
      'Redução de perdas de itens por prazo de validade;',
      'Apoio ao planejamento de compras e reposição de estoque;',
      'Organização do catálogo de materiais da entidade;',
      'Agilidade no atendimento às requisições dos setores;',
      'Facilidade na realização de inventários periódicos;',
      'Integração das informações do estoque com a gestão contábil;',
      'Transparência no uso dos recursos materiais da administração pública.'
    ],
    featuresIntro: 'O módulo oferece recursos para apoiar a gestão de estoque em suas diferentes etapas, incluindo:',
    features: [
      'Cadastro e organização do catálogo de materiais;',
      'Ocultação de produtos sem saldo na lista de itens ativos;',
      'Cadastro de sub-almoxarifados para controle individualizado por setor;',
      'Emissão de mapa de estoque com saldo por setor e consolidado;',
      'Parametrização de estoque mínimo para auxílio na reposição;',
      'Alertas para produtos próximos ao vencimento, vencidos ou em estoque mínimo;',
      'Gestão de entrada de materiais adquiridos em embalagens coletivas (fardos, caixas) com conversão para saídas fracionadas em unidades;',
      'Parametrização e cadastro de itens para contagem e realização de inventário;',
      'Registro e acompanhamento de requisições e atendimentos de materiais;',
      'Integração com o módulo de Contabilidade para apoio ao fechamento mensal e mensuração financeira do estoque.'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo de Almoxarifado é a flexibilidade na organização do estoque, permitindo a criação de sub-almoxarifados que atendam às especificidades de cada setor da administração.',
      'Outro diferencial é a presença de mecanismos automáticos de alerta e controle, como o monitoramento do estoque mínimo e de prazos de validade, que auxiliam na tomada de decisões antes que ocorra a falta ou a perda de materiais.',
      'Além disso, a integração com a Contabilidade contribui para a consistência entre o saldo físico do estoque e o registro contábil da entidade.'
    ],
    integrationsIntroParagraphs: [
      'O módulo de Almoxarifado possui integração com outras áreas da administração pública, permitindo o compartilhamento de dados essenciais para a gestão.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'Contabilidade e Finanças, auxiliando no fechamento de inventário e no acompanhamento dos valores liquidados;',
      'Compras e Licitações, fornecendo informações para o planejamento de novos pedidos;',
      'Unidades e Setores da Entidade, permitindo o envio e atendimento de requisições de materiais.'
    ],
    faqs: [
      {
        question: 'Como o módulo auxilia na organização dos materiais de diferentes setores?',
        answer: 'O sistema permite o cadastro de sub-almoxarifados, possibilitando a divisão do estoque por setores específicos, com visualização de mapas de estoque individuais ou consolidados.'
      },
      {
        question: 'O sistema alerta quando um produto está prestes a vencer?',
        answer: 'Sim. A ferramenta possui alertas automáticos para informar sobre produtos próximos do vencimento, com prazo vencido ou atingindo o limite de estoque mínimo.'
      },
      {
        question: 'É possível cadastrar materiais comprados em caixas ou fardos e distribuir em unidades?',
        answer: 'Sim. O módulo conta com funcionalidade para ajustar a entrada de compras coletivas e permitir a saída fracionada em unidades.'
      },
      {
        question: 'O módulo apoia a realização de inventários?',
        answer: 'Sim. A solução oferece parâmetros e cadastros específicos para apoiar a contagem física e a conciliação do inventário de materiais.'
      },
      {
        question: 'As informações do estoque podem ser integradas à contabilidade?',
        answer: 'Sim. O módulo integra-se com a Contabilidade para apoiar o fechamento mensal e garantir a correta mensuração financeira do estoque.'
      }
    ]
  },
  {
    id: 'frota',
    slug: 'frota',
    name: 'Frota',
    summary: 'O módulo Frota é uma solução desenvolvida para organizar, controlar e acompanhar a gestão dos veículos, máquinas e motoristas da Administração Pública.',
    shortDescription: 'O módulo Frota é uma solução desenvolvida para organizar, controlar e acompanhar a gestão dos veículos, máquinas e motoristas da Administração Pública.',
    fullDescription: 'O módulo Frota é uma solução desenvolvida para organizar, controlar e acompanhar a gestão dos veículos, máquinas e motoristas da Administração Pública.',
    fullTextParagraphs: [
      'O módulo Frota é uma solução desenvolvida para organizar, controlar e acompanhar a gestão dos veículos, máquinas e motoristas da Administração Pública.',
      'A ferramenta permite o registro e o monitoramento das rotinas operacionais, manutenções, abastecimentos e custos relacionados aos transportes, proporcionando maior controle administrativo e eficiência na utilização dos recursos públicos.'
    ],
    iconName: 'Truck',
    category: 'gestao',
    categoryLabel: 'Gestão de Frota',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo Frota é uma solução desenvolvida para organizar, controlar e acompanhar a gestão dos veículos, máquinas e motoristas da Administração Pública.',
      'A ferramenta permite o registro e o monitoramento das rotinas operacionais, manutenções, abastecimentos e custos relacionados aos transportes, proporcionando maior controle administrativo e eficiência na utilização dos recursos públicos.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar desafios na gestão de transportes, como a falta de controle sobre gastos com combustíveis, dificuldades no acompanhamento de manutenções preventivas, desorganização no agendamento de viagens e falta de rastreabilidade do uso dos veículos.',
      'Além disso, reduz falhas causadas por controles manuais, ajuda a prevenir desgastes prematuros da frota e assegura o cumprimento de rotinas administrativas e exigências de prestação de contas.'
    ],
    benefits: [
      'Maior controle sobre o uso, deslocamentos e destinação dos veículos;',
      'Acompanhamento detalhado dos custos com manutenção e abastecimento;',
      'Redução de custos por meio do controle e planejamento de manutenções;',
      'Organização do histórico de veículos, máquinas e motoristas;',
      'Agilidade no agendamento de viagens e atendimento às demandas dos setores;',
      'Facilidade na gestão de multas, seguros e documentações da frota;',
      'Rastreabilidade do consumo de combustível e quilometragem rodada;',
      'Apoio ao cumprimento das normas e rotinas de fiscalização do Tribunal de Contas;',
      'Transparência na utilização dos bens de transporte públicos.'
    ],
    featuresIntro: 'O módulo oferece recursos para apoiar a gestão completa da frota pública, incluindo:',
    features: [
      'Cadastro e organização do histórico de veículos, máquinas e motoristas;',
      'Controle de abastecimentos de combustível com acompanhamento de consumo;',
      'Registro e gestão das despesas com manutenções preventivas e corretivas;',
      'Agendamento e controle de viagens de veículos e máquinas;',
      'Monitoramento e agendamento de manutenções preventivas;',
      'Controle de infrações e multas de trânsito vinculadas aos condutores e veículos;',
      'Gestão do uso e vida útil de pneus;',
      'Cadastro, controle e acompanhamento de apólices e vigências de seguros;',
      'Emissão de relatórios operacionais, financeiros e de desempenho da frota;',
      'Estruturação de dados no formato exigido para exportação ao SIGA do Tribunal de Contas dos Municípios (TCM/BA).'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo Frota é a sua capacidade de centralizar todas as rotinas do setor de transportes em uma única plataforma, desde a saída do veículo até o controle de peças, pneus e seguros.',
      'Outro diferencial importante é a adequação completa do sistema às exigências e ao formato do SIGA (TCM/BA), facilitando o envio de dados e o cumprimento das obrigações de transparência e prestação de contas.',
      'Além disso, o planejamento de manutenções e o acompanhamento preventivo ajudam a evitar paradas não programadas e custos elevados na gestão da frota.'
    ],
    integrationsIntroParagraphs: [
      'O módulo Frota integra-se com outras áreas da gestão pública para garantir a consistência das informações e o acompanhamento dos custos.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'Contabilidade e Finanças, permitindo o acompanhamento do impacto financeiro das despesas com veículos;',
      'Almoxarifado, para controle de peças, lubrificantes e insumos utilizados na manutenção da frota;',
      'Gerenciamento de Contratos, para acompanhamento de contratos de fornecimento de combustível, manutenção e seguros;',
      'Setores e Unidades da Administração, para agendamento e atendimento de solicitações de transporte.'
    ],
    faqs: [
      {
        question: 'O módulo permite controlar os gastos com combustível de cada veículo?',
        answer: 'Sim. A ferramenta possibilita o registro detalhado dos abastecimentos, permitindo acompanhar o consumo e o desempenho por veículo.'
      },
      {
        question: 'É possível agendar manutenções preventivas no sistema?',
        answer: 'Sim. O módulo conta com recursos para agendar e acompanhar manutenções preventivas, auxiliando na conservação e no uso seguro da frota.'
      },
      {
        question: 'O sistema ajuda na gestão de motoristas e infrações?',
        answer: 'Sim. É possível manter o histórico dos condutores, associar veículos aos motoristas e controlar o registro de multas de trânsito.'
      },
      {
        question: 'O módulo controla a vigência de seguros e documentações?',
        answer: 'Sim. O sistema permite o cadastro e acompanhamento das apólices de seguro, ajudando a identificar prazos de vencimento.'
      },
      {
        question: 'O módulo atende às exigências do TCM/BA?',
        answer: 'Sim. O módulo Frota está totalmente adequado ao layout e às regras do SIGA (TCM/BA), permitindo a exportação das informações para prestação de contas.'
      }
    ]
  },
  {
    id: 'patrimonio',
    slug: 'patrimonio',
    name: 'Patrimônio',
    summary: 'O módulo Patrimônio é uma solução desenvolvida para administrar, controlar e acompanhar a movimentação física e financeira dos bens móveis e imóveis da Administração Pública.',
    shortDescription: 'O módulo Patrimônio é uma solução desenvolvida para administrar, controlar e acompanhar a movimentação física e financeira dos bens móveis e imóveis da Administração Pública.',
    fullDescription: 'O módulo Patrimônio é uma solução desenvolvida para administrar, controlar e acompanhar a movimentação física e financeira dos bens móveis e imóveis da Administração Pública.',
    fullTextParagraphs: [
      'O módulo Patrimônio é uma solução desenvolvida para administrar, controlar e acompanhar a movimentação física e financeira dos bens móveis e imóveis da Administração Pública.',
      'A ferramenta automatiza o registro de incorporações, movimentações, depreciações, reavaliações e baixas de bens, garantindo a atualização das informações patrimoniais e a consistência dos dados apresentados no balanço da entidade.'
    ],
    iconName: 'Building',
    category: 'gestao',
    categoryLabel: 'Gestão Patrimonial',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo Patrimônio é uma solução desenvolvida para administrar, controlar e acompanhar a movimentação física e financeira dos bens móveis e imóveis da Administração Pública.',
      'A ferramenta automatiza o registro de incorporações, movimentações, depreciações, reavaliações e baixas de bens, garantindo a atualização das informações patrimoniais e a consistência dos dados apresentados no balanço da entidade.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar desafios no controle do patrimônio público, como a falta de localização precisa dos bens, a dificuldade no acompanhamento da depreciação, falhas na identificação de responsáveis e insegurança no processo de inventário.',
      'Além disso, reduz inconsistências entre a situação física dos bens e os registros contábeis, prevenindo irregularidades na prestação de contas e assegurando a conformidade com las normas de contabilidade aplicadas ao setor público.'
    ],
    benefits: [
      'Controle detalhado e atualizado dos bens móveis, imóveis e obras públicas;',
      'Automação dos cálculos de depreciação, exaustão e amortização;',
      'Localização precisa dos bens por setor, unidade e responsável;',
      'Emissão de termos de responsabilidade e de transferência de bens;',
      'Agilidade e segurança na realização de inventários patrimoniais;',
      'Apoio ao trabalho de comissões de avaliação e reavaliação de bens;',
      'Consistência nas informações apresentadas no Balanço Patrimonial;',
      'Adequação às normas legais e exigências dos órgãos de fiscalização;',
      'Transparência e rastreabilidade sobre a conservação e destinação do patrimônio público.'
    ],
    featuresIntro: 'O módulo oferece recursos para apoiar a gestão completa do patrimônio público, incluindo:',
    features: [
      'Cadastro e controle de bens móveis, imóveis e obras públicas;',
      'Registro de movimentações físicas e transferências de bens entre setores;',
      'Cálculo automático de depreciação, exaustão e amortização de bens;',
      'Emissão de termos de responsabilidade e certificados de bens adquiridos no exercício;',
      'Controle de obras públicas e suas respectivas medições;',
      'Registro de fenômenos contábeis patrimoniais, como reavaliações e reajustes de valor;',
      'Apoio ao trabalho de comissões cadastradas para avaliação de bens;',
      'Processamento de baixas patrimoniais com diferentes enquadramentos legais;',
      'Realização e acompanhamento de fechamentos mensais com relatórios gerenciais;',
      'Exportação de dados e relatórios no formato exigido pelo SIGA do Tribunal de Contas dos Municípios (TCM/BA).'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo Patrimônio é a automação dos cálculos contábeis patrimoniais, permitindo que depreciações, amortizações e exaustões sejam refletidas com precisão.',
      'Outro diferencial importante é o suporte completo às rotinas administrativas do patrimônio, incluindo a emissão de termos de responsabilidade, relatórios para comissões de avaliação e controle de obras em andamento.',
      'Além disso, a integração direta com o módulo de Contabilidade e a adequação ao layout do SIGA (TCM/BA) asseguram tranquilidade na prestação de contas e na consolidação das demonstrações contábeis.'
    ],
    integrationsIntroParagraphs: [
      'O módulo Patrimônio possui integração com outras áreas da gestão pública para garantir a sincronia entre a situação física e a contábil dos bens.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'Contabilidade e Finanças, permitindo a atualização automática do Balanço Patrimonial e do registro contábil dos bens;',
      'Almoxarifado, auxiliando na verificação de bens que devem ser incorporados ao patrimônio a partir do estoque;',
      'Gerenciamento de Contratos e Obras, acompanhando aquisições de bens e medições de obras públicas;',
      'Transparência Pública, permitindo a disponibilização de informações patrimoniais exigidas por lei.'
    ],
    faqs: [
      {
        question: 'O módulo calcula a depreciação dos bens automaticamente?',
        answer: 'Sim. O sistema realiza o cálculo automático de depreciação, exaustão e amortização, mantendo os valores atualizados para a contabilidade.'
      },
      {
        question: 'É possível emitir Termo de Responsabilidade para os setores?',
        answer: 'Sim. O módulo gera termos de responsabilidade e transferências, identificando os setores e servidores responsáveis pela guarda dos bens.'
      },
      {
        question: 'O sistema permite controlar obras públicas e imóveis?',
        answer: 'Sim. A ferramenta conta com recursos para registro de obras, medições e acompanhamento de bens imóveis da entidade.'
      },
      {
        question: 'O módulo apoia os trabalhos das comissões de inventário e reavaliação?',
        answer: 'Sim. É possível cadastrar comissões e registrar laudos de reavaliação ou processos de baixa patrimonial com suporte a relatórios.'
      },
      {
        question: 'As informações patrimoniais são integradas à contabilidade e ao TCM/BA?',
        answer: 'Sim. O módulo integra-se com a Contabilidade para atualização do balanço e está preparado para exportação ao SIGA (TCM/BA).'
      }
    ]
  },
  {
    id: 'recursos-humanos',
    slug: 'recursos-humanos',
    name: 'Recursos Humanos e Folha de Pagamento',
    summary: 'O módulo de Recursos Humanos e Folha de Pagamento é uma solução desenvolvida para otimizar a gestão de servidores, eventos remuneratórios e obrigações da Administração Pública.',
    shortDescription: 'O módulo de Recursos Humanos e Folha de Pagamento é uma solução desenvolvida para otimizar a gestão de servidores, eventos remuneratórios e obrigações da Administração Pública.',
    fullDescription: 'O módulo de Recursos Humanos e Folha de Pagamento é uma solução desenvolvida para otimizar a gestão de servidores, eventos remuneratórios e obrigações da Administração Pública.',
    fullTextParagraphs: [
      'O módulo de Recursos Humanos e Folha de Pagamento trata-se de uma ferramenta de gestão, atualizada com as principais funcionalidades que otimizam as rotinas do setor de recursos humanos integrando e processando dados e informações cadastrais, eventos remuneratórios e periódicos dos servidores com os mais diversos vínculos, bem como prestadores de serviços, pensionistas e aposentados, atendendo a legislação. Estando associada ao Portal do Servidor fornece um conjunto de funções e permissões que possibilitam acesso remoto, a serviços como: contracheque online com a margem de consignação, impressão de ficha financeira, informe de rendimento, entre outros.',
      'Com suas funcionalidades automáticas permitem a execução do plano de carreira previamente cadastrado, bem como o tempo de contribuição para averbação do tempo de serviço, gerencia as pensões alimentícias, realiza férias e afastamentos coletivos, importa relação de consignações bancárias na folha de pagamento, realiza simulação de aposentadoria, possibilita a conferência e controle das movimentações periódicas antes do fechamento mensal (checklist), integração da folha com o módulo de contabilidade, exportação de dados para os sistemas governamentais garantindo a migração dos dados com segurança, além de possuir uma vasta lista de relatórios gerenciais. Além do que o sistema está adequado ao layout do siga realizando as exportações com segurança e agilidade. Atendendo a transparência pública, o sistema possibilita que o cidadão acesse os dados e informações dos servidores, desde que estejam permitidas legalmente. Esse acesso está condicionado também à contratação pela entidade, do módulo Portal de Acesso a Informação.'
    ],
    youtubeUrlPlaceholder: 'YOUTUBE_URL_RECURSOS_HUMANOS',
    demoVideoUrl: 'https://www.youtube.com/embed/YOUTUBE_URL_RECURSOS_HUMANOS',
    iconName: 'Users',
    category: 'gestao',
    categoryLabel: 'Recursos Humanos',
    keyBenefit: 'Automação da folha, planos de carreira, margem de consignação e Portal do Servidor.',

    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Recursos Humanos e Folha de Pagamento trata-se de uma ferramenta de gestão, atualizada com as principais funcionalidades que otimizam as rotinas do setor de recursos humanos integrando e processando dados e informações cadastrais, eventos remuneratórios e periódicos dos servidores com os mais diversos vínculos, bem como prestadores de serviços, pensionistas e aposentados, atendendo a legislação. Estando associada ao Portal do Servidor fornece um conjunto de funções e permissões que possibilitam acesso remoto, a serviços como: contracheque online com a margem de consignação, impressão de ficha financeira, informe de rendimento, entre outros.',
      'Com suas funcionalidades automáticas permitem a execução do plano de carreira previamente cadastrado, bem como o tempo de contribuição para averbação do tempo de serviço, gerencia as pensões alimentícias, realiza férias e afastamentos coletivos, importa relação de consignações bancárias na folha de pagamento, realiza simulação de aposentadoria, possibilita a conferência e controle das movimentações periódicas antes do fechamento mensal (checklist), integração da folha com o módulo de contabilidade, exportação de dados para os sistemas governamentais garantindo a migração dos dados com segurança, além de possuir uma vasta lista de relatórios gerenciais. Além do que o sistema está adequado ao layout do siga realizando as exportações com segurança e agilidade. Atendendo a transparência pública, o sistema possibilita que o cidadão acesse os dados e informações dos servidores, desde que estejam permitidas legalmente. Esse acesso está condicionado também à contratação pela entidade, do módulo Portal de Acesso a Informação.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar desafios no gerenciamento de pessoal, como a complexidade no cálculo da folha de pagamento para múltiplos vínculos, falhas no acompanhamento de planos de carreira, retrabalho no envio de obrigações ao eSocial e SIGA, e falta de transparência nas informações funcionais.',
      'Além disso, reduz erros manuais nos lançamentos de consignações e adicionais, assegura o cumprimento de prazos legais e previne inconsistências contábeis e fiscais na gestão da folha de pagamento.'
    ],
    benefits: [
      'Gestão completa de servidores efetivos, comissionados, contratados, aposentados e pensionistas;',
      'Automação e precisão no cálculo da folha de pagamento e eventos remuneratórios;',
      'Acesso remoto do servidor a contracheques, informes de rendimentos e fichas financeiras pelo Portal do Servidor;',
      'Execução automática do plano de carreira e controle de averbações de tempo de serviço;',
      'Facilidade no controle de férias, afastamentos coletivos e pensões alimentícias;',
      'Importação ágil de consignações bancárias e simulação de aposentadoria;',
      'Conferência prévia de movimentações periódicas com checklist antes do fechamento mensal;',
      'Adequação total ao eSocial, SIGA (TCM/BA) e transparência pública;',
      'Integração nativa entre a folha de pagamento e o módulo de Contabilidade e Finanças.'
    ],
    featuresIntro: 'O módulo oferece recursos para apoiar a gestão completa de pessoal e o processamento da folha, incluindo:',
    features: [
      'Cadastro e organização do histórico de servidores com múltiplos vínculos e funções;',
      'Processamento e cálculo automatizado da folha de pagamento mensal e adiantamentos;',
      'Portal do Servidor com emissão de contracheque online e consulta de margem consignável;',
      'Execução de regras de planos de cargos, carreiras e vencimentos;',
      'Gestão de férias, licenças e afastamentos individuais ou coletivos;',
      'Cálculo e controle de pensões alimentícias e consignações bancárias;',
      'Simulador de aposentadoria e averbação de tempo de contribuição;',
      'Checklist de conferência periódica de movimentações antes do fechamento mensal;',
      'Exportação de dados nos layouts exigidos pelo eSocial, RAIS, DIRF e SIGA (TCM/BA);',
      'Emissão de relatórios gerenciais e operacionais do setor de pessoal.'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo de Recursos Humanos e Folha de Pagamento é a integração com o Portal do Servidor, permitindo consulta remota de contracheques, informes e margem consignável com praticidade.',
      'Outro diferencial importante é o controle preventivo via checklist de fechamento mensal, garantindo a validação das movimentações antes do fechamento da folha e reduzindo erros de processamento.',
      'Além disso, a conformidade ao layout do SIGA (TCM/BA) e eSocial assegura a transmissão ágil e segura das informações exigidas pelos órgãos de fiscalização.'
    ],
    integrationsIntroParagraphs: [
      'O módulo possui integração com diferentes áreas da administração pública para consolidar as rotinas do setor de recursos humanos.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'Contabilidade e Finanças, permitindo o empenho, liquidação e pagamento automatizado da folha e encargos;',
      'Portal do Servidor, viabilizando o autoatendimento dos servidores públicos via web;',
      'Portal de Transparência Pública, possibilitando a divulgação das informações de pessoal conforme a legislação;',
      'Sistemas Governamentais (eSocial e SIGA/TCM), garantindo a migração e prestação de contas dos dados de pessoal.'
    ],
    faqs: [
      {
        question: 'Os servidores conseguem emitir o contracheque pela internet?',
        answer: 'Sim. Por meio do Portal do Servidor, os servidores têm acesso remoto a contracheques online, margem consignável, ficha financeira e informe de rendimentos.'
      },
      {
        question: 'O sistema aceita diferentes tipos de vínculos e planos de carreira?',
        answer: 'Sim. O módulo gerencia servidores efetivos, comissionados, temporários, agentes políticos, aposentados e pensionistas, executando os planos de carreira cadastrados.'
      },
      {
        question: 'O módulo gera arquivos para o eSocial e para o TCM/BA?',
        answer: 'Sim. A ferramenta está totalmente adequada ao eSocial e ao layout do SIGA (TCM/BA), realizando a exportação dos dados com segurança e agilidade.'
      },
      {
        question: 'Como é feita a conferência antes do fechamento da folha?',
        answer: 'O sistema disponibiliza um checklist de verificação periódica que permite conferir e validar todas as movimentações antes de realizar o fechamento mensal.'
      },
      {
        question: 'A folha é integrada com a contabilidade?',
        answer: 'Sim. O módulo realiza a integração com a Contabilidade e Finanças para o correto registro contábil e orçamentário das despesas com pessoal.'
      }
    ]
  },
  {
    id: 'pca',
    slug: 'pca',
    name: 'PCA (Plano de Contratação Anual)',
    summary: 'O módulo PCA é uma solução desenvolvida para apoiar a Administração Pública no planejamento, consolidação e acompanhamento das contratações anuais, em conformidade com a Lei nº 14.133/2021.',
    shortDescription: 'O módulo PCA é uma solução desenvolvida para apoiar a Administração Pública no planejamento, consolidação e acompanhamento das contratações anuais, em conformidade com a Lei nº 14.133/2021.',
    fullDescription: 'O módulo PCA é uma solução desenvolvida para apoiar a Administração Pública no planejamento, consolidação e acompanhamento das contratações anuais, em conformidade com a Lei nº 14.133/2021.',
    fullTextParagraphs: [
      'O módulo de Plano de Contratação Anual (PCA) é uma solução desenvolvida para apoiar a Administração Pública no planejamento e na consolidação de todas as aquisições e contratações pretendidas para o exercício financeiro seguinte, em estrita observância às diretrizes da Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos).',
      'A ferramenta possibilita a coleta descentralizada de demandas por secretaria e setor, o dimensionamento de quantitativos e estimativas de custos, a consolidação pelo setor de planejamento ou compras e o envio automático dos dados ao Portal Nacional de Contratações Públicas (PNCP), assegurando previsibilidade orçamentária, transparência e eficiência nos processos licitatórios.'
    ],
    iconName: 'ClipboardList',
    category: 'gestao',
    categoryLabel: 'Planejamento de Compras',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Plano de Contratação Anual (PCA) é uma solução desenvolvida para apoiar a Administração Pública no planejamento e na consolidação de todas as aquisições e contratações pretendidas para o exercício financeiro seguinte, em estrita observância às diretrizes da Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos).',
      'A ferramenta possibilita a coleta descentralizada de demandas por secretaria e setor, o dimensionamento de quantitativos e estimativas de custos, a consolidação pelo setor de planejamento ou compras e o envio automático dos dados ao Portal Nacional de Contratações Públicas (PNCP), assegurando previsibilidade orçamentária, transparência e eficiência nos processos licitatórios.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar gargalos na fase preparatória de compras, como o fracionamento indevido de despesas, a falta de padronização nas solicitações das secretarias, dificuldades de alinhamento com a Lei Orçamentária Anual e atrasos na divulgação exigida pelo PNCP.',
      'Além disso, elimina controles paralelos em planilhas, reduz aquisições de emergência e previne apontamentos dos órgãos de controle decorrentes da ausência de planejamento prévio das contratações.'
    ],
    benefits: [
      'Planejamento centralizado e alinhado com as regras da Lei nº 14.133/2021;',
      'Coleta descentralizada e organizada das demandas de todas as secretarias;',
      'Envio rápido e automatizado das informações ao PNCP;',
      'Ganhos de escala e economia de recursos públicos por meio da consolidação de itens;',
      'Previsibilidade orçamentária para a elaboração da LOA e acompanhamento das contratações;',
      'Redução do fracionamento indevido de despesas e compras de emergência;',
      'Transparência pública e controle social sobre o plano de compras do município;',
      'Minimização de riscos de ressalvas e sanções pelos Tribunais de Contas.'
    ],
    featuresIntro: 'O módulo oferece recursos para a elaboração, aprovação e execução do PCA, incluindo:',
    features: [
      'Inclusão descentralizada de demandas de compras por secretarias e unidades gestoras;',
      'Padronização e consolidação das requisições com apoio a catálogo unificado de materiais e serviços;',
      'Dimensionamento de quantitativos e estimativa automatizada de custos do plano;',
      'Análise de viabilidade, priorização e cronograma de execução das contratações;',
      'Integração nativa para publicação e exportação do PCA no PNCP;',
      'Acompanhamento do cumprimento das metas do PCA frente aos processos de licitação;',
      'Controle de revisões, alterações e aditamentos do plano aprovado;',
      'Emissão de relatórios gerenciais e consolidados para controle interno e órgãos de fiscalização.'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo PCA é a facilidade da coleta descentralizada, permitindo que cada unidade gestora cadastre suas necessidades de forma intuitiva e organizada.',
      'Outro diferencial importante é a integração direta com o PNCP e com os módulos de Licitação e Contabilidade da GPI, transformando as demandas planejadas em base direta para a abertura dos certames.',
      'Além disso, os mecanismos de agrupamento de itens evitam o fracionamento de despesas e potenciam compras em lote com maior poder de negociação.'
    ],
    integrationsIntroParagraphs: [
      'O módulo PCA conecta-se a diversas etapas da gestão municipal para garantir a continuidade do fluxo orçamentário e de compras.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'Licitação e Compras, para importação e vinculação direta das demandas do PCA aos editais;',
      'Planejamento e Orçamento (PPA, LDO e LOA), assegurando a devida previsão orçamentária;',
      'PNCP (Portal Nacional de Contratações Públicas), para transmissão oficial dos dados do plano;',
      'Transparência Pública, permitindo a consulta dos cidadãos às contratações planejadas pelo município.'
    ],
    faqs: [
      {
        question: 'O módulo atende às exigências da Lei nº 14.133/2021?',
        answer: 'Sim. O módulo de PCA foi desenvolvido em estrita conformidade com as regras da Nova Lei de Licitações e orientações do PNCP.'
      },
      {
        question: 'As secretarias conseguem inserir suas próprias demandas no sistema?',
        answer: 'Sim. O sistema permite o acesso descentralizado para que cada secretaria cadastre e encaminhe suas requisições de compras.'
      },
      {
        question: 'É possível alterar o PCA ao longo do exercício?',
        answer: 'Sim. O módulo suporta o registro de alterações, revisões e inclusões conforme as regras regulamentares da entidade.'
      },
      {
        question: 'O PCA se integra ao módulo de licitações?',
        answer: 'Sim. As demandas consolidadas e aprovadas no PCA são convertidas diretamente em processos de contratação no módulo de Licitação.'
      }
    ]
  },
  {
    id: 'licitacao',
    slug: 'licitacao',
    name: 'Licitação',
    summary: 'O módulo de Licitação é uma solução desenvolvida para gerenciar e executar todas as etapas dos processos licitatórios, dispensas e inexigibilidades, alinhado à Lei nº 14.133/2021 e ao PNCP.',
    shortDescription: 'O módulo de Licitação é uma solução desenvolvida para gerenciar e executar todas as etapas dos processos licitatórios, dispensas e inexigibilidades, alinhado à Lei nº 14.133/2021 e ao PNCP.',
    fullDescription: 'O módulo de Licitação é uma solução desenvolvida para gerenciar e executar todas as etapas dos processos licitatórios, dispensas e inexigibilidades, alinhado à Lei nº 14.133/2021 e ao PNCP.',
    fullTextParagraphs: [
      'O módulo de Licitação é uma solução desenvolvida para orientar, gerenciar e executar todas as etapas dos processos licitatórios e de contratação direta na Administração Pública, em total conformidade com a Lei nº 14.133/2021 e demais normas vigentes.',
      'A ferramenta contempla os fluxos da fase preparatória (ETP, TR/Edital, Pesquisa de Preços e Análise de Riscos) e da fase externa, incluindo recebimento de propostas, lances, julgamento, habilitação, recursos e homologação, promovendo transparência, lisura e máxima eficiência ao setor de compras públicas.'
    ],
    iconName: 'Gavel',
    category: 'gestao',
    categoryLabel: 'Licitações & Compras',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Licitação é uma solução desenvolvida para orientar, gerenciar e executar todas as etapas dos processos licitatórios e de contratação direta na Administração Pública, em total conformidade com a Lei nº 14.133/2021 e demais normas vigentes.',
      'A ferramenta contempla os fluxos da fase preparatória (ETP, TR/Edital, Pesquisa de Preços e Análise de Riscos) e da fase externa, incluindo recebimento de propostas, lances, julgamento, habilitação, recursos e homologação, promovendo transparência, lisura e máxima eficiência ao setor de compras públicas.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia as entidades públicas a superar desafios frequentes na condução de certames, como a morosidade na instrução dos processos, inconsistências na pesquisa de preços, erros na elaboração de minutas e edital, e dificuldades na integração com o PNCP e Tribunais de Contas.',
      'Além disso, reduz riscos de anulação e impugnação de licitações, assegura a observância das modalidades e prazos regulamentares e garante o histórico completo de todas as decisões e atos do processo.'
    ],
    benefits: [
      'Condução segura de processos licitatórios conforme a Lei nº 14.133/2021;',
      'Padronização de documentos da fase preparatória (ETP, TR, Edital, Matriz de Riscos);',
      'Agilidade na realização de pesquisas de preços com bases oficiais e históricas;',
      'Integração automática com o Portal Nacional de Contratações Públicas (PNCP);',
      'Transparência total dos atos licitatórios para a sociedade e órgãos de controle;',
      'Redução de impugnações e recursos por falhas formais;',
      'Controle automatizado de prazos, fases e publicações de editais;',
      'Facilidade na exportação dos dados para o SIGA (TCM/BA) e Tribunais de Contas.'
    ],
    featuresIntro: 'O módulo oferece recursos para a gestão de todas as fases do processo de licitação, incluindo:',
    features: [
      'Elaboração e acompanhamento do Estudo Técnico Preliminar (ETP) e Termo de Referência (TR);',
      'Pesquisa de preços integrada com bases oficiais e histórico de compras da entidade;',
      'Gestão de modalidades licitatórias (Pregão, Concorrência, Concurso, Leilão, Diálogo Competitivo);',
      'Instrução e acompanhamento de processos de contratação direta (Dispensas e Inexigibilidades);',
      'Geração automatizada de editais, avisos, atas de sessão e termos de homologação;',
      'Registro e controle de propostas, lances, fase de habilitação e julgamento;',
      'Gestão de recursos administrativos, pareceres jurídicos e impugnações a editais;',
      'Integração nativa com o PNCP e Diário Oficial para publicação dos atos oficiais;',
      'Exportação de dados nos layouts exigidos pelo SIGA (TCM/BA).'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais do módulo de Licitação é a estruturação automatizada da fase preparatória exigida pela Lei nº 14.133/2021, facilitando a elaboração do ETP, TR e Gestão de Riscos.',
      'Outro diferencial importante é a transmissão nativa dos dados ao PNCP e a adequação ao layout do SIGA (TCM/BA), eliminando retrabalho no preenchimento de sistemas externos.',
      'Além disso, o sistema conta com validações preventivas que alertam os operadores sobre inconsistências em prazos e documentação antes da publicação do edital.'
    ],
    integrationsIntroParagraphs: [
      'O módulo de Licitação interage com os diversos setores do ciclo de gestão para garantir eficiência na contratação pública.',
      'Entre as principais integrações, destacam-se:'
    ],
    integrations: [
      'PCA (Plano de Contratação Anual), importando as demandas planejadas pelas secretarias;',
      'Contabilidade e Finanças, garantindo a reserva e disponibilidade orçamentária;',
      'Gerenciamento de Contratos, enviando os dados do licitante vencedor para celebração do contrato;',
      'PNCP e Diário Oficial, para publicação oficial dos editais e atos de homologação.'
    ],
    faqs: [
      {
        question: 'O módulo atende às novas regras da Lei nº 14.133/2021?',
        answer: 'Sim. A ferramenta está totalmente adaptada à Nova Lei de Licitações, contemplando modalidades, critérios de julgamento e fase preparatória (ETP/TR).'
      },
      {
        question: 'É feita a integração automática com o PNCP?',
        answer: 'Sim. O sistema realiza a transmissão dos editais, atas e atos de homologação diretamente ao Portal Nacional de Contratações Públicas.'
      },
      {
        question: 'O sistema gerencia Dispensas e Inexigibilidades?',
        answer: 'Sim. O módulo conta com fluxos específicos e simplificados para instrução e publicação de processos de contratação direta.'
      },
      {
        question: 'O módulo está adequado ao layout do SIGA (TCM/BA)?',
        answer: 'Sim. Todas as etapas do processo licitatório são estruturadas para permitir a exportação e prestação de contas junto ao Tribunal de Contas.'
      }
    ]
  },
  {
    id: 'gerenciamento-contratos',
    slug: 'gerenciamento-contratos',
    name: 'Gerenciamento de Contratos',
    summary: 'O módulo de Gerenciamento de Contratos possibilita que a entidade efetue o cadastro e tenha o controle dos saldos, vigências, pagamentos e documentos de contratos e aditivos.',
    shortDescription: 'O módulo de Gerenciamento de Contratos possibilita que a entidade efetue o cadastro e tenha o controle dos saldos, vigências, pagamentos e documentos de contratos e aditivos.',
    fullDescription: 'O módulo de Gerenciamento de Contratos possibilita que a entidade efetue o cadastro e tenha o controle dos saldos, vigências, pagamentos e documentos de contratos e aditivos.',
    fullTextParagraphs: [
      'O módulo de Gerenciamento de Contratos, possibilita que a entidade efetue o cadastro e tenha o controle dos saldos, vigências, pagamento entre outras informações. Uma vez integrado com a contabilidade, a parametrização da ferramenta impedirá que seja executado contratos sem saldo ou que estejam com prazos vencidos, gerando relatórios com informações integradas tais como: contrato empenhado, saldo do empenho, saldo do contrato para empenhar entre outras.',
      'O módulo permite que sejam registrados contratos e aditivos, incluindo aqueles que estavam vigentes antes da implantação da ferramenta na entidade. Possibilita que sejam cadastradas dotações para várias unidades gestoras dentro do mesmo contrato. Emite alertas, encaminhando e-mails para os gestores cadastrados informando com pelo menos 30 dias de antecedência o fim da vigência. Todos os cadastros realizados permitem que sejam anexados documentos em diversos formatos e quando integrado ao Portal de Acesso a Informação, atendendo o que dispõem a Lei de Acesso a Informação – 12.527. O módulo está adequado as regras de exportação para o SIGA, agilizando as tarefas e consequentemente evitando retrabalho.'
    ],
    youtubeUrlPlaceholder: 'YOUTUBE_URL_GERENCIAMENTO_CONTRATOS',
    demoVideoUrl: 'https://www.youtube.com/embed/YOUTUBE_URL_GERENCIAMENTO_CONTRATOS',
    iconName: 'FileCheck',
    category: 'gestao',
    categoryLabel: 'Contratos & Aditivos',
    keyBenefit: 'Alertas automáticos de vigência, controle de saldos por dotação e integração ao SIGA.',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Gerenciamento de Contratos, possibilita que a entidade efetue o cadastro e tenha o controle dos saldos, vigências, pagamento entre outras informações. Uma vez integrado com a contabilidade, a parametrização da ferramenta impedirá que seja executado contratos sem saldo ou que estejam com prazos vencidos, gerando relatórios com informações integradas tais como: contrato empenhado, saldo do empenho, saldo do contrato para empenhar entre outras.',
      'O módulo permite que sejam registrados contratos e aditivos, incluindo aqueles que estavam vigentes antes da implantação da ferramenta na entidade. Possibilita que sejam cadastradas dotações para várias unidades gestoras dentro do mesmo contrato. Emite alertas, encaminhando e-mails para os gestores cadastrados informando com pelo menos 30 dias de antecedência o fim da vigência. Todos os cadastros realizados permitem que sejam anexados documentos em diversos formatos e quando integrado ao Portal de Acesso a Informação, atendendo o que dispõem a Lei de Acesso a Informação – 12.527. O módulo está adequado as regras de exportação para o SIGA, agilizando as tarefas e consequentemente evitando retrabalho.'
    ],
    problemSolvedParagraphs: [
      'O módulo auxilia a administração pública na superação de falhas na gestão de contratos, tais como extrapolação de prazos de vigência, contratação sem saldo orçamentário e descontrole no acompanhamento de aditivos.',
      'Evita também inconsistências na prestação de contas aos órgãos de controle e perda de documentos contratuais importantes.'
    ],
    benefits: [
      'Cadastro completo de contratos, aditivos, convênios e termos de cooperação;',
      'Controle automatizado de saldos financeiros e orçamentários por contrato;',
      'Alertas automáticos por e-mail sobre término de vigência com 30 dias de antecedência;',
      'Gestão de dotações orçamentárias de múltiplas unidades gestoras no mesmo contrato;',
      'Bloqueio de execução contábil para contratos vencidos ou sem saldo disponível;',
      'Anexo de documentos digitais em diversos formatos no acervo do contrato;',
      'Adequação total às regras de exportação para o sistema SIGA (TCM/BA);',
      'Integração nativa com a Contabilidade e o Portal de Acesso à Informação.'
    ],
    featuresIntro: 'O módulo de Gerenciamento de Contratos disponibiliza funcionalidades indispensáveis para a gestão contratual, tais como:',
    features: [
      'Registro e acompanhamento de contratos, aditivos e repactuações;',
      'Controle do saldo do contrato, saldo empenhado e saldo a empenhar;',
      'Acompanhamento de prazos de vigência e marcos de renovação ou encerramento;',
      'Vínculo com dotações orçamentárias e unidades gestoras participantes;',
      'Envio automatizado de notificações e alertas aos gestores responsáveis;',
      'Gestão de garantias contratuais e cronograma de pagamentos;',
      'Anexo e organização do acervo documental dos contratos e aditivos;',
      'Exportação dos dados para a prestação de contas no SIGA (TCM/BA).'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Um dos principais diferenciais é a integração direta com a Contabilidade, impedindo a emissão de empenhos ou liquidações sem saldo contratual disponível.',
      'Outro grande diferencial é o sistema de alertas preditivos via e-mail com antecedência de 30 dias do fim da vigência, garantindo tempo hábil para prorrogações ou novas licitações.',
      'A facilidade de exportação direta para o SIGA (TCM/BA) e a publicação automática no Portal de Acesso à Informação asseguram total conformidade legal.'
    ],
    integrationsIntroParagraphs: [
      'O módulo interage de forma nativa com as principais ferramentas do ecossistema GPI.',
      'Principais integrações:'
    ],
    integrations: [
      'Contabilidade e Finanças, garantindo validação de saldos e empenhos;',
      'Licitação, importando automaticamente os dados da empresa vencedora do certame;',
      'Portal de Acesso à Informação, publicando contratos e aditivos para transparência pública;',
      'SIGA (TCM/BA), viabilizando a remessa dos dados para fiscalização contábil.'
    ],
    faqs: [
      {
        question: 'O sistema emite alertas de vencimento de contrato?',
        answer: 'Sim. O módulo envia e-mails automáticos para os gestores cadastrados informando o término da vigência com pelo menos 30 dias de antecedência.'
      },
      {
        question: 'É possível registrar contratos firmados antes da implantação da GPI?',
        answer: 'Sim. É possível cadastrar contratos e aditivos vigentes anteriores para manter o histórico e o controle na ferramenta.'
      },
      {
        question: 'O módulo bloqueia empenho sem saldo no contrato?',
        answer: 'Sim. A parametrização integrada com a contabilidade impede a execução de contratos sem saldo ou com prazos vencidos.'
      },
      {
        question: 'Os dados do contrato são exportados para o TCM/BA?',
        answer: 'Sim. A solução atende às regras de exportação para o sistema SIGA do Tribunal de Contas.'
      }
    ]
  },
  {
    id: 'diario-oficial',
    slug: 'diario-oficial',
    name: 'Diário Oficial',
    summary: 'O módulo Diário Oficial é uma ferramenta indispensável para que a gestão cumpra com o princípio constitucional da publicidade, conferindo eficácia aos atos da Administração Pública.',
    shortDescription: 'O módulo Diário Oficial é uma ferramenta indispensável para que a gestão cumpra com o princípio constitucional da publicidade, conferindo eficácia aos atos da Administração Pública.',
    fullDescription: 'O módulo Diário Oficial é uma ferramenta indispensável para que a gestão cumpra com o princípio constitucional da publicidade, conferindo eficácia aos atos da Administração Pública.',
    fullTextParagraphs: [
      'O módulo Diário Oficial é uma ferramenta indispensável para que a gestão cumpra com o princípio constitucional da publicidade, conferindo eficácia aos atos da Administração Pública.',
      'Esse módulo permite a publicação nas edições diárias em seu Diário Próprio, as leis, decretos, resoluções, editais, portarias e demais atos praticados, garantindo ao cidadão e demais interessados seu direito de conhecer todas as iniciativas do poder público.'
    ],
    youtubeUrlPlaceholder: 'YOUTUBE_URL_DIARIO_OFICIAL',
    demoVideoUrl: 'https://www.youtube.com/embed/YOUTUBE_URL_DIARIO_OFICIAL',
    iconName: 'Newspaper',
    category: 'transparencia',
    categoryLabel: 'Diário Oficial',
    keyBenefit: 'Publicação rápida de atos oficiais, leis e decretos com eficácia jurídica e transparência.',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo Diário Oficial é uma ferramenta indispensável para que a gestão cumpra com o princípio constitucional da publicidade, conferindo eficácia aos atos da Administração Pública.',
      'Esse módulo permite a publicação nas edições diárias em seu Diário Próprio, as leis, decretos, resoluções, editais, portarias e demais atos praticados, garantindo ao cidadão e demais interessados seu direito de conhecer todas as iniciativas do poder público.'
    ],
    problemSolvedParagraphs: [
      'O módulo resolve a morosidade e os altos custos decorrentes da publicação de atos oficiais em meios impressos ou plataformas terceirizadas descentralizadas.',
      'Garante a conferência de eficácia jurídica aos atos administrativos municipais com segurança, agilidade e fácil verificação do histórico pelo público.'
    ],
    benefits: [
      'Cumprimento do princípio constitucional da publicidade dos atos administrativos;',
      'Publicação em Diário Oficial Próprio com redução de custos operacionais;',
      'Garantia de eficácia jurídica e transparência para leis, decretos, editais e portarias;',
      'Acesso rápido e gratuito para cidadãos, órgãos de controle e servidores;',
      'Organização cronológica e por categorias de todas as edições publicadas;',
      'Busca textual simplificada por palavra-chave, data ou tipo de documento.'
    ],
    featuresIntro: 'O módulo oferece recursos completos para a gestão das edições e publicações oficiais, incluindo:',
    features: [
      'Editor de publicações e diagramação das edições diárias do Diário Oficial;',
      'Publicação de leis, decretos, resoluções, portarias, editais e licitações;',
      'Gestão do acervo histórico de edições anteriores com busca por período;',
      'Certificação digital e segurança na integridade dos documentos publicados;',
      'Acesso aberto ao público via portal com download em PDF;',
      'Classificação temática e por órgãos emissores das publicações.'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Autonomia total para o município gerenciar seu próprio veículo oficial de publicação de atos.',
      'Disponibilização imediata na internet para consulta pública com total segurança e autenticidade.'
    ],
    integrationsIntroParagraphs: [
      'O Diário Oficial é integrado às demais soluções de gestão administrativa da GPI.',
      'Principais integrações:'
    ],
    integrations: [
      'Licitação, permitindo a publicação direta de avisos de edital e homologações;',
      'Portal de Acesso à Informação, disponibilizando o acervo de diários oficiais ao cidadão;',
      'Recursos Humanos, facilitando a publicação de portarias e atos de pessoal.'
    ],
    faqs: [
      {
        question: 'Quais atos podem ser publicados no Diário Oficial?',
        answer: 'Podem ser publicados leis, decretos, resoluções, editais, portarias, contratos e demais atos praticados pela gestão pública.'
      },
      {
        question: 'O cidadão pode consultar edições anteriores?',
        answer: 'Sim. A plataforma disponibiliza o acervo completo das edições organizadas por data e categoria para consulta e download em PDF.'
      }
    ]
  },
  {
    id: 'portal-acesso-informacao',
    slug: 'portal-acesso-informacao',
    name: 'Portal de Acesso à Informação',
    summary: 'O Portal de Acesso à Informação é uma ferramenta que recepciona e processa dados automaticamente para divulgação via internet, visando atender tempestivamente a legislação de transparência ativa e passiva.',
    shortDescription: 'O Portal de Acesso à Informação é uma ferramenta que recepciona e processa dados automaticamente para divulgação via internet, visando atender tempestivamente a legislação de transparência ativa e passiva.',
    fullDescription: 'O Portal de Acesso à Informação é uma ferramenta recepciona e processa dados automaticamente para divulgação via internet visando atender tempestivamente a legislação que versa sobre o acesso a informação, vinculada a transparência ativa e passiva.',
    fullTextParagraphs: [
      'O Portal de Acesso à Informação é uma ferramenta recepciona e processa dados automaticamente para divulgação via internet visando atender tempestivamente a legislação que versa sobre o acesso a informação, vinculada a transparência ativa e passiva. Contempla aos cidadãos no seu direito de acesso rápido e pratico às informações e dados do poder público, entre eles: estrutura organizacional, licitações, contratos, diárias, passagens, informações sobre servidores públicos entre outros. A plataforma possibilita que seja construída um acervo virtual, permitindo que a entidade disponibilize de forma organizada documentos digitais tais como: artigos, leis, entre outros materiais de cunho informativo para a população.',
      'A ferramenta disponibiliza o e-SIC – Sistema Eletrônica do Serviço de Informação ao Cidadão que possibilita a solicitação e acompanhamento do trâmite e providências em atendimentos às demandas dos cidadãos, órgãos de controle externo, prestadores de serviços e demais interessados.',
      'Integrado também ao módulo está o e-OUV – Sistema Eletrônico de Ouvidoria permitindo que o cidadão faça sua manifestação de críticas, sugestões e reclamações de forma fácil e intuitiva.',
      'Esse conjunto de dispositivos eletrônicos possuem uma função fundamental para a participação popular no controle social das ações governamentais, consolidando e efetivando a transparência pública com base na Lei de Acesso à Informação 12.527/2011, garantindo a eficácia do princípio constitucional da publicidade.'
    ],
    youtubeUrlPlaceholder: 'YOUTUBE_URL_PORTAL_ACESSO_INFORMACAO',
    demoVideoUrl: 'https://www.youtube.com/embed/YOUTUBE_URL_PORTAL_ACESSO_INFORMACAO',
    iconName: 'Eye',
    category: 'transparencia',
    categoryLabel: 'Portal de Transparência',
    keyBenefit: 'Transparência ativa e passiva com e-SIC, e-OUV e acervo digital em conformidade com a LAI 12.527/2011.',
    
    // Official approved structured content
    presentationParagraphs: [
      'O Portal de Acesso à Informação é uma ferramenta recepciona e processa dados automaticamente para divulgação via internet visando atender tempestivamente a legislação que versa sobre o acesso a informação, vinculada a transparência ativa e passiva. Contempla aos cidadãos no seu direito de acesso rápido e pratico às informações e dados do poder público, entre eles: estrutura organizacional, licitações, contratos, diárias, passagens, informações sobre servidores públicos entre outros. A plataforma possibilita que seja construída um acervo virtual, permitindo que a entidade disponibilize de forma organizada documentos digitais tais como: artigos, leis, entre outros materiais de cunho informativo para a população.',
      'A ferramenta disponibiliza o e-SIC – Sistema Eletrônica do Serviço de Informação ao Cidadão que possibilita a solicitação e acompanhamento do trâmite e providências em atendimentos às demandas dos cidadãos, órgãos de controle externo, prestadores de serviços e demais interessados.',
      'Integrado também ao módulo está o e-OUV – Sistema Eletrônico de Ouvidoria permitindo que o cidadão faça sua manifestação de críticas, sugestões e reclamações de forma fácil e intuitive.',
      'Esse conjunto de dispositivos eletrônicos possuem uma função fundamental para a participação popular no controle social das ações governamentais, consolidando e efetivando a transparência pública com base na Lei de Acesso à Informação 12.527/2011, garantindo a eficácia do princípio constitucional da publicidade.'
    ],
    problemSolvedParagraphs: [
      'O portal elimina a opacidade administrativa e o retrabalho na consolidação manual de informações para atendimento à Lei de Acesso à Informação (Lei nº 12.527/2011).',
      'Resolve também a descentralização nos pedidos de informação e manifestações de ouvidoria, centralizando e-SIC e e-OUV em um único ambiente auditável.'
    ],
    benefits: [
      'Atendimento pleno à Lei de Acesso à Informação (Lei nº 12.527/2011);',
      'Automatização do envio e recepção de dados para transparência ativa e passiva;',
      'Inclusão dos módulos e-SIC (Informação ao Cidadão) e e-OUV (Ouvidoria);',
      'Divulgação de receitas, despesas, servidores, licitações, contratos e diárias;',
      'Criação de acervo virtual de documentos digitais e legislação municipal;',
      'Estímulo à participação popular e fortalecimento do controle social da gestão.'
    ],
    featuresIntro: 'O Portal de Acesso à Informação reúne recursos para consolidar a transparência pública municipal:',
    features: [
      'Publicação automatizada de dados orçamentários, financeiros e de pessoal;',
      'Módulo e-SIC para solicitação, acompanhamento e resposta a pedidos de informação;',
      'Módulo e-OUV para recebimento de sugestões, elogios, denúncias e reclamações;',
      'Divulgação detalhada de processos licitatórios, contratos, aditivos e compras;',
      'Consulta de remuneração de servidores respeitando critérios de privacidade e legislação;',
      'Acervo virtual de documentos com biblioteca digital de leis e portarias.'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Processamento e recepção automática de dados oriundos dos módulos contábeis, de pessoal e licitações sem necessidade de digitação dupla.',
      'Nativa integração dos canais de atendimento ao cidadão (e-SIC e e-OUV) na mesma interface institucional do município.'
    ],
    integrationsIntroParagraphs: [
      'O Portal de Acesso à Informação é o canal central de saída de dados da solução GPI.',
      'Principais integrações:'
    ],
    integrations: [
      'Contabilidade e Finanças, transmitindo receitas, despesas e relatórios fiscais;',
      'Recursos Humanos, exibindo quadro de pessoal e informações permitidas por lei;',
      'Gerenciamento de Contratos e Licitação, divulgando editais, atas e contratos firmados.'
    ],
    faqs: [
      {
        question: 'O Portal atende aos requisitos da Lei de Acesso à Informação?',
        answer: 'Sim. A plataforma atende integralmente à Lei nº 12.527/2011, contemplando transparência ativa, passiva, e-SIC e e-OUV.'
      },
      {
        question: 'Como funciona o e-SIC?',
        answer: 'O e-SIC permite que qualquer cidadão registre um pedido de informação e acompanhe o prazo legal e a resposta fornecida pelo órgão público.'
      },
      {
        question: 'O que é o e-OUV?',
        answer: 'É o Sistema Eletrônico de Ouvidoria, no qual os cidadãos podem registrar críticas, elogios, sugestões e reclamações de maneira simples e transparente.'
      }
    ]
  },
  {
    id: 'processo',
    slug: 'processo',
    name: 'Processo',
    summary: 'O módulo de Processo possibilita a tramitação digital e eletrônica dos processos administrativos e documentos da gestão pública com total segurança e agilidade.',
    shortDescription: 'O módulo de Processo possibilita a tramitação digital e eletrônica dos processos administrativos e documentos da gestão pública com total segurança e agilidade.',
    fullDescription: 'O módulo de Processo possibilita a tramitação digital e eletrônica dos processos administrativos e documentos da gestão pública com total segurança e agilidade.',
    fullTextParagraphs: [
      'O módulo de Processo Eletrônico é uma solução desenvolvida para promover a digitalização, autuação e tramitação de processos administrativos e documentos no âmbito da Administração Pública.',
      'A ferramenta elimina a necessidade de papéis físicos, viabiliza a assinatura digital, o rastreamento em tempo real do trâmite entre setores e garante agilidade e transparência às solicitações dos cidadãos e rotinas internas.'
    ],
    iconName: 'Workflow',
    category: 'gestao',
    categoryLabel: 'Processo Eletrônico',
    keyBenefit: 'Tramitação digital de processos sem papel, assinatura eletrônica e rastreio em tempo real.',
    
    // Official approved structured content
    presentationParagraphs: [
      'O módulo de Processo Eletrônico é uma solução desenvolvida para promover a digitalização, autuação e tramitação de processos administrativos e documentos no âmbito da Administração Pública.',
      'A ferramenta elimina a necessidade de papéis físicos, viabiliza a assinatura digital, o rastreamento em tempo real do trâmite entre setores e garante agilidade e transparência às solicitações dos cidadãos e rotinas internas.'
    ],
    problemSolvedParagraphs: [
      'Elimina o acúmulo de papéis, a perda de documentos físicos, a morosidade no deslocamento manual de pastas entre secretarias e o desconhecimento do status atual das solicitações.'
    ],
    benefits: [
      'Tramitação 100% digital e sem uso de papel (Paperless);',
      'Autuação e numeração automática de processos administrativos;',
      'Rastreabilidade do histórico de trâmite e despachos em tempo real;',
      'Assinatura eletrônica e digital com validade jurídica;',
      'Redução de custos com impressão, papel e transporte físico de documentos;',
      'Maior agilidade no atendimento de solicitações de cidadãos e servidores.'
    ],
    featuresIntro: 'Principais funcionalidades do módulo de Processo:',
    features: [
      'Autuação e protocolização eletrônica de processos e requerimentos;',
      'Atribuição de prazos, encaminhamentos e despachos entre setores;',
      'Anexo de documentos digitais e mídias ao processo;',
      'Assinatura digital e eletrônica de documentos e pareceres;',
      'Acompanhamento do trâmite pelo cidadão por meio de código de rastreio;',
      'Emissão de certidões, comprovantes de protocolo e relatórios de fluxo.'
    ],
    videoStatusText: '(Em preparação)',
    differentiatorsParagraphs: [
      'Agilidade e rastreabilidade total no fluxo interno de documentos com redução expressiva do tempo de atendimento das demandas municipais.'
    ],
    integrationsIntroParagraphs: [
      'Integração com o ecossistema GPI:',
    ],
    integrations: [
      'Contabilidade e Finanças, anexando processos administrativos a empenhos e pagamentos;',
      'Portal de Acesso à Informação, permitindo consulta de processos públicos.'
    ],
    faqs: [
      {
        question: 'O cidadão pode acompanhar o andamento do processo pela internet?',
        answer: 'Sim. Por meio do código de protocolo fornecido, o cidadão pode consultar a tramitação e os despachos em tempo real.'
      },
      {
        question: 'O sistema suporta assinatura digital?',
        answer: 'Sim. O módulo contempla assinatura eletrônica e digital de documentos com validade legal.'
      }
    ]
  }
];

export const SOS_MARIA_DA_PENHA_INFO = {
  title: 'SOS Maria da Penha',
  subtitle: 'Tecnologia, proteção e informação para mulheres.',
  description: 'O SOS Maria da Penha é um aplicativo desenvolvido para ampliar o acesso a recursos de proteção, apoio e informação para mulheres. A plataforma reúne funcionalidades que facilitam o pedido de ajuda, o acesso a redes de apoio e a utilização de ferramentas voltadas à prevenção e ao enfrentamento da violência e do assédio.',
  features: [
    {
      title: 'Pedido de ajuda',
      description: 'Recursos que facilitam o acesso a ajuda e proteção através do aplicativo.'
    },
    {
      title: 'Rede de Apoio',
      description: 'Possibilidade de localizar uma rede de apoio próxima à localização da usuária.'
    },
    {
      title: 'Guardiões',
      description: 'Possibilidade de adicionar até 3 pessoas de confiança para receber pedidos de ajuda.'
    },
    {
      title: 'Protocolo Antiassédio',
      description: 'Área destinada à identificação de estabelecimentos participantes do Protocolo Antiassédio.'
    },
    {
      title: 'Violentômetro, Assediômetro e Bullyômetro',
      description: 'Ferramentas informativas que auxiliam no reconhecimento de sinais e situações de violência, assédio e bullying.'
    },
    {
      title: 'Elas Empreendem',
      description: 'Espaço destinado à visibilidade de negócios e iniciativas de mulheres empreendedoras.'
    }
  ],
  videoUrl: 'https://www.youtube.com/embed/HhkWC0YnVHM',
  videoTitle: 'Apresentação SOS Maria da Penha'
};

export const GPI_DIFFERENTIATORS = [
  {
    icon: 'ShieldCheck',
    title: 'Especialização Exclusiva',
    description: 'Mais de 18 anos focados unicamente nas demandas complexas da Gestão Pública municipal e órgãos governamentais.'
  },
  {
    icon: 'Workflow',
    title: 'Integração Nativa de Módulos',
    description: 'Comunicação direta entre saúde, educação, tributos, compras e contabilidade sem retrabalho ou planilhas.'
  },
  {
    icon: 'Lock',
    title: 'Segurança & LGPD Pública',
    description: 'Infraestrutura em nuvem segura com criptografia de ponta, backups automáticos e estrita conformidade com a LGPD.'
  },
  {
    icon: 'RefreshCw',
    title: 'Atualizações Regulatórias Constantes',
    description: 'Acompanhamento contínuo de alterações na legislação (Lei 14.133, SIAFIC, eSocial, portarias STN) sem custos extras.'
  },
  {
    icon: 'Headphones',
    title: 'Suporte Técnico Humanizado & Ágil',
    description: 'Equipe multidisciplinar composta por contadores, advogados públicos e especialistas em TI pronta para atender.'
  },
  {
    icon: 'FileCheck',
    title: 'Conformidade com TCE & STN',
    description: 'Sistemas projetados para garantir notas máximas em auditorias e aprovação de contas nos Tribunais de Contas.'
  }
];

export const GPI_STEPS = [
  {
    stepNumber: '01',
    title: 'Diagnóstico & Alinhamento',
    subtitle: 'Mapeamento Técnico Gratuito',
    description: 'Analisamos a infraestrutura do município, a maturidade digital das secretarias e os gargalos operacionais para desenhar o plano de migração sob medida.',
    details: ['Análise de banco de dados legado', 'Levantamento de processos físicos', 'Cronograma de transição sem interrupção dos serviços públicos']
  },
  {
    stepNumber: '02',
    title: 'Implantação & Migração',
    subtitle: 'Segurança de Dados Legados',
    description: 'Instalação dos módulos na nuvem, parametrização com as leis e tabelas municipais e migração segura de todo o histórico dos sistemas anteriores.',
    details: ['Tratamento e higienização de cadastros', 'Testes de consistência contábil e cadastral', 'Homologação junto aos órgãos fiscalizadores']
  },
  {
    stepNumber: '03',
    title: 'Capacitação & Treinamento',
    subtitle: 'Valorização dos Servidores',
    description: 'Treinamento prático presencial e online para todos os servidores das secretarias, com acompanhamento especial nos primeiros dias de uso.',
    details: ['Aulas interativas por área de atuação', 'Ambiente de simulação para práticas', 'Certificação de servidores e manuais ilustrados']
  },
  {
    stepNumber: '04',
    title: 'Suporte Contínuo & Evolução',
    subtitle: 'Parceria de Longo Prazo',
    description: 'Central de atendimento telefônico, chat e presencial, atualizações legais automáticas e reuniões de acompanhamento de resultados.',
    details: ['Suporte via telefone, ticket e WhatsApp', 'Plantão para fechamentos mensais e eSocial', 'Evolução contínua baseada no feedback dos usuários']
  }
];

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: 'case-1',
    municipality: 'Prefeitura de Nova Esperança',
    state: 'PR',
    population: '45.000 hab.',
    solutionUsed: 'GPI Tributário & Processo Eletrônico',
    metricHighlight: '+34% na Arrecadação de IPTU/ISS',
    quote: 'Com o GPI Tributário e a emissão via Pix, nossa arrecadação própria deu um salto expressivo no primeiro semestre. Além disso, eliminamos 80% dos papéis na prefeitura com o processo digital.',
    author: 'Dr. Roberto Silveira',
    role: 'Secretário de Finanças e Planejamento',
    results: [
      '+34% de arrecadação sem aumentar impostos',
      'Redução de 12.000 folhas de papel/mês',
      'Atendimento ao cidadão 4x mais rápido'
    ]
  },
  {
    id: 'case-2',
    municipality: 'Prefeitura de São José dos Pinhais',
    state: 'SC',
    population: '82.000 hab.',
    solutionUsed: 'GPI Saúde Pública & Prontuário Eletrônico',
    metricHighlight: '100% de integração com e-SUS PEC',
    quote: 'O GPI Saúde unificou nossas 18 UBSs e a UPA central. O controle de estoque de medicamentos zerou desperdícios por validade e batemos a nota máxima no Previne Brasil.',
    author: 'Dra. Mariana Castro',
    role: 'Secretária Municipal de Saúde',
    results: [
      'Nota 10 no indicador de desempenho do Ministério da Saúde',
      'Fila de exames reduzida em 60%',
      'Economia de R$ 380 mil na gestão de remédios'
    ]
  },
  {
    id: 'case-3',
    municipality: 'Câmara Municipal de Rio Claro',
    state: 'SP',
    population: '210.000 hab.',
    solutionUsed: 'GPI Contabilidade, Licitações & Transparência',
    metricHighlight: 'Nota 100 no Índice do TCE/SP',
    quote: 'A transição para a Nova Lei de Licitações foi extremamente tranquila com a assessoria e os sistemas da GPI. O Portal de Transparência foi premiado pelo Tribunal de Contas.',
    author: 'Carlos Eduardo Mendes',
    role: 'Presidente da Câmara Municipal',
    results: [
      '100% de adequação à Lei 14.133/21 em tempo recorde',
      'Selo Ouro de Transparência Pública',
      'Economia média de 18% em cada processo licitatório'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Nova Lei de Licitações (14.133/21): Como elaborar um ETP e PCA sem falhas jurídicas',
    category: 'Licitações',
    date: '10 de Setembro, 2026',
    readTime: '6 min de leitura',
    excerpt: 'Passo a passo prático para gestores públicos elaborarem o Plano de Contratações Anual e o Estudo Técnico Preliminar de forma integrada e segura.',
    content: `
      A transição completa para a Nova Lei de Licitações e Contratos Administrativos (Lei N.º 14.133/2021) é o principal desafio das administrações municipais. O novo regramento exige uma fase preparatória muito mais estruturada, onde o Estudo Técnico Preliminar (ETP) e o Plano de Contratações Anual (PCA) deixam de ser simples formalidades e passam a ser o pilar da eficiência do setor de compras.

      ### O que muda na prática com o ETP Digital?
      O ETP é o documento constitutivo da primeira etapa do planejamento de uma contratação. Nele, a administração pública demonstra a viabilidade técnica e econômica da solução escolhida. Com o GPI Compras & Licitações, os órgãos públicos conseguem:
      
      1. **Padronização de Minutas:** Modelos validados por consultoria jurídica especializada;
      2. **Pesquisa de Preços Automatizada:** Cruzamento com o Painel de Preços do Governo Federal e contratações similares de outros municípios;
      3. **Matriz de Riscos:** Mapeamento preventivo de potenciais gargalos antes da publicação do edital.

      A integração com o Portal Nacional de Contratações Públicas (PNCP) garante publicidade e atende aos requisitos de fiscalização dos Tribunais de Contas.
    `,
    author: 'Equipe de Consultoria Jurídica GPI',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'post-2',
    title: 'SIAFIC na Prática: Como garantir a unificação dos Poderes Executivo e Legislativo',
    category: 'Finanças Públicas',
    date: '04 de Setembro, 2026',
    readTime: '5 min de leitura',
    excerpt: 'Entenda os requisitos do Decreto 10.540/2020 e como manter a contabilidade municipal integrada em tempo real entre Prefeitura e Câmara.',
    content: `
      O Sistema Integrado de Administração Financeira e Controle (SIAFIC) estabeleceu um divisor de águas na gestão orçamentária dos municípios brasileiros. O Decreto 10.540/2020 determina que Prefeitura, Câmara Municipal, Autarquias e Fundos Públicos compartilhem um único software de contabilidade com base de dados unificada.

      ### Principais benefícios da plataforma única SIAFIC:
      - **Transparência Consolidada:** Dados contábeis e fiscais do município consolidados em tempo real;
      - **Matriz de Saldos Contábeis (MSC):** Envio simplificado para o SICONFI/STN sem inconsistências de conciliação;
      - **Controle Rigoroso dos Limites:** Alertas automáticos para gastos com Pessoal e limites da Saúde e Educação conforme a LRF.
    `,
    author: 'Prof. Marcos Vinícius (Contador Público)',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-3',
    title: 'Como o SOS Maria da Penha está salvando vidas em municípios do interior',
    category: 'Segurança & Proteção Social',
    date: '28 de Agosto, 2026',
    readTime: '7 min de leitura',
    excerpt: 'Conheça o case de sucesso da tecnologia aplicada à proteção das mulheres com medidas protetivas urgentes acionando a Guarda Municipal.',
    content: `
      A violência contra a mulher exige uma resposta pública rápida, coordenada e pautada na tecnologia. Em parceria com secretarias de segurança e o Poder Judiciário, o SOS Maria da Penha foi desenvolvido pela GPI Sistemas para garantir que a mulher sob medida protetiva possa pedir socorro em questão de segundos.

      ### Como funciona o acionamento em emergência:
      Ao pressionar o botão no aplicativo no celular, o sistema dispara:
      - Alerta sonoro e visual imediato no painel 24 horas da Guarda Municipal;
      - Coordenadas exatas por GPS com atualização em tempo real se a vítima estiver em deslocamento;
      - Gravação do áudio ambiente para documentar a abordagem e dar subsídio judicial à prisão em flagrante.
    `,
    author: 'Secretaria de Inovação Social GPI',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-4',
    title: 'Transformação Digital no SUAS: Otimizando o atendimento no CRAS e CREAS',
    category: 'Assistência Social',
    date: '15 de Agosto, 2026',
    readTime: '4 min de leitura',
    excerpt: 'Prontuário unificado do cidadão vulnerável garante entregas de auxílios sem duplicidade e com acompanhamento técnico contínuo.',
    content: `
      A assistência social lida com dados sensíveis das famílias em maior grau de vulnerabilidade. O Prontuário Eletrônico do SUAS unifica o histórico de atendimentos, permitindo que assistentes sociais e psicólogos acompanhem cada caso com dignidade, eficiência e respaldo técnico.
    `,
    author: 'Juliana Mendes (Especialista em SUAS)',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80'
  }
];

export const GPI_MATERIALS: Material[] = [
  {
    id: 'mat-1',
    title: 'Guia Definitivo da Nova Lei de Licitações (Lei 14.133/21) para Prefeituras',
    type: 'E-book',
    category: 'Compras Públicas',
    description: 'Manual completo com checklists, fluxogramas de processos, minutas de ETP e orientações para fiscalização contratual.',
    pages: '48 páginas',
    downloadsCount: '3.420 downloads',
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mat-2',
    title: 'Infográfico: Estruturação do SIAFIC no Poder Executivo e Legislativo',
    type: 'Infográfico',
    category: 'Finanças & Contabilidade',
    description: 'Esquema visual dos requisitos legais do Decreto 10.540/2020 e prazos do Tribunal de Contas.',
    pages: '1 página (poster)',
    downloadsCount: '1.890 downloads',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mat-3',
    title: 'Kit de Modelos de Termo de Referência (TR) e ETP para TI na Gestão Pública',
    type: 'Modelo TR',
    category: 'Licitações',
    description: 'Modelos editáveis em Word/PDF pré-aprovados por procuradores para contratação de softwares e serviços em nuvem.',
    pages: 'Modelos editáveis',
    downloadsCount: '2.150 downloads',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mat-4',
    title: 'E-book: LGPD na Administração Pública Municipal',
    type: 'E-book',
    category: 'Segurança & LGPD',
    description: 'Como adequar o tratamento de dados pessoais no portal de transparência, saúde e educação de acordo com a ANPD.',
    pages: '32 páginas',
    downloadsCount: '2.780 downloads',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
  }
];

export const GPI_FAQS = [
  {
    id: 'faq-1',
    question: 'O que é a GPI Sistemas?',
    answer: 'A GPI Sistemas atua no mercado de sistemas integrados de Gestão Pública, oferecendo soluções tecnológicas e serviços profissionais desenvolvidos para atender às necessidades e particularidades da Administração Pública.'
  },
  {
    id: 'faq-2',
    question: 'Para quais tipos de entidades a GPI Sistemas presta serviços?',
    answer: 'A GPI Sistemas presta serviços a Prefeituras, Câmaras, Autarquias, Consórcios e Fundação, atendendo municípios de diferentes portes.'
  },
  {
    id: 'faq-3',
    question: 'As soluções da GPI funcionam de forma integrada?',
    answer: 'Sim. A integração entre os módulos é um dos diferenciais das soluções da GPI Sistemas, permitindo o compartilhamento de dados e informações entre diferentes áreas da gestão e contribuindo para reduzir retrabalho e melhorar a eficiência dos processos.'
  },
  {
    id: 'faq-4',
    question: 'A GPI oferece suporte técnico?',
    answer: 'Sim. A GPI Sistemas conta com uma equipe de profissionais qualificados e experientes para atuar em atividades como implantação, treinamento e suporte técnico, além de orientar os usuários sobre as regras de negócio dos módulos.'
  },
  {
    id: 'faq-5',
    question: 'A GPI realiza implantação e migração de dados?',
    answer: 'A equipe da GPI possui profissionais com experiência em atividades de migração, implantação e treinamento, acompanhando o processo de implementação das soluções junto aos clientes.'
  },
  {
    id: 'faq-6',
    question: 'As soluções acompanham as atualizações da legislação?',
    answer: 'Sim. As soluções da GPI são desenvolvidas considerando a legislação e as normas vigentes aplicáveis ao setor público, e recebem atualizações relacionadas às mudanças das regras pertinentes aos seus módulos.'
  },
  {
    id: 'faq-7',
    question: 'Quais são as principais soluções oferecidas pela GPI?',
    answer: 'Atualmente o site apresenta soluções para Planejamento, Contabilidade e Finanças, Almoxarifado, Frota, Patrimônio, Recursos Humanos e Folha de Pagamento, Gerenciamento de Contratos, Diário Oficial e Portal de Acesso à Informação.'
  },
  {
    id: 'faq-8',
    question: 'Como funciona o controle de acesso aos sistemas?',
    answer: 'As soluções possuem controle de acesso por meio do cadastro de usuários e senhas, com definição de níveis de competência e atribuições e registro das movimentações realizadas no sistema.'
  },
  {
    id: 'faq-9',
    question: 'O que é o Portal de Acesso à Informação?',
    answer: 'É uma solução voltada à transparência pública, que permite disponibilizar informações e dados de interesse dos cidadãos. A plataforma também contempla recursos como o e-SIC e o e-OUV.'
  },
  {
    id: 'faq-10',
    question: 'Como posso conhecer melhor uma solução da GPI?',
    answer: 'Cada solução possui uma página específica no site com sua apresentação, informações detalhadas e vídeo demonstrativo quando disponível. O visitante também pode utilizar o botão “Fale com um especialista” para entrar em contato com a equipe da GPI.'
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'c1', name: 'Prefeitura M. de Novo Horizonte', type: 'Prefeitura', state: 'PR' },
  { id: 'c2', name: 'Câmara Municipal de São José', type: 'Câmara', state: 'SC' },
  { id: 'c3', name: 'Prefeitura M. de Rio Claro', type: 'Prefeitura', state: 'SP' },
  { id: 'c4', name: 'Instituto de Previdência de Cambé', type: 'Instituto', state: 'PR' },
  { id: 'c5', name: 'Prefeitura M. de Santo Antônio', type: 'Prefeitura', state: 'RS' },
  { id: 'c6', name: 'Serviço Autônomo de Água e Esgoto (SAAE)', type: 'Autarquia', state: 'MG' },
  { id: 'c7', name: 'Câmara Municipal de Pinhais', type: 'Câmara', state: 'PR' },
  { id: 'c8', name: 'Prefeitura M. de Castro', type: 'Prefeitura', state: 'PR' }
];
