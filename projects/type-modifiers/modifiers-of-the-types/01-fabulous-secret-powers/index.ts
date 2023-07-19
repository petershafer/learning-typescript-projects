import { characters } from "./characters";

interface character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(rawData: string) {
	const parsedData = JSON.parse(rawData) as character;
	const { name, powers, side } = parsedData;
	console.log(`I am ${name}.`);
	console.log(`My powers are: ${powers.join(", ")}.`);
	console.log(`I am ${side}.`);
	return parsedData;
}
