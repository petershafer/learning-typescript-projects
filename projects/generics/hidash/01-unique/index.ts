export function unique<T>(...items: T[][]) {
	let output: T[] = [];
	for (let sequence of items) {
		for (let entry of sequence) {
			if (!output.includes(entry)) {
				output.push(entry);
			}
		}
	}
	return output;
}
