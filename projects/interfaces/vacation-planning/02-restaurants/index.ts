export interface Restaurant {
	city: string;
	name: string;
}

export interface GroupedRestaurants {
	[city: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]) {
	let output: GroupedRestaurants = {};

	for (const { city, name } of restaurants) {
		if (!(city in output)) {
			output[city] = [];
		}
		output[city].push(name);
	}

	return output;
}
