function announceMachines(...args) {
	const announce = args[0];
	let label;
	let labelsCount = 0;

	for (arg of args) {
		const machine = arg;

		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;
