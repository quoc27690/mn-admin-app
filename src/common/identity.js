import * as SecureStore from "expo-secure-store";
import { User } from "@common/const";
import { useDispatch } from "react-redux";
import { updateToken } from "@redux/features/userSlice";

export const useIdentity = () => {
	const dispatch = useDispatch();

	const logOut = async () => {
		await deleteToken();
		dispatch(updateToken(null));
	};

	const logIn = async (token) => {
		await setToken(token);
		dispatch(updateToken(token));
	};

	return {
		logOut,
		logIn,
	};
};

export const getToken = async () => {
	const token = await SecureStore.getItemAsync(User.UserToKen);
	return token;
};

export const getSaveUser = async () => {
	const saveUser = await SecureStore.getItemAsync(User.SaveUser);
	return JSON.parse(saveUser);
};

export const setSaveUser = async (data) => {
	await SecureStore.setItemAsync(User.SaveUser, JSON.stringify(data));
};

export const setToken = async (token) => {
	await SecureStore.setItemAsync(User.UserToKen, token);
};

export const deleteToken = async () => {
	await SecureStore.deleteItemAsync(User.UserToKen);
};

export const deleteSaveUser = async () => {
	await SecureStore.deleteItemAsync(User.SaveUser);
};
