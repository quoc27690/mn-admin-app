import { UserAPI } from "@api/system";
import checkApi from "@common/checkApi";
import { AppCode } from "@common/const";
import {
	deleteSaveUser,
	getSaveUser,
	logIn,
	setSaveUser,
} from "@common/identity";
import { OPTION_STACK, PALETTE } from "@common/style";
import {
	SVGHidePassword,
	SVGLoginPassword,
	SVGLoginUser,
	SVGShowPassword,
} from "@components/SVG";
import { updateToken } from "@redux/features/userSlice";
import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import { useDispatch } from "react-redux";

const clearValidation = {
	errorUsername: null,
	errorPassword: null,
};

export default LogInScreen = (props) => {
	const dispatch = useDispatch();
	const ref_passwords = useRef();

	const [isLoading, setIsLoading] = useState(false);
	const [hidePass, setHidePass] = useState(true);
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [validate, setValidate] = useState(clearValidation);
	const [isSavePassword, setIsSavePassword] = useState(false);
	const [isDisableHidePass, setIsDisableHidePass] = useState(false);

	const checkValidate = () => {
		let isValid = true;
		const errorMessage = { ...validate };
		if (username?.trim()?.length == 0 || username == null) {
			errorMessage.errorUsername = "Tài khoản đăng nhập không thể để trống!";
			isValid = false;
		}
		if (password?.trim()?.length == 0 || password == null) {
			errorMessage.errorPassword = "Mật khẩu không thể để trống!";
			isValid = false;
		}
		!isValid && setValidate({ ...errorMessage });
		return isValid;
	};

	useEffect(() => {
		(async () => {
			const saveUser = await getSaveUser();
			if (saveUser) {
				setUsername(saveUser.username);
				setPassword(saveUser.password);
				setIsSavePassword(true);
				setIsDisableHidePass(true);
			}
		})();
	}, []);

	useEffect(() => {
		if (!password) {
			setIsDisableHidePass(false);
		}
	}, [password]);

	const login = async () => {
		if (checkValidate()) {
			setIsLoading(true);
			const params = {
				username: username,
				password: password,
				appCode: AppCode,
			};
			let res = await UserAPI.LogIn(params);
			if (checkApi.check(res, true)) {
				await logIn(res.Item.Token);
				dispatch(updateToken(res.Item.Token));
				if (isSavePassword) {
					const saveUser = {
						username: username,
						password: password,
					};
					await setSaveUser(saveUser);
				} else {
					await deleteSaveUser();
				}
			}
			setIsLoading(false);
		}
	};

	const handleUsername = (value) => {
		setValidate({ ...validate, errorUsername: null });
		setUsername(value);
	};

	const handlePassword = (value) => {
		setValidate({ ...validate, errorPassword: null });
		setPassword(value);
	};

	return (
		<ImageBackground
			source={require("@images/login-background.png")}
			resizeMode="cover"
			style={{ flex: 1 }}
		>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					marginTop: 50,
				}}
			>
				<Image
					source={require("@images/login-logo.png")}
					resizeMode="contain"
					style={{ height: 73 }}
				/>
			</View>
			<View
				style={{
					marginTop: 50,
					marginHorizontal: OPTION_STACK.spacingHorizontal,
				}}
			>
				<>
					<View style={styles.inputGroup}>
						<View style={styles.icon}>
							<SVGLoginUser />
						</View>
						<View style={styles.input}>
							<Input
								placeholder="Tên đăng nhập"
								placeholderTextColor={PALETTE.gray.DIMGRAY}
								onChangeText={handleUsername}
								errorMessage={validate.errorUsername}
								onSubmitEditing={() => {
									ref_passwords.current.focus();
								}}
								returnKeyType="next"
								blurOnSubmit={false}
								containerStyle={styles.containerStyleInput}
								inputContainerStyle={styles.inputContainerStyleInput}
								inputStyle={styles.inputStyleInput}
								value={username}
							/>
						</View>
					</View>
					<View style={styles.inputGroup}>
						<View style={styles.icon}>
							<SVGLoginPassword />
						</View>
						<View style={styles.input}>
							<Input
								secureTextEntry={hidePass}
								placeholder="Mật khẩu"
								placeholderTextColor={PALETTE.gray.DIMGRAY}
								onChangeText={handlePassword}
								onSubmitEditing={login}
								ref={ref_passwords}
								errorMessage={validate.errorPassword}
								rightIcon={
									!isDisableHidePass && (
										<View>
											{hidePass ? (
												<SVGHidePassword
													width={16}
													height={16}
													onPress={() => setHidePass(!hidePass)}
												/>
											) : (
												<SVGShowPassword
													width={16}
													height={16}
													onPress={() => setHidePass(!hidePass)}
												/>
											)}
										</View>
									)
								}
								containerStyle={styles.containerStyleInput}
								inputContainerStyle={styles.inputContainerStyleInput}
								inputStyle={styles.inputStyleInput}
								value={password}
							/>
						</View>
					</View>
				</>
				<View
					style={{ display: "flex", alignItems: "flex-end", marginRight: -10 }}
				>
					<CheckBox
						title="Lưu mật khẩu"
						checked={isSavePassword}
						onPress={() => setIsSavePassword(!isSavePassword)}
						containerStyle={{
							borderWidth: 0,
							backgroundColor: "transparent",
							paddingHorizontal: 0,
							paddingVertical: 0,
							marginHorizontal: 0,
							marginVertical: 0,
						}}
						textStyle={{ marginRight: 0, marginLeft: 0 }}
					/>
				</View>
				<View style={{ marginTop: 25 }}>
					<Button
						title="Đăng nhập"
						onPress={login}
						loading={isLoading}
						buttonStyle={OPTION_STACK.buttonPrimary.container}
						titleStyle={OPTION_STACK.buttonPrimary.text}
					/>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	inputGroup: {
		flexDirection: "row",
	},
	icon: {
		marginTop: 13,
	},
	input: {
		flex: 1,
		marginLeft: 19,
	},
	containerStyleInput: {
		paddingHorizontal: 0,
	},
	inputContainerStyleInput: {
		borderRadius: 4,
		borderColor: PALETTE.gray.GAINSBORO,
		borderWidth: 1,
		height: 47,
		paddingLeft: 16,
		paddingRight: 16,
	},
	inputStyleInput: {
		fontSize: 12,
	},
});
