export interface City {
	name: string;
	coordinates: {
		north: [number, number, number];
		west: [number, number, number];
	};
	catchphrase?: string;
}

export function describeCity({
	name,
	coordinates: {
		north: [n1, n2, n3],
		west: [w1, w2, w3],
	},
	catchphrase,
}: City) {
	const message = [];
	message.push(`${name}, New York`);
	if (catchphrase) {
		message.push(`* "${catchphrase}"`);
	}
	const c = (num: number) => num.toString().padStart(2, "0");
	message.push(
		`* Located at ${c(n1)}°${c(n2)}'${c(n3)}"N ${c(w1)}°${c(w2)}'${c(w3)}"W`
	);
	return message.join(`\n`);
}
