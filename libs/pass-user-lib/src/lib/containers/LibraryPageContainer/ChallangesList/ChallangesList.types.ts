import { GameChallengeData } from "@32pass/shared";
import { ChallangeStatus } from "../../../types";

export type ChallangesListProps = {
	sectionStatus: ChallangeStatus;
	items: GameChallengeData[];
};
