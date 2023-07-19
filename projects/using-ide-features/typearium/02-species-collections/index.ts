// Refactor here! ✨

import { FaunaSettings, getFauna } from "./Fauna";
import { FloraSettings, getFlora } from "./Flora";
import { onlyTruthy } from "./utils/onlyTruthy";

export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
