import { onlyTruthy } from "../utils/onlyTruthy";
import { ReptilesSettings } from "./ReptilesSettings";

export function getReptiles(settings?: ReptilesSettings) {
	return onlyTruthy(
		settings?.ferocious && "dragon",
		settings?.small && ["frog", "gecko"]
	);
}
