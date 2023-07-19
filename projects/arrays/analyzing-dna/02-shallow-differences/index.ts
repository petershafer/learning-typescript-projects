type DNASequence = string[];

export function shallowDifferences(a: DNASequence, b: DNASequence) {
	if (a.length !== b.length) {
		return undefined;
	}
	let output: (string | undefined)[] = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			output[i] = undefined;
		} else {
			output[i] = a[i];
		}
	}
	return output;
}
