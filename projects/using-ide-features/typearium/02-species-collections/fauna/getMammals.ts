import { onlyTruthy } from "../utils/onlyTruthy";
import { MammalsSettings } from "./MammalsSettings";

export function getMammals(settings?: MammalsSettings) {
	return onlyTruthy(
		settings?.cute && [
			"cats",
			"dogs",
			settings?.deadly && "monty python rabbit",
		],
		settings?.deadly && ["lion", "tiger"]
	);
}
