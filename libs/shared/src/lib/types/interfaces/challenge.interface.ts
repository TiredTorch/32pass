export type GameChallengeData = {
	uid: string;
	game: string;
	challengeName: string;
	challengeHardRate: number;
	challengeDescription: string;
	challengeReviews: Array<UserReview>;
};

export type UserReview = {
	user: {
		avatar: string;
		name: string;
	};
	postDate: string;
	rating: number;
	content: string;
};

export type GameData = {
	id: string;
	img: string;
	name: string;
};
