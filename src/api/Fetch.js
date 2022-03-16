import { User } from "@common/const";
import { post, put } from "axios";
import * as SecureStore from "expo-secure-store";

const getBearerToken = async () => {
	let authorization = {};
	const token = await SecureStore.getItemAsync(User.UserToKen);
	if (token) {
		authorization = {
			Authorization: "Bearer " + token,
		};
	}
	return authorization;
};

const Fetch = {
	GET: async (url) => {
		const bearer_token = await getBearerToken();
		let resp = await fetch(url, {
			method: "GET",
			headers: {
				...bearer_token,
			},
		});
		if (!resp.ok) return "error";
		let data = await resp.json();
		return data;
	},

	POST: async (url, data) => {
		const bearer_token = await getBearerToken();
		let resp = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				...bearer_token,
			},
			body: JSON.stringify(data),
		});
		if (!resp.ok) return "error";
		let jsonData = await resp.json();
		return jsonData;
	},

	PUT: async (url, data) => {
		const bearer_token = await getBearerToken();
		let resp = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				...bearer_token,
			},
			body: JSON.stringify(data),
		});
		if (!resp.ok) return "error";
		let jsonData = await resp.json();
		return jsonData;
	},

	DELETE: async (url, id) => {
		const bearer_token = await getBearerToken();
		let resp = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				...bearer_token,
			},
			body: id,
		});
		if (!resp.ok) return "error";
		let jsonData = await resp.json();
		return jsonData;
	},

	DELETE_ARRAY: async (url, data) => {
		const bearer_token = await getBearerToken();
		let resp = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				...bearer_token,
			},
			body: JSON.stringify(data),
		});
		if (!resp.ok) return "error";
		let jsonData = await resp.json();
		return jsonData;
	},

	POSTFormData: async (url, fdata) => {
		const bearer_token = await getBearerToken();
		const config = {
			headers: {
				"content-type": "multipart/form-data",
				...bearer_token,
			},
		};
		return post(url, fdata, config);
	},

	PUTFormData: async (url, fdata) => {
		const bearer_token = await getBearerToken();
		const config = {
			headers: {
				"content-type": "multipart/form-data",
				...bearer_token,
			},
		};
		return put(url, fdata, config);
	},
};

export default Fetch;
