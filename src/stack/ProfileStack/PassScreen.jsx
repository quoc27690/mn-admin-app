import React, { useRef, useState } from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { SVGHidePassword, SVGShowPassword } from "@components/SVG";
import { OPTION_STACK, PALETTE } from "@common/style";
import { useSelector } from "react-redux";
import ImageBg from "@components/ImageBg";

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

		if (oldPass?.trim()?.length == 0 || oldPass == null) {
			errorMessage.errorOldPass = "Mật khẩu cũ không thể để trống!";
			isValid = false;
		} else {
			errorMessage.errorOldPass = passwordComplex(oldPass) || null;
		}
		if (newPass?.trim()?.length == 0 || newPass == null) {
			errorMessage.errorNewPass = "Mật khẩu mới không thể để trống!";
			isValid = false;
		} else {
			errorMessage.errorNewPass = passwordComplex(newPass) || null;
		}
		if (reNewPass?.trim()?.length == 0 || reNewPass == null) {
			errorMessage.errorReNewPass = "Mật khẩu xác nhận không thể để trống!";
			isValid = false;
		}
		if (oldPass?.trim() == newPass?.trim() && oldPass?.trim()?.length != 0) {
			errorMessage.errorNewPass =
				"Mật khẩu mới không được trùng với mật khẩu cũ!";
			isValid = false;
		}
		if (reNewPass?.trim() != newPass?.trim()) {
			errorMessage.errorReNewPass =
				"Mật khẩu xác nhận phải trùng với mật khẩu mới!";
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
			const res = await UserAPI.changePassword(params);
			console.log(111, { res });
			if (CheckAPI.check(res, true)) {
				props.navigation.goBack();
			} else {
				Toast.show(res.Message);
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
				<View style={styles.rowContainer}>
					<Text style={styles.label}>Mật khẩu cũ</Text>
					<Input
						secureTextEntry={hideOldPass}
						placeholder="Mật khẩu cũ"
						onChangeText={handleOldPassword}
						errorMessage={validate?.errorOldPass}
						onSubmitEditing={() => {
							ref_passwords.current.focus();
						}}
						returnKeyType="next"
						blurOnSubmit={false}
						containerStyle={styles.containerStyle}
						inputContainerStyle={styles.inputContainerStyle}
						inputStyle={styles.inputStyle}
						errorStyle={styles.errorStyle}
						rightIcon={
							<View>
								{hideOldPass ? (
									<SVGHidePassword
										width={24}
										height={24}
										onPress={() => setHideOldPass(!hideOldPass)}
									/>
								) : (
									<SVGShowPassword
										width={24}
										height={24}
										onPress={() => setHideOldPass(!hideOldPass)}
									/>
								)}
							</View>
						}
						rightIconContainerStyle={styles.rightIconContainerStyle}
					/>
				</View>
				<View style={styles.rowContainer}>
					<Text style={styles.label}>Mật khẩu mới</Text>
					<Input
						secureTextEntry={hideNewPass}
						placeholder="Mật khẩu mới"
						onChangeText={handleNewPassword}
						onSubmitEditing={() => {
							ref_re_passwords.current.focus();
						}}
						ref={ref_passwords}
						errorMessage={validate?.errorNewPass}
						returnKeyType="next"
						blurOnSubmit={false}
						containerStyle={styles.containerStyle}
						inputContainerStyle={styles.inputContainerStyle}
						inputStyle={styles.inputStyle}
						errorStyle={styles.errorStyle}
						rightIcon={
							<View>
								{hideNewPass ? (
									<SVGHidePassword
										width={24}
										height={24}
										onPress={() => setHideNewPass(!hideNewPass)}
									/>
								) : (
									<SVGShowPassword
										width={24}
										height={24}
										onPress={() => setHideNewPass(!hideNewPass)}
									/>
								)}
							</View>
						}
						rightIconContainerStyle={styles.rightIconContainerStyle}
					/>
				</View>
				<View style={styles.rowContainer}>
					<Text style={styles.label}>Nhập lại mật khẩu mới</Text>
					<Input
						secureTextEntry={hideReNewPass}
						placeholder="Mật khẩu mới"
						onChangeText={handleReNewPassword}
						onSubmitEditing={changePassword}
						ref={ref_re_passwords}
						errorMessage={validate?.errorReNewPass}
						returnKeyType="next"
						blurOnSubmit={false}
						containerStyle={styles.containerStyle}
						inputContainerStyle={styles.inputContainerStyle}
						inputStyle={styles.inputStyle}
						errorStyle={styles.errorStyle}
						rightIcon={
							<View>
								{hideReNewPass ? (
									<SVGHidePassword
										width={24}
										height={24}
										onPress={() => setHideReNewPass(!hideReNewPass)}
									/>
								) : (
									<SVGShowPassword
										width={24}
										height={24}
										onPress={() => setHideReNewPass(!hideReNewPass)}
									/>
								)}
							</View>
						}
						rightIconContainerStyle={styles.rightIconContainerStyle}
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
				<Button
					title="Cập nhật"
					onPress={changePassword}
					isLoading={isLoading}
					buttonStyle={OPTION_STACK.buttonPrimary.container}
					titleStyle={OPTION_STACK.buttonPrimary.text}
				/>
			</View>
			<ImageBg />
		</View>
	);
};

const styles = StyleSheet.create({
	rowContainer: {
		marginTop: 30,
	},
	label: {
		fontFamily: "BeVietnamPro-600",
		fontSize: 14,
	},
	containerStyle: {
		flex: 1,
		paddingLeft: 0,
		paddingRight: 0,
		marginTop: 12,
	},
	inputContainerStyle: {
		borderBottomWidth: 0,
	},
	inputStyle: {
		paddingHorizontal: 16,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: PALETTE.gray.GAINSBORO,
		fontFamily: "BeVietnamPro-400",
		fontSize: 14,
		height: 56,
	},
	errorStyle: {
		position: "absolute",
		top: 50,
		left: 10,
	},
	rightIconContainerStyle: {
		position: "absolute",
		right: 16,
	},
	imageBackground: {
		zIndex: -1000,
		position: "absolute",
		bottom: -110,
		width: Dimensions.get("screen").width,
	},
});
