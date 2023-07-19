export interface Character {
	name: string;
	flying: boolean;
	power: number;
	toughness: number;
}

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

function createCharacter(
	name: string,
	mutations: (keyof typeof mutationsLibrary)[]
) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

export interface Fighter {
	mutations: (keyof typeof mutationsLibrary)[];
	name: string;
}

export function duel(good: Fighter, bad: Fighter) {
	let goodChar = createCharacter(good.name, good.mutations);
	let badChar = createCharacter(bad.name, bad.mutations);
	let goodPerf = goodChar.power / badChar.toughness;
	let badPerf = badChar.power / goodChar.toughness;
	if (goodPerf > badPerf) {
		return ["hero", goodChar] as const;
	} else {
		return ["villain", badChar] as const;
	}
}
