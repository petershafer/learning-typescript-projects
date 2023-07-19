export function pickMany<T, U extends keyof T>(container: T, keys: U[]) {
	const output: T[U][] = [];

	for (const key of keys) {
		output.push(container[key]);
	}

	return output;
}
