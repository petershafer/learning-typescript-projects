async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	const result = await new Promise((resolve) =>
		setTimeout(() => resolve(knownEmotions.has(emotion)), 1000)
	);
	return result;
}

async function speak(knownEmotions, newEmotion, phrase, callback) {
	const hasEmotion = await checkEmotion(knownEmotions, newEmotion);
	if (hasEmotion) {
		return `"${phrase}" (${newEmotion})`;
	} else {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
