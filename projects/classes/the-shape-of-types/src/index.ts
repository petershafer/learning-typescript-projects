interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	#consumed: Consumed[] = [];

	abstract readonly name: string;

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower(): number {
		const power = this.#consumed.reduce((acc: number, next: Consumed) => {
			return acc + this.getPowerFrom(next);
		}, this.#consumed.length);
		return power;
	}

	protected abstract getPowerFrom(opponent: Consumed): number;

	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	name = "demon";

	getPowerFrom(opponent: Consumed) {
		return opponent.evil ? opponent.power / 2 : opponent.power * 2;
	}

	isEvil() {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.#evil = evil;
		this.name = name;
	}

	getPowerFrom(opponent: Consumed) {
		return this.#evil === opponent.evil ? opponent.power * 2 : opponent.power;
	}

	isEvil() {
		return this.#evil;
	}
}
