// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

type DNASequence = string[];

import { shallowDifferences } from "../02-shallow-differences/index";

export function deepDifferences(a: DNASequence[], b: DNASequence[]) {
	if (a.length !== b.length) {
		return undefined;
	}
	let output = [];
	for (let i = 0; i < a.length; i++) {
		let nextResult = shallowDifferences(a[i], b[i]);
		if (!nextResult) {
			output[i] = undefined;
		} else {
			output[i] = nextResult;
		}
	}
	return output;
}
