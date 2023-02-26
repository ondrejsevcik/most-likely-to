import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { questions } from '$lib/server/questions';

function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const GET = (({ url }) => {
	const index = randomInt(0, questions.length - 1);

	return json({
		question: questions[index]
	});
}) satisfies RequestHandler;
