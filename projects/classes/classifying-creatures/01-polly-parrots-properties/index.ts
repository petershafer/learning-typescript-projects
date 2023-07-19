export class Parrot {
	#name: string;
	#phrases: string[];

	constructor(name: string) {
		this.#name = name;
		this.#phrases = [`${this.#name} wants a cracker!`];
	}

	announce() {
		return `Squawk! I'm ${this.#name}!`;
	}

	learn(newPhrase: string) {
		this.#phrases.push(newPhrase);
	}

	speak() {
		return this.#phrases[Math.floor(Math.random() * this.#phrases.length)];
	}
}
