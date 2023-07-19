type CipherFunction = (text: string) => string;
type Cipher = (input: string) => string;

export function createCipher(cipher: CipherFunction): Cipher {
	return function (input: string) {
		let output = "";
		for (let char of input) {
			output += cipher(char);
			console.log(`from ${char} to ${cipher(char)}`);
		}
		console.log(`Output: ${output}`);
		return output;
	};
}
