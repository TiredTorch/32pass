import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, DocumentReference, setDoc } from "firebase/firestore";
import { userAuth, firebaseFirestore } from "../firebase";
import { UserData } from "../types";

export const useGetUserDocument = () => {
	const [userData, setUserData] = useState<UserData>();
	const [user] = useAuthState(userAuth);
	const [userDataSnapshot, isLoadingUserData, errorUserData] = useDocument(
		doc(
			firebaseFirestore,
			"users",
			user?.uid ?? " "
		) as DocumentReference<UserData>
	);

	useEffect(() => {
		if (!userDataSnapshot || isLoadingUserData || errorUserData || !user) return;
		if (userDataSnapshot.exists()) {
			setUserData(userDataSnapshot.data());
		} else {
			setDoc(doc(
				firebaseFirestore,
				"users",
				user.uid
			) as DocumentReference<UserData>, {
				fullname: user.displayName,
				avatar: user.photoURL,
				uid: user.uid
			});
		}
	}, [userDataSnapshot, isLoadingUserData, errorUserData, user]);

	return userData;
};
