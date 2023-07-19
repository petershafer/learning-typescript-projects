export type Cleaner = (dirt: number, time?: number) => number;

export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Failure = {
	succeeded: false;
};

export type Success = {
	succeeded: true;
	newStock: Stock;
};

export type Supplier = (expense: number) => Stock;

export type Recipe = (stock: Stock) => Success | Failure;

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
) {
	let activeBudget = budget;
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	const kitchen: Kitchen = {
		announce: () =>
			`I have ${dirt} much dirt, ${activeBudget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`,
		clean: (time?: number) => {
			dirt = cleaner(dirt, time);
		},
		purchase: (expense: number) => {
			if (expense > activeBudget) {
				return false;
			}

			const newStock = supplier(expense);

			stock.breads += newStock.breads;
			stock.fruits += newStock.fruits;
			stock.sauces += newStock.sauces;
			stock.vegetables += newStock.vegetables;

			activeBudget -= expense;

			return true;
		},
		prepare: (recipe) => {
			if (dirt >= 100) {
				return false;
			}

			const outcome = recipe(stock);
			dirt++;

			stock = outcome.succeeded ? outcome.newStock : stock;

			return outcome.succeeded;
		},
	};
	return kitchen;
}
