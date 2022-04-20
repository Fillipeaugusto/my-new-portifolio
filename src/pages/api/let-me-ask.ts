/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 3,
		name: 'Let me ask',
		madeIn: 'ago - 2020',
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
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Empty_state-let-me-ask.svg',
				alt: 'img2',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Empty_state1-let-me-ask.svg',
				alt: 'img3',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Pergunta_em_destaque-let-me-ask.svg',
				alt: 'img4',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Perguntas_1-let-me-ask.svg',
				alt: 'img5',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Perguntas-let-me-ask.svg',
				alt: 'img6',
			},
			{
				src: '/assets/projects/let-me-ask/Sala_React_Q&A_Usuário_logado-let-me-ask.svg',
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
	};

	return response.json(project);
};
