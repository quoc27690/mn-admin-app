import Fetch from "@api/Fetch";
import { HostUrlPort } from "@common/const";

const ControllerName = HostUrlPort(5400) + "/api/User";

const UserApi = {
	LogIn: async (item) => {
		let resp = await Fetch.POST(`${ControllerName}/login`, item);
		return resp;
	},
	ChangePassword: async (item) => {
		let resp = await Fetch.PUT(`${ControllerName}/ChangePassword`, item);
		return resp;
	},
	GetById: async (_id) => {
		let resp = await Fetch.GET(`${ControllerName}/${_id}`);
		return resp;
	},
	Update: async (item) => {
		let resp = await Fetch.PUT(`${ControllerName}`, item);
		return resp;
	},
	UpdateAvatar: async (fdata) => {
		let resp = await Fetch.PUTFormData(
			`${ControllerName}/CapNhatAvatar`,
			fdata
		);
		return resp;
	},
};

export default UserApi;
