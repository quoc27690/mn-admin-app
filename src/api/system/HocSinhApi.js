import Fetch from "@api/Fetch";
import { HostUrlPort, VersionApi } from "@common/const";

const ControllerName = HostUrlPort(5750) + `/api/v${VersionApi}/HocSinh`;

const HocSinhApi = {
	GetAll: async () => {
		let resp = await Fetch.GET(`${ControllerName}`);
		return resp;
	},
};

export default HocSinhApi;
