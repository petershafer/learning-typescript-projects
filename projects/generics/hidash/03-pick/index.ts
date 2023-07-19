export function pick<T, U extends keyof T>(container: T, key: U) {
	return container[key];
}
