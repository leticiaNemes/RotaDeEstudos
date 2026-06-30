const respostas = [
  {
    nome: "Letícia",
    faculdade: "Psicologia, Ciência de Dados ou Design Gráfico",
    horasEstudo: "0h, 1h ou 9h",
    materiaFacil: "Matérias da área de humanas",
    modoEstudo: "Sozinha",
    tecnologia: "Sim",
    salario: "12 mil ou mais",
    areaInteresse: "Humanas e comportamento, Tecnologia e dados, Design e criatividade",
    trabalharExterior: "Sim, ganhando em dólar ou euro",
    estudarFora: "Não, pretende estudar no Brasil",
    empresa: "Bosch"
  },
  {
    nome: "Grupo Isaac, Matheus Ricardo e Rafael",
    faculdade: "Nenhuma ou Medicina",
    horasEstudo: "1h a 3h por dia",
    materiaFacil: "Educação Física e Ciência de Dados",
    modoEstudo: "Sozinho",
    tecnologia: "Talvez ou não informado",
    salario: "De 4 mil a 20 mil",
    areaInteresse: "Saúde e bem-estar, Tecnologia e dados, Esportes e movimento",
    trabalharExterior: "Sim",
    estudarFora: "No Brasil",
    empresa: "Nenhuma empresa específica"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  configurarFormulario();
  configurarDiarioEstudos();
  carregarAnotacoesSalvas();
});

function configurarFormulario() {
  const form = document.getElementById("formPlano");

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const faculdade = document.getElementById("faculdade").value;
    const horas = Number(document.getElementById("horas").value);
    const modo = document.getElementById("modoEstudo").value;
    const exterior = document.getElementById("exterior").value;

    const area = identificarAreaPeloObjetivo(faculdade);

    gerarPlano(nome, faculdade, area, horas, modo, exterior);
    mostrarGrupoEstudo(nome, area, modo);
  });
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function identificarAreaPeloObjetivo(texto) {
  const objetivo = normalizarTexto(texto);

  if (
    objetivo.includes("medicina") ||
    objetivo.includes("enfermagem") ||
    objetivo.includes("nutricao") ||
    objetivo.includes("fisioterapia") ||
    objetivo.includes("odontologia") ||
    objetivo.includes("farmacia") ||
    objetivo.includes("biomedicina") ||
    objetivo.includes("saude")
  ) {
    return "Saúde e bem-estar";
  }

  if (
    objetivo.includes("educacao fisica") ||
    objetivo.includes("esporte") ||
    objetivo.includes("personal") ||
    objetivo.includes("treinador") ||
    objetivo.includes("preparador fisico")
  ) {
    return "Esportes e movimento";
  }

  if (
    objetivo.includes("ciencia de dados") ||
    objetivo.includes("dados") ||
    objetivo.includes("programacao") ||
    objetivo.includes("sistemas") ||
    objetivo.includes("computacao") ||
    objetivo.includes("software") ||
    objetivo.includes("tecnologia") ||
    objetivo.includes("cyber") ||
    objetivo.includes("ciber") ||
    objetivo.includes("seguranca da informacao") ||
    objetivo.includes("informatica")
  ) {
    return "Tecnologia e dados";
  }

  if (
    objetivo.includes("psicologia") ||
    objetivo.includes("sociologia") ||
    objetivo.includes("filosofia") ||
    objetivo.includes("servico social") ||
    objetivo.includes("historia")
  ) {
    return "Humanas e comportamento";
  }

  if (
    objetivo.includes("design") ||
    objetivo.includes("moda") ||
    objetivo.includes("arquitetura") ||
    objetivo.includes("artes") ||
    objetivo.includes("desenho")
  ) {
    return "Design e criatividade";
  }

  if (
    objetivo.includes("administracao") ||
    objetivo.includes("gestao") ||
    objetivo.includes("contabilidade") ||
    objetivo.includes("economia") ||
    objetivo.includes("empreendedorismo") ||
    objetivo.includes("recursos humanos")
  ) {
    return "Negócios e administração";
  }

  if (
    objetivo.includes("direito") ||
    objetivo.includes("relacoes internacionais") ||
    objetivo.includes("ciencias sociais")
  ) {
    return "Direito e sociedade";
  }

  if (
    objetivo.includes("pedagogia") ||
    objetivo.includes("licenciatura") ||
    objetivo.includes("educacao") ||
    objetivo.includes("professor") ||
    objetivo.includes("ensino")
  ) {
    return "Educação";
  }

  if (
    objetivo.includes("engenharia") ||
    objetivo.includes("matematica") ||
    objetivo.includes("fisica") ||
    objetivo.includes("quimica") ||
    objetivo.includes("estatistica")
  ) {
    return "Engenharia e exatas";
  }

  if (
    objetivo.includes("marketing") ||
    objetivo.includes("jornalismo") ||
    objetivo.includes("publicidade") ||
    objetivo.includes("propaganda") ||
    objetivo.includes("comunicacao") ||
    objetivo.includes("midias")
  ) {
    return "Comunicação e marketing";
  }

  return "Ainda não sei";
}

