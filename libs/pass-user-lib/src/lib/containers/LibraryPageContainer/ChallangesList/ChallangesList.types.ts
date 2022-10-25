export type ChallangesListProps = {
	sectionStatus: ChallangeStatus;
	items: ChallangeItemShort[];
};

export type ChallangeItemShort = {
	gameName: string;
	description: string;
	rate?: number;
	status: ChallangeStatus;
};

export enum ChallangeStatus {
	RUNNING = "running",
	AVAILVABLE = "available",
	DONE = "done",
	FAILED = "failed"
}
