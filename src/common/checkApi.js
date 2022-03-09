import Toast from "react-native-simple-toast";
import { Res } from "./const";

export const checkAPI = {
    check: (resp, showToast = true, showError = true) => {
        if (resp === Res.ErrorCode) {
            showError && Toast.show(resp.Message || "Thao tác thất bại");
            // console.log(resp.ExMessage); //Show log lỗi nếu catch exception
            return false;
        }
        if (resp.Code !== Res.ReturnCode.Success) {
            showError && Toast.show(resp.Message);
            return false;
        }
        showToast && Toast.show(resp.Message);
        return true;
    },
};
export default checkAPI;
