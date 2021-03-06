/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 1,
		name: 'Ig News',
		madeIn: 'ago - 2020',
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
			{ name: 'Chakra Ui' },
		],
		anexos: [
			{ name: 'Ig News', url: 'https://ig-prod.vercel.app/', type: 'demo' },
			{
				name: 'Ig News',
				url: 'https://codeload.github.com/Fillipeaugusto/ig-news/zip/refs/heads/main',
				type: 'download',
			},
		],
	};

	return response.json(project);
};
