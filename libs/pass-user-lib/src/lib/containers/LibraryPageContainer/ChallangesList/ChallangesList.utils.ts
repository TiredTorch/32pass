import { ChallangeStatus } from "../../../types";

export const getListPreset = (status: ChallangeStatus) => {
	switch (status) {
		case ChallangeStatus.RUNNING:
			return {
				iconColor: "#39BEE7",
				title: "Is running"
			};
		case ChallangeStatus.AVAILVABLE:
			return {
				iconColor: "#000000",
				title: "Availvable"
			};
		case ChallangeStatus.DONE:
			return {
				iconColor: "#707070",
				title: "Done"
			};
		case ChallangeStatus.FAILED:
			return {
				iconColor: "#FF0000",
				title: "Failed"
			};
		default:
			return {
				iconColor: "",
				title: ""
			};
	}
};
