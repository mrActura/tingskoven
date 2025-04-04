import { error } from '@sveltejs/kit';
import { users, visits } from '../../../data.js';

export function load({ params }) {
	const user = users.find((u) => u.uuid === params.uuid);

	if (!user) error(404);

	const userVisits = visits.filter((v) => v.user === user.uuid);
	return {
		user: user,
		visits: userVisits
	};
}
