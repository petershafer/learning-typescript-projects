export function zip<T, U>(a: T[], b: U[]) {
	const output: (T | U)[] = [];

	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		if (i < a.length) {
			output.push(a[i]);
		}

		if (i < b.length) {
			output.push(b[i]);
		}
	}

	return output;
}
