/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 1,
		name: 'Move It',
		madeIn: 'ago - 2020',
		description:
			'O Move It é um projeto que visa adicionar gamificação na sua rotina de trabalho, para tornar o dia mais produtivo e divertido trazendo exercícios para o corpo e olhos a cada período de foco.',
		cover: {
			src: '/assets/projects/move-it/Home.png',
			alt: 'Project 3',
		},
		technology: 'Next Js',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: '/assets/projects/move-it/Home.png',
				alt: 'img1',
			},
			{
				src: '/assets/projects/move-it/Home_ciclo_iniciado.png',
				alt: 'img2',
			},
			{
				src: '/assets/projects/move-it/Home_ciclo_encerrado.png',
				alt: 'img3',
			},
			{
				src: '/assets/projects/move-it/Compartilhar.png',
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
			{ name: 'Chakra Ui' },
		],
	};

	return response.json(project);
};