function obterPlanoDetalhado(area) {
  const planos = {
    "Saúde e bem-estar": {
      foco: "Entender o corpo humano, saúde, bem-estar, cuidado com pessoas e qualidade de vida.",
      ondeTrabalhar: [
        "Hospitais, clínicas e postos de saúde",
        "Laboratórios, farmácias ou centros de pesquisa",
        "Clínicas particulares e atendimento especializado",
        "Escolas, empresas, academias ou projetos de saúde",
        "Áreas de prevenção, reabilitação ou acompanhamento de pacientes"
      ],
      materiasCurso: [
        "Anatomia",
        "Biologia celular",
        "Fisiologia",
        "Química",
        "Bioquímica",
        "Saúde coletiva",
        "Ética profissional",
        "Psicologia aplicada à saúde"
      ],
      basicoAtuar: [
        "Ter responsabilidade e cuidado com pessoas",
        "Saber se comunicar com clareza",
        "Gostar de estudar o corpo humano",
        "Entender noções básicas de Biologia e Química",
        "Ter paciência, empatia e atenção aos detalhes"
      ],
      estudar: [
        "Biologia: células, sistemas do corpo humano e funcionamento do organismo",
        "Química básica: substâncias, reações simples e relação com o corpo",
        "Leitura e interpretação: textos sobre saúde, comportamento e qualidade de vida",
        "Atualidades: saúde mental, alimentação, exercícios e prevenção"
      ],
      comoEstudar: [
        "Comece fazendo resumos curtos sobre cada sistema do corpo humano.",
        "Use desenhos e mapas mentais para visualizar órgãos e funções.",
        "Assista aulas curtas e depois explique o conteúdo com suas palavras.",
        "Resolva questões simples de Biologia e Química para fixar."
      ],
      pratica: "Criar um mapa mental sobre corpo humano, saúde mental ou qualidade de vida.",
      primeiroMes: [
        "Semana 1: estudar introdução à Biologia e corpo humano.",
        "Semana 2: estudar Química básica aplicada à saúde.",
        "Semana 3: ler textos sobre saúde, comportamento e bem-estar.",
        "Semana 4: montar um resumo visual ou apresentação sobre um tema de saúde."
      ]
    },

    "Tecnologia e dados": {
      foco: "Aprender a organizar informações, resolver problemas e criar soluções usando tecnologia.",
      ondeTrabalhar: [
        "Empresas de tecnologia",
        "Bancos, startups e empresas de dados",
        "Áreas de programação, análise de dados ou suporte técnico",
        "Empresas que usam sistemas, sites e aplicativos",
        "Trabalho remoto como desenvolvedor, analista ou freelancer"
      ],
      materiasCurso: [
        "Lógica de programação",
        "Algoritmos",
        "Banco de dados",
        "Estatística",
        "Desenvolvimento web",
        "Estrutura de dados",
        "Análise de dados",
        "Segurança da informação"
      ],
      basicoAtuar: [
        "Saber resolver problemas com lógica",
        "Entender programação básica",
        "Saber organizar e interpretar dados",
        "Ter paciência para testar, errar e corrigir",
        "Criar projetos para mostrar o que sabe fazer"
      ],
      estudar: [
        "Lógica de programação: variáveis, condições, repetições e funções",
        "HTML e CSS: estrutura e aparência de páginas",
        "JavaScript: interação, formulários e manipulação de dados",
        "Planilhas e gráficos: organização e visualização de informações"
      ],
      comoEstudar: [
        "Comece criando pequenos códigos, não apenas assistindo aula.",
        "Faça um arquivo por dia com um exercício simples.",
        "Use exemplos reais, como lista de notas, rotina de estudos ou pesquisa com alunos.",
        "Depois de estudar, tente modificar o código sem copiar."
      ],
      pratica: "Criar uma página simples que recebe dados de uma pessoa e mostra uma recomendação.",
      primeiroMes: [
        "Semana 1: estudar lógica de programação e variáveis.",
        "Semana 2: estudar HTML e CSS criando páginas simples.",
        "Semana 3: estudar JavaScript com botões, formulários e arrays.",
        "Semana 4: criar um mini projeto com dados, cards e recomendações."
      ]
    },

    "Humanas e comportamento": {
      foco: "Entender pessoas, sociedade, comunicação, comportamento e relações humanas.",
      ondeTrabalhar: [
        "Escolas, ONGs e projetos sociais",
        "Empresas na área de pessoas, atendimento ou comportamento",
        "Clínicas, consultorias ou instituições de apoio",
        "Pesquisa, educação ou desenvolvimento humano",
        "Áreas de comunicação, mediação e orientação"
      ],
      materiasCurso: [
        "Sociologia",
        "Filosofia",
        "Psicologia básica",
        "Antropologia",
        "Comunicação",
        "Ética",
        "Metodologia de pesquisa",
        "Leitura e produção de textos"
      ],
      basicoAtuar: [
        "Gostar de ler e interpretar textos",
        "Saber observar comportamentos e situações sociais",
        "Ter empatia e boa comunicação",
        "Conseguir argumentar com clareza",
        "Entender diferentes opiniões e contextos"
      ],
      estudar: [
        "Sociologia: sociedade, cultura, grupos sociais e desigualdade",
        "Filosofia: pensamento crítico, ética e formas de argumentar",
        "Psicologia básica: emoções, comportamento e relações humanas",
        "Interpretação de texto: leitura crítica e identificação de ideias principais"
      ],
      comoEstudar: [
        "Leia textos curtos e marque as ideias principais.",
        "Faça resumos com exemplos do cotidiano.",
        "Compare opiniões diferentes sobre o mesmo tema.",
        "Treine escrever pequenos parágrafos argumentativos."
      ],
      pratica: "Criar um texto ou apresentação sobre comportamento, sociedade ou escolhas profissionais.",
      primeiroMes: [
        "Semana 1: estudar cultura, sociedade e grupos sociais.",
        "Semana 2: estudar ética, pensamento crítico e argumentação.",
        "Semana 3: estudar comportamento humano e comunicação.",
        "Semana 4: produzir um texto ou mapa mental sobre um tema social."
      ]
    },

    "Design e criatividade": {
      foco: "Aprender a criar materiais visuais bonitos, organizados e com boa comunicação.",
      ondeTrabalhar: [
        "Agências de publicidade e marketing",
        "Empresas de design, moda ou criação visual",
        "Editoras, produtoras e áreas de comunicação",
        "Redes sociais, criação de conteúdo e identidade visual",
        "Trabalho freelancer criando artes, marcas e materiais digitais"
      ],
      materiasCurso: [
        "Desenho",
        "Composição visual",
        "Cores",
        "Tipografia",
        "Fotografia",
        "Design digital",
        "História da arte",
        "Ferramentas de criação"
      ],
      basicoAtuar: [
        "Ter criatividade e senso visual",
        "Saber combinar cores, fontes e imagens",
        "Conhecer ferramentas como Canva, Figma ou Photoshop",
        "Montar portfólio com trabalhos próprios",
        "Entender o objetivo da comunicação visual"
      ],
      estudar: [
        "Cores: combinação, contraste e harmonia visual",
        "Tipografia: escolha de fontes e hierarquia de textos",
        "Composição: alinhamento, espaçamento e organização dos elementos",
        "Ferramentas: Canva, Figma ou outro editor visual"
      ],
      comoEstudar: [
        "Analise posts, cartazes e sites para entender o que funciona visualmente.",
        "Recrie layouts simples para treinar composição.",
        "Monte uma pasta com referências visuais.",
        "Crie peças próprias e compare versões antes e depois."
      ],
      pratica: "Criar três artes: um cartaz, um post de rede social e uma capa de apresentação.",
      primeiroMes: [
        "Semana 1: estudar cores e combinações.",
        "Semana 2: estudar fontes, títulos e organização visual.",
        "Semana 3: praticar no Canva ou Figma.",
        "Semana 4: montar um pequeno portfólio com 3 criações."
      ]
    },

    "Negócios e administração": {
      foco: "Aprender organização, planejamento, comunicação e noções de gestão.",
      ondeTrabalhar: [
        "Empresas privadas de diferentes setores",
        "Comércio, indústria, bancos e escritórios",
        "Áreas administrativas, financeiras ou comerciais",
        "Recursos humanos, compras, vendas e atendimento",
        "Empreendimentos próprios ou pequenos negócios"
      ],
      materiasCurso: [
        "Administração",
        "Contabilidade básica",
        "Economia",
        "Matemática financeira",
        "Gestão de pessoas",
        "Marketing",
        "Planejamento estratégico",
        "Empreendedorismo"
      ],
      basicoAtuar: [
        "Saber se organizar e cumprir prazos",
        "Entender noções de dinheiro, custo e lucro",
        "Ter boa comunicação profissional",
        "Saber usar planilhas e documentos",
        "Conseguir resolver problemas do dia a dia"
      ],
      estudar: [
        "Matemática básica: porcentagem, média, lucro e custo",
        "Organização: metas, tarefas, prazos e prioridades",
        "Noções de economia: consumo, preço, mercado e dinheiro",
        "Comunicação profissional: e-mails, apresentações e postura"
      ],
      comoEstudar: [
        "Use exemplos reais, como controle de gastos ou planejamento de uma loja.",
        "Crie tabelas simples para organizar informações.",
        "Faça simulações de orçamento, lucro e preço.",
        "Treine explicar uma ideia de forma clara e objetiva."
      ],
      pratica: "Criar um plano simples de negócio com custo, preço, público e divulgação.",
      primeiroMes: [
        "Semana 1: estudar porcentagem, média e organização financeira.",
        "Semana 2: estudar planejamento e controle de tarefas.",
        "Semana 3: estudar noções de mercado e comunicação.",
        "Semana 4: montar um plano simples de negócio ou projeto."
      ]
    },

    "Direito e sociedade": {
      foco: "Desenvolver leitura, argumentação, interpretação e compreensão da sociedade.",
      ondeTrabalhar: [
        "Escritórios de advocacia",
        "Empresas, bancos e departamentos jurídicos",
        "Órgãos públicos, tribunais e cartórios",
        "Áreas de compliance, contratos e consultoria",
        "Carreiras públicas mediante concurso"
      ],
      materiasCurso: [
        "Introdução ao Direito",
        "Direito Civil",
        "Direito Penal",
        "Direito Constitucional",
        "Direito do Trabalho",
        "Direito Tributário",
        "Ética profissional",
        "Português jurídico"
      ],
      basicoAtuar: [
        "Ler e interpretar textos com atenção",
        "Saber escrever bem",
        "Ter boa argumentação",
        "Entender regras, leis e responsabilidades",
        "Gostar de estudar atualidades e sociedade"
      ],
      estudar: [
        "Interpretação de texto: ideia principal, argumentos e conclusão",
        "Atualidades: temas sociais, políticos e econômicos",
        "História e sociologia: sociedade, cidadania e instituições",
        "Escrita argumentativa: defender uma opinião com lógica"
      ],
      comoEstudar: [
        "Leia notícias e tente resumir o problema principal.",
        "Escreva pequenos textos defendendo um ponto de vista.",
        "Treine separar fato, opinião e argumento.",
        "Monte fichamentos simples dos textos lidos."
      ],
      pratica: "Escrever um texto argumentativo sobre um problema social atual.",
      primeiroMes: [
        "Semana 1: treinar interpretação de textos e notícias.",
        "Semana 2: estudar cidadania, sociedade e instituições.",
        "Semana 3: praticar escrita argumentativa.",
        "Semana 4: produzir um texto com introdução, argumentos e conclusão."
      ]
    },

    "Educação": {
      foco: "Aprender a comunicar ideias, organizar conteúdos e explicar assuntos com clareza.",
      ondeTrabalhar: [
        "Escolas públicas e particulares",
        "Cursos, reforço escolar e aulas particulares",
        "Projetos sociais e educacionais",
        "Editoras, produção de material didático e plataformas de ensino",
        "Coordenação pedagógica e apoio educacional"
      ],
      materiasCurso: [
        "Didática",
        "Psicologia da educação",
        "Alfabetização",
        "Metodologia de ensino",
        "Gestão escolar",
        "Educação inclusiva",
        "Planejamento de aula",
        "Avaliação da aprendizagem"
      ],
      basicoAtuar: [
        "Gostar de ensinar e explicar",
        "Ter paciência e comunicação clara",
        "Saber organizar conteúdos",
        "Entender diferentes formas de aprendizagem",
        "Criar atividades e acompanhar a evolução dos alunos"
      ],
      estudar: [
        "Leitura e escrita: interpretação e produção de textos",
        "Comunicação: fala clara, escuta e explicação",
        "Didática: formas de ensinar e organizar conteúdo",
        "Planejamento: criação de roteiro de estudo ou aula"
      ],
      comoEstudar: [
        "Escolha um conteúdo simples e tente explicar para outra pessoa.",
        "Crie resumos, mapas mentais e pequenos roteiros.",
        "Grave sua explicação para perceber pontos de melhoria.",
        "Observe como professores organizam aulas e atividades."
      ],
      pratica: "Criar uma mini aula ou apresentação explicando um tema que você domina.",
      primeiroMes: [
        "Semana 1: estudar leitura, escrita e organização de ideias.",
        "Semana 2: treinar explicações curtas.",
        "Semana 3: criar mapas mentais e atividades.",
        "Semana 4: montar e apresentar uma mini aula."
      ]
    },

    "Engenharia e exatas": {
      foco: "Fortalecer raciocínio lógico, matemática, física e resolução de problemas.",
      ondeTrabalhar: [
        "Indústrias, construtoras e empresas de engenharia",
        "Laboratórios, fábricas e áreas técnicas",
        "Empresas de tecnologia, produção e processos",
        "Consultorias, projetos e manutenção",
        "Áreas de pesquisa, planejamento e desenvolvimento"
      ],
      materiasCurso: [
        "Cálculo",
        "Física",
        "Química",
        "Geometria analítica",
        "Álgebra",
        "Estatística",
        "Desenho técnico",
        "Resistência dos materiais"
      ],
      basicoAtuar: [
        "Ter raciocínio lógico",
        "Gostar de resolver problemas",
        "Saber matemática básica muito bem",
        "Interpretar gráficos, medidas e fórmulas",
        "Ter atenção, organização e pensamento prático"
      ],
      estudar: [
        "Matemática: frações, porcentagem, equações e funções",
        "Física: movimento, força, energia e eletricidade básica",
        "Raciocínio lógico: padrões, problemas e sequências",
        "Interpretação de problemas: identificar dados e o que está sendo pedido"
      ],
      comoEstudar: [
        "Resolva exercícios todos os dias, mesmo que poucos.",
        "Anote os erros e refaça depois sem olhar a resposta.",
        "Separe fórmulas importantes e escreva exemplos de uso.",
        "Comece pelo básico antes de ir para exercícios difíceis."
      ],
      pratica: "Montar uma lista resolvida com 10 exercícios comentados.",
      primeiroMes: [
        "Semana 1: revisar matemática básica e porcentagem.",
        "Semana 2: estudar equações e funções simples.",
        "Semana 3: estudar física básica com exemplos.",
        "Semana 4: resolver exercícios e montar uma lista comentada."
      ]
    },

    "Comunicação e marketing": {
      foco: "Aprender a criar mensagens, divulgar ideias e se comunicar com públicos diferentes.",
      ondeTrabalhar: [
        "Agências de publicidade e marketing",
        "Empresas na área de comunicação e redes sociais",
        "Jornais, revistas, produtoras e portais digitais",
        "E-commerce, vendas e criação de conteúdo",
        "Trabalho freelancer com textos, campanhas e mídias sociais"
      ],
      materiasCurso: [
        "Marketing",
        "Comunicação digital",
        "Redação publicitária",
        "Mídias sociais",
        "Pesquisa de mercado",
        "Fotografia",
        "Produção de conteúdo",
        "Comportamento do consumidor"
      ],
      basicoAtuar: [
        "Saber escrever bem",
        "Entender o público que quer atingir",
        "Ter criatividade para criar campanhas",
        "Conhecer redes sociais e comunicação digital",
        "Saber analisar resultados e melhorar estratégias"
      ],
      estudar: [
        "Escrita criativa: títulos, legendas e textos curtos",
        "Comunicação digital: redes sociais, público e linguagem",
        "Marketing básico: produto, público, divulgação e valor",
        "Imagem e conteúdo: posts, vídeos, apresentações e identidade"
      ],
      comoEstudar: [
        "Analise perfis, campanhas e anúncios para entender estratégias.",
        "Escreva legendas e chamadas para temas diferentes.",
        "Crie posts simulando divulgação de produtos ou ideias.",
        "Teste versões diferentes do mesmo texto e compare."
      ],
      pratica: "Criar uma campanha simples com 3 posts e uma ideia de divulgação.",
      primeiroMes: [
        "Semana 1: estudar público-alvo e comunicação.",
        "Semana 2: treinar escrita de títulos e legendas.",
        "Semana 3: criar posts e conteúdos simples.",
        "Semana 4: montar uma campanha completa de divulgação."
      ]
    },

    "Esportes e movimento": {
      foco: "Entender corpo, movimento, saúde, esporte e qualidade de vida.",
      ondeTrabalhar: [
        "Academias e centros esportivos",
        "Escolas, clubes e projetos sociais",
        "Treinamento físico personalizado",
        "Equipes esportivas e preparação física",
        "Áreas de saúde, bem-estar e qualidade de vida"
      ],
      materiasCurso: [
        "Anatomia",
        "Fisiologia",
        "Biomecânica",
        "Treinamento esportivo",
        "Nutrição básica",
        "Primeiros socorros",
        "Esportes coletivos",
        "Saúde e qualidade de vida"
      ],
      basicoAtuar: [
        "Entender o funcionamento do corpo",
        "Gostar de esportes e movimento",
        "Saber orientar exercícios com responsabilidade",
        "Ter comunicação e cuidado com pessoas",
        "Conhecer prevenção de lesões e hábitos saudáveis"
      ],
      estudar: [
        "Biologia: músculos, ossos, respiração e energia",
        "Anatomia básica: partes do corpo e funções",
        "Saúde: alimentação, descanso e prevenção de lesões",
        "Esportes: regras, treino, disciplina e desempenho"
      ],
      comoEstudar: [
        "Relacione teoria com práticas esportivas reais.",
        "Faça resumos com desenhos do corpo humano.",
        "Pesquise sobre modalidades esportivas e tipos de treino.",
        "Observe como alimentação, descanso e treino influenciam resultados."
      ],
      pratica: "Criar uma rotina semanal de atividade física com explicação dos benefícios.",
      primeiroMes: [
        "Semana 1: estudar corpo humano e movimento.",
        "Semana 2: estudar alimentação, descanso e saúde.",
        "Semana 3: estudar modalidades esportivas e treinos.",
        "Semana 4: montar uma rotina de exercícios com justificativa."
      ]
    },

    "Ainda não sei": {
      foco: "Descobrir interesses antes de escolher uma área definitiva.",
      ondeTrabalhar: [
        "Ainda depende da área escolhida",
        "Projetos escolares, cursos e atividades de teste",
        "Trabalhos iniciais como jovem aprendiz ou estágio",
        "Áreas que permitam conhecer diferentes profissões",
        "Atividades voluntárias ou projetos práticos"
      ],
      materiasCurso: [
        "Português e interpretação",
        "Matemática básica",
        "Atualidades",
        "Tecnologia básica",
        "Comunicação",
        "Inglês inicial",
        "Organização de estudos",
        "Autoconhecimento"
      ],
      basicoAtuar: [
        "Pesquisar profissões antes de decidir",
        "Conhecer seus interesses e dificuldades",
        "Testar atividades de áreas diferentes",
        "Conversar com pessoas que trabalham nas áreas",
        "Criar uma rotina simples de estudo"
      ],
      estudar: [
        "Autoconhecimento: matérias que você gosta e não gosta",
        "Pesquisa de profissões: rotina, salário, faculdade e mercado",
        "Testes vocacionais: usar como apoio, não como decisão final",
        "Conversas: falar com pessoas que trabalham em áreas diferentes"
      ],
      comoEstudar: [
        "Anote três áreas que chamam sua atenção.",
        "Pesquise vídeos curtos sobre cada profissão.",
        "Compare rotina, matérias da faculdade e possibilidades de trabalho.",
        "Teste uma atividade prática de cada área antes de escolher."
      ],
      pratica: "Criar uma tabela comparando 3 profissões possíveis.",
      primeiroMes: [
        "Semana 1: listar interesses, matérias favoritas e habilidades.",
        "Semana 2: pesquisar 3 profissões diferentes.",
        "Semana 3: conversar com alguém ou assistir entrevistas sobre as áreas.",
        "Semana 4: escolher uma área para testar por mais um mês."
      ]
    }
  };

  return planos[area] || planos["Ainda não sei"];
}

