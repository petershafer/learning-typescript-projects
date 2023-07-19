// Refactor here! ✨

const allAnimals = [
	"parakeet",
	"macaw",
	"cat",
	"monkey",
	"elephant",
	"alpaca",
	"fox",
];

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set(allAnimals);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	return allAnimals.slice(0, max);
}

export function logFavoriteAnimals() {
	allAnimals.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
