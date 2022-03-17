import { UserApi } from "@api/system";
import checkApi from "@common/checkApi";
import { OPTION_STACK, PALETTE } from "@common/style";
import {
	checkPassword, confirmPassword,
	requiredPassword,
	requiredText
} from "@common/validateForm";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import ImageBg from "@components/ImageBg";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default PassScreen = (props) => {
	const ref_passwords = useRef();
	const ref_re_passwords = useRef();

	const { currentUser } = useSelector((state) => state.user);

	const clearValidation = {
		errorOldPass: null,
		errorNewPass: null,
		errorReNewPass: null,
	};
	const [hideOldPass, setHideOldPass] = useState(true);
	const [hideNewPass, setHideNewPass] = useState(true);
	const [hideReNewPass, setHideReNewPass] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [validate, setValidate] = useState(clearValidation);
	const [oldPass, setOldPass] = useState();
	const [newPass, setNewPass] = useState();
	const [reNewPass, setReNewPass] = useState();

	const checkValidate = () => {
		let isValid = true;
		const errorMessage = { ...validate };

		if (requiredText(oldPass)) {
			errorMessage.errorOldPass = requiredText(old);
			isValid = false;
		}
		if (requiredText(newPass)) {
			errorMessage.errorNewPass = requiredText(newPass);
			isValid = false;
		} else if (requiredPassword(newPass)) {
			errorMessage.errorNewPass = requiredPassword(newPass);
			isValid = false;
		}
		if (requiredText(reNewPass)) {
			errorMessage.errorReNewPass = requiredText(reNewPass);
			isValid = false;
		}
		if (checkPassword(oldPass, newPass)) {
			errorMessage.errorNewPass = checkPassword(oldPass, newPass);
			isValid = false;
		}
		if (confirmPassword(reNewPass, newPass)) {
			errorMessage.errorReNewPass = confirmPassword(reNewPass, newPass);
			isValid = false;
		}
		!isValid && setValidate({ ...errorMessage });
		return isValid;
	};
	const handleOldPassword = (value) => {
		setValidate({ ...validate, errorOldPass: null });
		setOldPass(value);
	};
	const handleNewPassword = (value) => {
		setValidate({ ...validate, errorNewPass: null });
		setNewPass(value);
	};
	const handleReNewPassword = (value) => {
		setValidate({ ...validate, errorReNewPass: null });
		setReNewPass(value);
	};

	const changePassword = async () => {
		setIsLoading(true);
		if (checkValidate() == true) {
			const params = {
				id: currentUser.Id,
				oldPassword: oldPass,
				newPassword: newPass,
				reNewPassword: reNewPass,
			};
			const res = await UserApi.ChangePassword(params);
			if (checkApi.check(res)) {
				props.navigation.goBack();
			}
		}
		setIsLoading(false);
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: PALETTE.white,
			}}
		>
			<ScrollView
				style={{
					paddingHorizontal: OPTION_STACK.spacingHorizontal,
				}}
			>
				<View style={{ marginTop: 30 }}>
					<Text style={styles.label}>Mật khẩu cũ</Text>
					<CustomInput
						isHide={hideOldPass}
						title="Mật khẩu cũ"
						errorValue={validate?.errorOldPass}
						refNextInput={ref_passwords}
						setIsHideValue={setHideOldPass}
						handleValue={handleOldPassword}
					/>
				</View>
				<View>
					<Text style={styles.label}>Mật khẩu mới</Text>
					<CustomInput
						isHide={hideNewPass}
						title="Mật khẩu mới"
						errorValue={validate?.errorNewPass}
						refInput={ref_passwords}
						refNextInput={ref_re_passwords}
						setIsHideValue={setHideNewPass}
						handleValue={handleNewPassword}
					/>
				</View>
				<View>
					<Text style={styles.label}>Nhập lại mật khẩu mới</Text>
					<CustomInput
						isHide={hideReNewPass}
						title="Mật khẩu mới"
						errorValue={validate?.errorReNewPass}
						refInput={ref_re_passwords}
						setIsHideValue={setHideReNewPass}
						handleValue={handleReNewPassword}
						onSubmit={changePassword}
					/>
				</View>
				<View style={{ height: 164 }}></View>
			</ScrollView>
			<View
				style={{
					zIndex: 1000,
					position: "absolute",
					bottom: 24,
					left: OPTION_STACK.spacingHorizontal,
					right: OPTION_STACK.spacingHorizontal,
				}}
			>
				<CustomButton
					title="Cập nhật"
					onPress={changePassword}
					isLoading={isLoading}
				/>
			</View>
			<ImageBg />
		</View>
	);
};

const styles = StyleSheet.create({
	label: {
		fontFamily: "BeVietnamPro-600",
		fontSize: 14,
		marginBottom: 12,
	},
});
