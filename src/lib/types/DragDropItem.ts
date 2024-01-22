export interface DragDropItem {
	el?: any;
	id: number;
	itemId: string;
	title: string;
	img: string;
}

export interface HarmfulHelpfulItem {
	id: number;
	itemId: string;
	title: string;
	type: 'harmful' | 'helpful' | undefined;
	reasoning: Reasoning | undefined;
}

export interface HarmfulHelpfulReasoningItem {
	id: number;
	type: 'harmful' | 'helpful';
	reasonText: string;
	reasonVideo: string;
}

export interface DragStackItem {
	id: number;
	itemId: string;
	title: string;
	el: any;
	img: string;
	type: 'harmful' | 'helpful' | undefined;
	reasoning: Reasoning | undefined;
}

export interface Reasoning {
	reasonText: string;
	reasonVideo: string;
}
