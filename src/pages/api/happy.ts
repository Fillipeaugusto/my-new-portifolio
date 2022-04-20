/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 1,
		name: 'Happy - Web',
		madeIn: 'ago - 2020',
		description:
			'O Happy é uma plataforma web onde pessoas podem buscar por orfanatos para visitas e se guiar pela localização, horário de visita e disponibilidade para visita em fins de semana.',
		cover: {
			src: '/assets/projects/happy/Home.svg',
			alt: 'Project 2',
		},
		technology: 'React Js ,Next Js ,NextAuth',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: '/assets/projects/happy/Home.svg',
				alt: 'img1',
			},
			{
				src: '/assets/projects/happy/Mapa.svg',
				alt: 'img2',
			},
			{
				src: '/assets/projects/happy/Mapa_hover.svg',
				alt: 'img3',
			},
			{
				src: '/assets/projects/happy/Perfil.png',
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
		anexos: [
			{
				name: 'Happy web',
				url: 'https://codeload.github.com/Fillipeaugusto/finances/zip/refs/heads/main',
				type: 'demo',
			},
			{
				name: 'Happy-web.zip',
				url: 'https://codeload.github.com/Fillipeaugusto/finances/zip/refs/heads/main',
				type: 'download',
			},
			{
				name: 'Happy-api.zip',
				url: 'https://codeload.github.com/Fillipeaugusto/finances/zip/refs/heads/main',
				type: 'download',
			},
		],
	};

	return response.json(project);
};
