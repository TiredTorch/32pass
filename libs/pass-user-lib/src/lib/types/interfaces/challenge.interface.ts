import { DBRef } from ".";
import { ChallangeStatus } from "..";

export type ChallengeData = {
	game: DBRef;
	name: string;
	description: string;
	rate?: number;
	id: string;
	category: ChallangeStatus;
	comments: DBRef[];
};

export type CommentUser = {
	img: string;
	comment: string;
	userName: string;
	rate: number;
	publishedAt: Date;
};