function organizarTempo(horas) {
  if (horas <= 0) {
    return "Comece com uma rotina pequena, mesmo que seja 20 minutos por dia. O mais importante no início é criar constância.";
  }

  if (horas <= 1) {
    return "Use o tempo para estudar um tema por dia. Com pouco tempo, é melhor estudar com foco do que tentar fazer muita coisa ao mesmo tempo.";
  }

  if (horas <= 3) {
    return "Divida o tempo entre teoria, prática e revisão. Essa é uma rotina equilibrada para evoluir durante a semana.";
  }

  return "Separe o estudo em blocos. Por exemplo: teoria, exercícios, projeto e revisão. Também faça pausas para não cansar demais.";
}

function gerarPlano(nome, faculdade, area, horas, modo, exterior) {
  const resultado = document.getElementById("resultadoPlano");
  const plano = obterPlanoDetalhado(area);
  const organizacao = organizarTempo(horas);

  let dicaModoEstudo = "";

  if (modo === "sozinho") {
    dicaModoEstudo = `
      Estude com metas pequenas. Exemplo: em vez de escrever "vou estudar Biologia",
      escreva "vou estudar sistema respiratório por 40 minutos e fazer 5 questões".
      Use checklist, resumo curto e revisão no fim da semana.
    `;
  } else {
    dicaModoEstudo = `
      Combine com o grupo um tema por encontro. Cada pessoa pode explicar uma parte.
      Depois, todos fazem perguntas e montam um resumo final. O WhatsApp pode ser usado
      para marcar horários, enviar materiais e tirar dúvidas rápidas.
    `;
  }

  let dicaExterior = "";

  if (exterior === "sim") {
    dicaExterior = `
      Separe pelo menos um dia da semana para inglês. Também comece a montar um currículo
      simples, um perfil no LinkedIn e um portfólio com atividades, projetos ou experiências.
    `;
  } else if (exterior === "talvez") {
    dicaExterior = `
      Mesmo sem decisão agora, estudar inglês aos poucos deixa essa possibilidade aberta.
      Comece com vocabulário da sua área e vídeos curtos com legenda.
    `;
  } else {
    dicaExterior = `
      Foque primeiro no mercado brasileiro, mas mantenha currículo organizado, experiências
      práticas e noções de inglês, porque isso também ajuda em vagas nacionais.
    `;
  }

  resultado.innerHTML = `
    <h3>Plano de estudos de ${nome}</h3>

    <div class="area-identificada">
      Área identificada automaticamente: ${area}
    </div>

    <div class="resultado-bloco">
      <h4>Objetivo principal</h4>

      <p>
        Você pretende fazer <strong>${faculdade}</strong>. Pela análise do seu objetivo,
        o site identificou que ele combina mais com <strong>${area}</strong>.
      </p>

      <p>
        <strong>Direção inicial:</strong> ${plano.foco}
      </p>
    </div>

    <div class="resultado-bloco">
      <h4>Onde você pode trabalhar</h4>

      <ul>
        ${plano.ondeTrabalhar.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    </div>

    <div class="resultado-bloco">
      <h4>Matérias que podem aparecer no curso</h4>

      <ul>
        ${plano.materiasCurso.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    </div>

    <div class="resultado-bloco">
      <h4>O básico que precisa saber para atuar na área</h4>

      <ul>
        ${plano.basicoAtuar.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    </div>

    <div class="resultado-bloco">
      <h4>O que estudar primeiro</h4>

      <ul>
        ${plano.estudar.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    </div>

    <div class="resultado-bloco">
      <h4>Como estudar na prática</h4>

      <ul>
        ${plano.comoEstudar.map(function (item) {
          return `<li>${item}</li>`;
        }).join("")}
      </ul>
    </div>

    <div class="resultado-bloco destaque-plano">
      <h4>Primeira atividade prática</h4>

      <p>${plano.pratica}</p>
    </div>

    <div class="resultado-bloco">
      <h4>Plano para o primeiro mês</h4>

      <ul>
        ${plano.primeiroMes.map(function (semana) {
          return `<li>${semana}</li>`;
        }).join("")}
      </ul>
    </div>

    <div class="resultado-bloco">
      <h4>Organização do tempo</h4>

      <p>
        Você informou que tem aproximadamente <strong>${horas} hora(s) por dia</strong>.
      </p>

      <p>${organizacao}</p>
    </div>

    <div class="resultado-bloco">
      <h4>Melhor forma de estudar</h4>

      <p>${dicaModoEstudo}</p>
    </div>

    <div class="resultado-bloco">
      <h4>Da escolha ao trabalho</h4>

      <ul>
        <li>Pesquisar a rotina real da profissão.</li>
        <li>Entender quais matérias aparecem na faculdade.</li>
        <li>Aprender os conteúdos básicos antes de avançar.</li>
        <li>Fazer atividades práticas para testar se gosta da área.</li>
        <li>Guardar seus projetos, resumos ou produções em uma pasta.</li>
        <li>Montar currículo quando tiver cursos, atividades ou experiências.</li>
        <li>Buscar estágio, jovem aprendiz, voluntariado ou projetos escolares.</li>
      </ul>
    </div>

    <div class="resultado-bloco">
      <h4>Trabalhar ou estudar fora do Brasil</h4>

      <p>${dicaExterior}</p>
    </div>
  `;
}

