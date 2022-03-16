import Fetch from "@api/Fetch";
import { HostUrlPort, VersionApi } from "@common/const";

const ControllerName = HostUrlPort(5751) + `/api/v${VersionApi}/LopHoc`;

const LopHocApi = {
	GetAll: async () => {
		let resp = await Fetch.GET(`${ControllerName}`);
		return resp;
	},
};

export default LopHocApi;
