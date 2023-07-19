// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

export type Landmark =
	| FortLandmark
	| LakeLandmark
	| LighthouseLandmark
	| MountainLandmark
	| ParkLandmark
	| RiverLandmark
	| WaterfallLandmark;

export interface BaseLandmark {
	name: string;
	type: string;
}

interface FortLandmark extends BaseLandmark {
	type: "fort";
}

interface LakeLandmark extends BaseLandmark {
	type: "lake";
	miles: number;
}

interface LighthouseLandmark extends BaseLandmark {
	type: "lighthouse";
	height: number;
	lit: number;
}

interface MountainLandmark extends BaseLandmark {
	type: "mountain";
	height: number;
}

interface ParkLandmark extends BaseLandmark {
	type: "park";
	acres: number;
}

interface RiverLandmark extends BaseLandmark {
	type: "river";
	length: number;
	depth: number;
}

interface WaterfallLandmark extends BaseLandmark {
	type: "waterfall";
	height: number;
}

export function describeLandmark(landmark: Landmark): string {
	let message = [`${landmark.name} is a ${landmark.type} in Upstate New York.`];
	switch (landmark.type) {
		case "lake":
			message.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			message.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			message.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			message.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			message.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			message.push(`It is ${landmark.height} feet high.`);
			break;
	}
	return message.join(`\n`);
}
