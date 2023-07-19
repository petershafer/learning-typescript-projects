// Declare your types here! ✨

export interface Act {
	performer: string;
	name: string;
	sections: Section[];
}

export type Section = Illusion | Trick;

export interface Illusion {
	introduction(): string;
	flair(): string;
	payoff(): string;
}

export interface VolunteerIllusion extends Illusion {
	// Didn't pick up on this type right away.
	duration: number;
	title: string;
}

export interface Trick {
	gimmick: string;
}

export function isTrick(section: Section): section is Trick; // Unnecessary declare

export function isVolunteerIllusion(
	illusion: Illusion
): illusion is VolunteerIllusion; // Unnnecessry declare

export interface AudienceMember {
	name: string;
}

export function getAudienceMemberFor(settings: {
	duration: number;
	title: string;
}): Promise; // Unnecessary declare, didn't set type param
