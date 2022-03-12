import Fetch from "@api/Fetch";
import { HostUrlPort } from "@common/const";

const ControllerName = HostUrlPort(5400) + "/api/User";

const userApi = {
	LogIn: async (item) => {
		let resp = await Fetch.POST(`${ControllerName}/login`, item);
		return resp;
	},
	ChangePassword: async (item) => {
		let resp = await Fetch.PUT(`${ControllerName}/ChangePassword`, item);
		return resp;
	},
};

export default userApi;
