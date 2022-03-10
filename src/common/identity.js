import * as SecureStore from "expo-secure-store";
import { User } from "@common/const";

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

export const logIn = async (token) => {
	await SecureStore.setItemAsync(User.UserToKen, token);
};

export const logOut = async () => {
	await SecureStore.deleteItemAsync(User.UserToKen);
};

export const deleteSaveUser = async () => {
	await SecureStore.deleteItemAsync(User.SaveUser);
};
