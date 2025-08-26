import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/question');
	const { question } = await response.json();

	return { question };
}) satisfies PageLoad;
