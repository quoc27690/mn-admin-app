import { OPTION_STACK, PALETTE } from "@common/style";
import {
	SVGLoginPassword,
	SVGLoginUser,
	SVGHidePassword,
	SVGShowPassword,
} from "@components/SVG";
import React, { useRef, useState, useEffect } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import { AppCode, User } from "@common/const";
import jwt_decode from "jwt-decode";
import { UserAPI } from "@api/system";

const clearValidation = {
	errorUsername: null,
	errorPassword: null,
};

export default SignInScreen = (props) => {
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
			const res = await SecureStore.getItemAsync(User.SaveUser);
			if (res) {
				const saveUser = JSON.parse(res);
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
			let res = await UserAPI.SignIn(params);
			if (CheckAPI.check(res, true)) {
				await SecureStore.setItemAsync(User.UserToKen, res.Item.Token);
				await SecureStore.setItemAsync(
					User.CurrentUser,
					JSON.stringify(jwt_decode(res.Item.Token))
				);
				if (isSavePassword) {
					const saveUser = {
						username: username,
						password: password,
					};
					await SecureStore.setItemAsync(
						User.SaveUser,
						JSON.stringify(saveUser)
					);
				} else {
					await SecureStore.deleteItemAsync(JSON.stringify(User.SaveUser));
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
			style={styles.imageBackground}
		>
			<View style={styles.logo}>
				<Image
					source={require("@images/login-logo.png")}
					resizeMode="contain"
					style={styles.imageLogo}
				/>
			</View>
			<View style={styles.content}>
				<View style={styles.inputContainer}>
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
				</View>
				<View style={styles.savePasswordContainer}>
					<CheckBox
						title="Lưu mật khẩu"
						checked={isSavePassword}
						onPress={() => setIsSavePassword(!isSavePassword)}
						containerStyle={styles.containerStyleCheckBox}
						textStyle={styles.textStyleCheckBox}
					/>
				</View>
				<View style={styles.buttonContainer}>
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
	imageBackground: {
		flex: 1,
	},
	logo: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
	},
	imageLogo: {
		height: 73,
	},
	content: {
		marginTop: 50,
		marginHorizontal: OPTION_STACK.spacingHorizontal,
	},
	inputContainer: {},
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
	savePasswordContainer: {
		display: "flex",
		alignItems: "flex-end",
		marginRight: -10,
	},
	containerStyleCheckBox: {
		borderWidth: 0,
		backgroundColor: "transparent",
		paddingHorizontal: 0,
		paddingVertical: 0,
		marginHorizontal: 0,
		marginVertical: 0,
	},
	textStyleCheckBox: {
		marginRight: 0,
		marginLeft: 0,
	},
	buttonContainer: {
		marginTop: 25,
	},
});
