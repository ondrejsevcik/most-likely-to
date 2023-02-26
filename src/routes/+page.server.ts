// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { PageServerLoad } from './$types';
import { questions } from '$lib/server/questions';

export const load = (({ params }) => {
	return {
		question: {
			text: questions[0]
		}
	};
}) satisfies PageServerLoad;
