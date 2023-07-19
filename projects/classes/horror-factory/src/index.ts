interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface Options {
	name: string;
	getPowerFrom: (opponent: Consumed) => number;
	isEvil: () => boolean;
}

export class Horror {
	#consumed: Consumed[] = [];

	isEvil: () => boolean;
	name: string;
	getPowerFrom: (opponent: Consumed) => number;

	constructor(options: Options) {
		this.isEvil = options.isEvil;
		this.name = options.name;
		this.getPowerFrom = options.getPowerFrom;
	}

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
}

export function createDemon() {
	return new Horror({
		name: "Demon",
		isEvil: function () {
			return true;
		},
		getPowerFrom: (opponent: Consumed) =>
			opponent.evil ? opponent.power / 2 : opponent.power * 2,
	});
}

export function createSorcerer(name: string, evil: boolean) {
	return new Horror({
		name: name,
		isEvil: function () {
			return evil;
		},
		getPowerFrom: function (opponent: Consumed) {
			return evil === opponent.evil ? opponent.power * 2 : opponent.power;
		},
	});
}
