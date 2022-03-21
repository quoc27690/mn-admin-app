import Fetch from "@api/Fetch";
import { HostUrlPort, VersionApi } from "@common/const";

const ControllerName = HostUrlPort(6770) + `/api/v${VersionApi}/NhatKyHoatDong`;

const NhatKyHoatDongApi = {
  GetListHS: async (namHoc, idLopHoc) => {
    let resp = await Fetch.GET(`${ControllerName}?NamHoc=${namHoc}&IdLop=${idLopHoc}`);
    return resp;
  },
};

export default NhatKyHoatDongApi;
