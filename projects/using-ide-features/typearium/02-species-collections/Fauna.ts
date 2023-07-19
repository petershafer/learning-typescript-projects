import { MammalsSettings } from "./fauna/MammalsSettings";
import { ReptilesSettings } from "./fauna/ReptilesSettings";
import { getMammals } from "./fauna/getMammals";
import { getReptiles } from "./fauna/getReptiles";

export interface FaunaSettings {
	mammals?: MammalsSettings;
	reptiles?: ReptilesSettings;
}
export function getFauna(settings?: FaunaSettings) {
	return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