/* DIÁRIO / CADERNO DE ESTUDOS */

function configurarDiarioEstudos() {
  const formDiario = document.getElementById("formDiario");
  const dataDiario = document.getElementById("dataDiario");

  if (dataDiario) {
    const hoje = new Date().toISOString().split("T")[0];
    dataDiario.value = hoje;
  }

  if (!formDiario) {
    return;
  }

  formDiario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const data = document.getElementById("dataDiario").value;
    const tema = document.getElementById("temaDiario").value;
    const texto = document.getElementById("textoDiario").value;

    const novaAnotacao = {
      id: Date.now(),
      data: data,
      tema: tema,
      texto: texto
    };

    const anotacoes = carregarAnotacoes();

    anotacoes.unshift(novaAnotacao);

    localStorage.setItem("diarioEstudos", JSON.stringify(anotacoes));

    formDiario.reset();

    const hoje = new Date().toISOString().split("T")[0];
    document.getElementById("dataDiario").value = hoje;

    carregarAnotacoesSalvas();

    alert("Anotação salva no diário de estudos!");
  });
}

function carregarAnotacoes() {
  const dados = localStorage.getItem("diarioEstudos");

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

function carregarAnotacoesSalvas() {
  const lista = document.getElementById("listaAnotacoes");

  if (!lista) {
    return;
  }

  const anotacoes = carregarAnotacoes();

  if (anotacoes.length === 0) {
    lista.innerHTML = `
      <p>
        Nenhuma anotação salva ainda. Use o diário para registrar o que estudou.
      </p>
    `;
    return;
  }

  lista.innerHTML = anotacoes.map(function (anotacao) {
    return `
      <div class="anotacao-card">
        <h5>${anotacao.tema}</h5>
        <span>${formatarData(anotacao.data)}</span>
        <p>${anotacao.texto}</p>

        <button
          type="button"
          class="botao-apagar"
          onclick="apagarAnotacao(${anotacao.id})"
        >
          Apagar anotação
        </button>
      </div>
    `;
  }).join("");
}

function apagarAnotacao(id) {
  const anotacoes = carregarAnotacoes();

  const anotacoesAtualizadas = anotacoes.filter(function (anotacao) {
    return anotacao.id !== id;
  });

  localStorage.setItem("diarioEstudos", JSON.stringify(anotacoesAtualizadas));

  carregarAnotacoesSalvas();
}

function formatarData(data) {
  if (!data) {
    return "Sem data";
  }

  const partes = data.split("-");

  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

/* GRUPO DE ESTUDOS */

function mostrarGrupoEstudo(nome, area, modo) {
  const areaGrupo = document.getElementById("areaGrupoEstudo");
  const infoGrupo = document.getElementById("infoGrupo");
  const botaoWhatsapp = document.getElementById("botaoWhatsapp");

  if (modo !== "grupo") {
    areaGrupo.classList.add("escondido");
    return;
  }

  areaGrupo.classList.remove("escondido");

  const colegasComMesmoObjetivo = respostas.filter(function (resposta) {
    const faculdade = normalizarTexto(resposta.faculdade);
    const areaInteresse = normalizarTexto(resposta.areaInteresse);
    const areaEscolhida = normalizarTexto(area);

    return faculdade.includes(areaEscolhida) || areaInteresse.includes(areaEscolhida);
  });

  const mensagemGrupo = `Olá! Meu nome é ${nome}. Quero participar ou criar um grupo de estudos para pessoas com interesse em ${area}.`;
  const linkWhatsapp = `https://wa.me/?text=${encodeURIComponent(mensagemGrupo)}`;

  botaoWhatsapp.href = linkWhatsapp;

  if (colegasComMesmoObjetivo.length > 0) {
    infoGrupo.innerHTML = `
      <p>Encontramos perfis com interesse parecido:</p>

      ${colegasComMesmoObjetivo.map(function (colega) {
        return `
          <div class="card-colega">
            <strong>${colega.nome}</strong>
            <p>Interesse: ${colega.faculdade}</p>
            <p>Área citada: ${colega.areaInteresse}</p>
          </div>
        `;
      }).join("")}
    `;
  } else {
    infoGrupo.innerHTML = `
      <p>
        Ainda não encontramos alguém exatamente na mesma área,
        mas você pode criar um grupo de estudos para esse objetivo.
      </p>
    `;
  }
}
