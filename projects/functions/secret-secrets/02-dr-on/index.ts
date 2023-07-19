type Filter = (input: string) => string;

export function createAdvancedCipher(
	onVowel: Filter,
	onConsonant: Filter,
	onPunctuation: Filter
) {
	return function (text: string) {
		let output = "";
		for (let char of text) {
			if (/[aeiou]/i.test(char)) {
				output += onVowel(char);
			} else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
				output += onConsonant(char);
			} else {
				output += onPunctuation(char);
			}
		}
		return output;
	};
}
