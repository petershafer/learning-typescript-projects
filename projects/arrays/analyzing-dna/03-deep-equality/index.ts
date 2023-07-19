// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.

type DNASequence = string[];

import { shallowEquality } from "../01-shallow-equality/index";

export function deepEquality(a: DNASequence[], b: DNASequence[]) {
	if (a.length !== b.length) {
		return false;
	}
	for (let i = 0; i < a.length; i++) {
		if (!shallowEquality(a[i], b[i])) {
			return false;
		}
	}
	return true;
}
