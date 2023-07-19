// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

type Settings = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(settings: Settings) {
	const { attempts, makeGuess, validateGuess } = settings;
	return function (text: string) {
		for (let i = 0; i < attempts; i++) {
			const guess = makeGuess(text, i);
			if (validateGuess(guess)) {
				return guess;
			}
		}
		return undefined;
	};
}
