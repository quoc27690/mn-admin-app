import Fetch from "@api/Fetch";
import { HostUrlPort } from "@common/const";

const ControllerName = HostUrlPort(5400) + "/api/User";

const UserAPI = {
	SignIn: async (item) => {
		let resp = await Fetch.POST(`${ControllerName}/login`, item);
		return resp;
	},
};

export default UserAPI;
