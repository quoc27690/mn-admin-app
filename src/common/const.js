// *** Build app thì cmt chổ này lại không thôi lỗi build ráng chịu :)  ***
import { NativeModules } from "react-native";
const scriptURL = NativeModules.SourceCode.scriptURL;
const address = scriptURL.split("://")[1].split("/")[0];
const hostname = address.split(":")[0];
export const HostUrlPort = (portValue) => `http://${hostname}:${portValue}`;
// *** - cmt đến đây -  ***

export const VersionApi = 1;

export const AppCode = "AppQuanlyMamNon";

export const User = {
	UserToKen: "UserToKen",
	SaveUser: "SaveUser",
};

export const Res = {
	ErrorCode: "error",
	//Code trả về khi lấy API
	ReturnCode: {
		Success: 0,
	},
};
