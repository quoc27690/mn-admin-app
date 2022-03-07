import axiosClient from "./axiosClient";

const parentUrl = "5400/api/User";

const userApi = {
	logIn(item) {
		const childUrl = "/login";
		return axiosClient.get(parentUrl + childUrl, { params: item });
	},
};

export default userApi;
