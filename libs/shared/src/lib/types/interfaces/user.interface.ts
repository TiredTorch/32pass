export type UserData = {
	fullname: string | null;
	avatar: string | null;
	uid: string;
	challenges?: Array<UserChallanges>;
};

export type UserChallanges = {
	challangeId: string;
	startDate?: string;
	endDate?: string;
	duration: number;
};
