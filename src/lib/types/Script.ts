/**
 /src/lib/types/Script.ts
 Script.ts
 cml-narrative
 
 Created by Ian Thompson on January 7th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

export interface Script {
	/**
	 * An array of all dialog
	 */
	lines: Line[];
	/**
	 * How long the current script segment is
	 */
	length: number;
}

/**
 * Defines the "Line" type
 */
export interface Line {
	/**
	 * Sequential index of the current script
	 */
	id: number;

	/**
	 * Who is currently talking
	 */
	// speaker: string;
	speakers: string[];

	/**
	 * Text the speaker is speaking
	 */
	dialog: string;

	/**
	 * Image of the current speaker
	 */
	avatars: string[];

	/**
	 *  Background image of the current script
	 */
	background: string;

	/**
	 * The url path to an audio file associated with a line
	 */
	audio?: string;

	pos?: 'left' | 'right' | 'normal';
}
