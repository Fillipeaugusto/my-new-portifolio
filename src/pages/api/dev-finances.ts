/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 1,
		name: 'Dev Finances',
		madeIn: 'ago - 2020',
		description:
			'O Dev Finances é um projeto de controle de contas pessoais com controle de recebimentos e pagamentos, assim como calculo dos totais.',
		cover: {
			src: '/assets/projects/dev-finances/inicio.png',
			alt: 'Project 1',
		},
		technology: 'Html, Css, Javascript',
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
			'Após baixar o projeto execute o comando yarn ou npm i, depois de instalar as dependências do projeto execute yarn start.',
		functions: [
			{ name: 'Cadastro de despesas' },
			{ name: 'Cadastro de ganhos' },
			{ name: 'Listagem de ganhos e despesas' },
			{ name: 'Deletar ganhos e despesas' },
			{ name: 'Exportação de conteúdo' },
		],
		anexos: [
			{
				name: 'Dev Finances',
				url: 'https://dev-finances-beta.vercel.app/',
				type: 'demo',
			},
			{
				name: 'DevFinances.zip',
				url: 'https://codeload.github.com/Fillipeaugusto/finances/zip/refs/heads/main',
				type: 'download',
			},
		],
	};

	return response.json(project);
};
