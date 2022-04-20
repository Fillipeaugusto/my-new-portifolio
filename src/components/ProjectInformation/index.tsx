/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid';
import { GlobeIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

interface ProjectProps {
	name: string;
	appFor: string;
	description: string;
	downloadUrl: string;
	instructions: string;
	anexos?: [
		{
			name: string;
			url: string;
			type: 'download' | 'demo';
		}
	];
}

export default function ProjectInformation({
	name,
	appFor,
	description,
	downloadUrl,
	instructions,
	anexos,
}: ProjectProps) {
	const route = useRouter();

	function download(url) {
		window.open(url, '_blank');
	}
	return (
		<div className="bg-white shadow-xl overflow-hidden sm:rounded-lg max-w-6xl mt-6">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg leading-6 font-medium text-gray-900">
					Informações sobre o projeto
				</h3>
				{/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
					Details and more information.
				</p> */}
			</div>
			<div className="border-t border-gray-200">
				<dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Nome do projeto</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{name}
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Sobre</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{description}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Instruções</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{instructions}
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Tecnologias</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{appFor}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Sobre</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{description}
						</dd>
					</div>
					{anexos && (
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Anexos</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								<ul
									role="list"
									className="border border-gray-200 rounded-md divide-y divide-gray-200"
								>
									{anexos.map((anexo) => {
										return (
											<li
												className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
												key={anexo.name}
											>
												<div className="w-0 flex-1 flex items-center">
													{anexo.type === 'download' ? (
														<PaperClipIcon
															className="flex-shrink-0 h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
													) : (
														<GlobeIcon
															className="flex-shrink-0 h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
													)}
													<span className="ml-2 flex-1 w-0 truncate">{anexo.name}</span>
												</div>
												<div className="ml-4 flex-shrink-0">
													<button
														onClick={
															anexo.type === 'download'
																? () => download(anexo.url)
																: () => route.push(anexo.url)
														}
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														{anexo.type === 'download' ? 'Download' : 'Acessar Demo'}
													</button>
												</div>
											</li>
										);
									})}

									{/* <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
									<div className="w-0 flex-1 flex items-center">
										<PaperClipIcon
											className="flex-shrink-0 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
										<span className="ml-2 flex-1 w-0 truncate">dev-finances.zip</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<button
											onClick={() => download()}
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Download
										</button>
									</div>
								</li> */}
								</ul>
							</dd>
						</div>
					)}
				</dl>
			</div>
		</div>
	);
}
