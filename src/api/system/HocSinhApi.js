import Fetch from "@api/Fetch";
import { HostUrlPort, VersionApi } from "@common/const";

const ControllerName = HostUrlPort(5750) + `/api/v${VersionApi}/HocSinh`;

const HocSinhApi = {
	GetAll: async () => {
		let resp = await Fetch.GET(`${ControllerName}`);
		return resp;
	},
	GetById: async id => {
    let resp = await Fetch.GET(`${ControllerName}/${id}`);
    return resp;
  },
	Insert: async item => {
    let resp = await Fetch.POST(`${ControllerName}`, item);
    return resp;
  },
	Update: async item => {
    let resp = await Fetch.PUT(`${ControllerName}`, item);
    return resp;
  },
  Delete: async item => {
    let resp = await Fetch.DELETE_ARRAY(`${ControllerName}/Delete`, item);
    return resp;
  },
	DeletePermanently: async arrId => {
    let resp = await Fetch.DELETE_ARRAY(`${ControllerName}/XoaVinhVien`, arrId);
    return resp;
  },
};

export default HocSinhApi;
