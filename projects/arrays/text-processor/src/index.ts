export type AlignmentOptions = {
	width: number;
	align?: "left" | "right" | "middle";
};

export function alignTexts(
	texts: string[],
	{ align = "left", width }: AlignmentOptions
): string[][] {
	let allText: string[][] = []; // Unaligned text.
	let formattedText: string[][] = []; // Aligned text.

	for (let section of texts) {
		let sectionLines: string[] = [];
		let lineBuffer = "";
		const tokens = section.split(" ");
		for (const token of tokens) {
			if (token.length === 0 && tokens.length === 1) {
				// Edge Case: one token that's empty string.
				sectionLines = [""];
				continue;
			}
			if (lineBuffer.length === 0 && token.length > width) {
				// Edge Case: Empty line buffer and token that exceeds width.
				sectionLines.push(token);
				lineBuffer = "";
				continue;
			}
			const candidateText =
				lineBuffer === "" ? token : `${lineBuffer} ${token}`;
			if (candidateText.length <= width) {
				// Add to line buffer.
				lineBuffer = candidateText;
			} else {
				// Flush line buffer and add token to empty buffer.
				sectionLines.push(lineBuffer);
				lineBuffer = `${token}`;
			}
		}
		if (lineBuffer.length > 0) {
			// Flush line buffer if not empty.
			sectionLines.push(lineBuffer);
			lineBuffer = "";
		}
		// Add section to all text.
		allText.push(sectionLines);
	}

	// Format alignment of lines in each section.
	for (const section of allText) {
		const formattedSection = [];
		// let shouldPadRight = (align === "right");
		// Format alignment of lines in this section.
		for (let rawLine of section) {
			let formattedLine;
			switch (align) {
				case "left":
					formattedLine = rawLine.padEnd(width, " ");
					break;
				case "right":
					formattedLine = rawLine.padStart(width, " ");
					break;
				default:
					const margin = Math.floor((width - rawLine.length) / 2);
					formattedLine = rawLine.padStart(rawLine.length + margin, " ");
					formattedLine = formattedLine.padEnd(width, " ");
					break;
			}
			formattedSection.push(formattedLine);
		}
		formattedText.push(formattedSection);
	}

	return formattedText;
}
