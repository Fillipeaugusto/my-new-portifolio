interface Features {
	name: string;
	description: string;
}

interface Images {
	src: string;
	alt: string;
}
interface Functions {
	name: string;
}

interface Project {
	id: number;
	name: string;
	description: string;
	technology: string;
	cover?: {
		src?: string;
		alt?: string;
	};
	features?: Features[];
	slug: string;
	images?: Images[];
	downloadUrl?: string;
	instructions?: string;
	functions?: Functions[];
}

export const Projects: Project[] = [
	{
		id: 1,
		name: 'Ig News',
		description:
			'O Ig.news é uma plataforma de assinatura para conteúdos em texto dedicada para desenvolvedores, o objetivo da plataforma é gerar conteúdos em texto e imagens para a comunidade de desenvolvedores.',
		cover: {
			src: '/assets/projects/ig-news/Home.png',
			alt: 'Project 2',
		},
		technology: 'React Js ,Next Js ,NextAuth',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: '/assets/projects/ig-news/Home.png',
				alt: 'img1',
			},
			{
				src: '/assets/projects/ig-news/Posts.png',
				alt: 'img2',
			},
			{
				src: '/assets/projects/ig-news/InternadePost_n_logado.png',
				alt: 'img3',
			},
			{
				src: '/assets/projects/ig-news/InternadePost.png',
				alt: 'img4',
			},
		],
		downloadUrl:
			'https://codeload.github.com/Fillipeaugusto/ig-news/zip/refs/heads/main',
		instructions:
			'Baixe os arquivos, descompacte, execute o comando yarn e após isso o comando yarn dev o App deverá inicializar em localhost:3000.',
		functions: [
			{ name: 'Cadastro de usuário' },
			{ name: 'Listagem de posts' },
			{ name: 'Assinatura com stripe' },
			{ name: 'Login com Github' },
			{ name: 'Sessão com Next Auth' },
		],
		slug: 'ig-news',
	},
	{
		id: 2,
		name: 'Dev Finances',
		description:
			'O Dev Finances é um projeto de controle de contas pessoais com controle de recebimentos e pagamentos, assim como calculo dos totais.',
		cover: {
			src: '/assets/projects/dev-finances/inicio.png',
			alt: 'Project 1',
		},
		technology: 'React Js',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: '/assets/projects/dev-finances/inicio.png',
				alt: 'img1',
			},
		],
		downloadUrl:
			'https://codeload.github.com/Fillipeaugusto/finances/zip/refs/heads/main',
		instructions:
			'Para usar a plataforma faça login com seu Github, e prossiga para a página de assinatura, na parte de pagamento use o cartão 4242-4242-4242-4242, e preencha as outras informações aleatoriamente, após isso voê terá com sucesso uma assinatura e poderá utilizar o sistema por completo.',
		functions: [
			{ name: 'Cadastro de usuário' },
			{ name: 'Listagem de posts' },
			{ name: 'Assinatura com stripe' },
			{ name: 'Login com Github' },
			{ name: 'Sessão com Next Auth' },
			{ name: 'Chakra Ui' },
		],
		slug: 'dev-finances',
	},

	{
		id: 3,
		name: 'Let me ask',
		description:
			'LetMeAsk é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.',
		cover: {
			src: '/assets/projects/let-me-ask/Página_inicial-let-me-ask.svg',
			alt: 'Project 3',
		},
		technology: 'Next Js',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: '/assets/projects/let-me-ask/Página_inicial-let-me-ask.svg',
				alt: 'img1',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Empty_state-let-me-ask',
				alt: 'img2',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Empty_state1-let-me-ask',
				alt: 'img3',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Pergunta_em_destaque-let-me-ask',
				alt: 'img4',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Perguntas_1-let-me-ask',
				alt: 'img5',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Perguntas-let-me-ask',
				alt: 'img6',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Usuário_logado-let-me-ask',
				alt: 'img7',
			},
		],
		downloadUrl:
			'https://codeload.github.com/Fillipeaugusto/ig-news/zip/refs/heads/main',
		instructions:
			'Baixe os arquivos, descompacte, execute o comando yarn e após isso o comando yarn dev o App deverá inicializar em localhost:3000.',
		functions: [
			{ name: 'Cadastro de usuário' },
			{ name: 'Listagem de posts' },
			{ name: 'Cadastro de perguntas' },
			{ name: 'Listagem de perguntas' },
			{ name: 'Login com Google Auth' },
			{ name: 'Gerenciar salas de perguntas' },
		],
		slug: 'let-me-ask',
	},

	{
		id: 4,
		name: 'Move It',
		description:
			'O Move It é um projeto que visa adicionar gamificação na sua rotina de trabalho, para tornar o dia mais produtivo e divertido trazendo exercícios para o corpo e olhos a cada período de foco.',
		cover: {
			src: '/assets/projects/move-it/Home.png',
			alt: 'Project 3',
		},
		technology: 'Next Js',
		slug: 'move-it',
	},
	{
		id: 5,
		name: 'Happy',
		description:
			'O Happy é uma plataforma web onde pessoas podem buscar por orfanatos para visitas e se guiar pela localização, horário de visita e disponibilidade para visita em fins de semana.',
		cover: {
			src: '/assets/projects/happy/Home.svg',
			alt: 'Project 3',
		},
		technology: 'React Js',
		slug: 'happy',
	},
];
