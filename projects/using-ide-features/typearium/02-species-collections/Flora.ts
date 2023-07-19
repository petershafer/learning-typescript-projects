import { TreesSettings, getTrees } from "./flora/Trees";
import { FlowersSettings, getFlowers } from "./flora/Flowers";

export interface FloraSettings {
	flowers?: FlowersSettings;
	trees?: TreesSettings;
}
export function getFlora(settings?: FloraSettings) {
	return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
