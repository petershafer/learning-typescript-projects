export function runCommands() {
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let food: number = 5;
	let water: number = 5;
	let roll: number;
	let command: "food" | "water" | "resupply";

	while (day <= 7) {
		console.log(`Day ${day}: ${food} food, ${water} water.`);
		roll = Math.floor(Math.random() * 6) + 1;

		switch (roll) {
			case 1:
				command = "food";
				break;
			case 2:
				command = "water";
				break;
			default:
				command = "resupply";
				break;
		}

		switch (command) {
			case "food":
				availableResource = "food";
				console.log(`Available resource is food.`);
				break;
			case "water":
				availableResource = "water";
				console.log(`Available resource is water.`);
				break;
			default: // resupply
				if (availableResource === undefined) {
					if (roll % 2 > 0) {
						// odd
						availableResource = "water";
						console.log(`Available resource is water.`);
					} else {
						// even
						availableResource = "food";
						console.log(`Available resource is food.`);
					}
				} else {
					if (availableResource === "food") {
						food += roll;
						console.log(`Food increased by ${roll}`);
					} else {
						water += roll;
						console.log(`Water increased by ${roll}`);
					}
					availableResource = undefined;
				}
				break;
		}

		food--;
		water--;
		console.log(`Consumed food and water.`);

		if (food === 0 || water === 0) {
			console.log(`${food === 0 ? "Food" : "Water"} has dropped to zero.`);
			console.log("GAME OVER");
			return false;
		}

		day += 1;
	}

	console.log(`Survived for 7 days.`);
	console.log("YOU WIN");
	return true;
}
