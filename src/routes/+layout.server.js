import { pages } from '$lib/data/data.js';

export function load() {
	const pageNames = pages.map((page) => page);
	return {
		pages: [
			{
				slug: '/',
				title: 'Home'
			},
			...pageNames
		]
	};
}
