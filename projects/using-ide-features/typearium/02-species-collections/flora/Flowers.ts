import { onlyTruthy } from "../utils/onlyTruthy";

export interface FlowersSettings {
	colorful?: boolean;
	prickly?: boolean;
}
export function getFlowers(settings?: FlowersSettings) {
	return onlyTruthy(
		settings?.colorful && ["carnation", "lilac", "tulip"],
		settings?.colorful && settings?.prickly && "rose"
	);
}
