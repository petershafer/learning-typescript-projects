export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

export type Catacomb<T> = {
	inside: Buried<T>;
	type: "catacomb";
};

export type TunnelSystem<T> = {
	entrances: Buried<T>[];
	type: "tunnels";
};

export type Treasure<T> = {
	content: T;
	type: "treasure";
};

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (input: Content) => input is Fake, // Added unnecessary type param Needed to be `Content` type.
	isReal: (input: Content) => input is Real // Added unnecessary type param. Needed to be `Content` type.
) {
	interface Outcome<Fake, Real> {
		fake: Fake[];
		real: Real[];
		scrap: Content[];
	}
	let outcome: Outcome<Fake, Real> = {
		fake: [],
		real: [],
		scrap: [],
	};

	if (buried instanceof Array) {
		// Had to think on this.
		for (let next of buried) {
			let nextResult = collectTreasure(next, isFake, isReal);
			outcome.fake = outcome.fake.concat(nextResult.fake);
			outcome.real = outcome.real.concat(nextResult.real);
			outcome.scrap = outcome.scrap.concat(nextResult.scrap);
		}
	} else {
		switch (buried.type) {
			case "tunnels":
				for (let next of buried.entrances) {
					let nextResult = collectTreasure(next, isFake, isReal);
					outcome.fake = outcome.fake.concat(nextResult.fake);
					outcome.real = outcome.real.concat(nextResult.real);
					outcome.scrap = outcome.scrap.concat(nextResult.scrap);
				}
				break;
			case "catacomb":
				outcome = collectTreasure(buried.inside, isFake, isReal);
				break;
			case "treasure":
				if (isReal(buried.content)) {
					outcome.real.push(buried.content as Real);
				} else if (isFake(buried.content)) {
					outcome.fake.push(buried.content as Fake);
				} else {
					outcome.scrap.push(buried.content);
				}
				break;
		}
	}

	return outcome;
}
