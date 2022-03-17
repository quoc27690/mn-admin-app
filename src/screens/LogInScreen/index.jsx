import { UserApi } from "@api/system";
import checkApi from "@common/checkApi";
import { AppCode } from "@common/const";
import {
	deleteSaveUser,
	getSaveUser,
	setSaveUser,
	useIdentity
} from "@common/identity";
import { OPTION_STACK } from "@common/style";
import { requiredText } from "@common/validateForm";
import CustomButton from "@components/CustomButton";
import CustomInputGroup from "@components/CustomInputGroup";
import { SVGLoginPassword, SVGLoginUser } from "@components/SVG";
import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { CheckBox } from "react-native-elements";

const clearValidation = {
	errorUsername: null,
	errorPassword: null,
};

export default LogInScreen = (props) => {
	const { logIn } = useIdentity();
	const ref_passwords = useRef();

	const [isLoading, setIsLoading] = useState(false);
	const [isHidePass, setIsHidePass] = useState(true);
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [validate, setValidate] = useState(clearValidation);
	const [isSavePassword, setIsSavePassword] = useState(false);

	const checkValidate = () => {
		let isValid = true;
		const errorMessage = { ...validate };
		if (requiredText(username)) {
			errorMessage.errorUsername = requiredText(username);
			isValid = false;
		}
		if (requiredText(password)) {
			errorMessage.errorPassword = requiredText(password);
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
			}
		})();
	}, []);

	const login = async () => {
		if (checkValidate()) {
			setIsLoading(true);
			const params = {
				username: username,
				password: password,
				appCode: AppCode,
			};
			let res = await UserApi.LogIn(params);
			if (checkApi.check(res, true)) {
				await logIn(res.Item.Token);
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
				<CustomInputGroup
					iconComponent={<SVGLoginUser />}
					value={username}
					title="Tên đăng nhập"
					errorValue={validate.errorUsername}
					refNextInput={ref_passwords}
					handleValue={handleUsername}
				/>
				<CustomInputGroup
					iconComponent={<SVGLoginPassword />}
					value={password}
					isHide={isHidePass}
					title="Mật khẩu"
					errorValue={validate.errorPassword}
					refInput={ref_passwords}
					setIsHideValue={setIsHidePass}
					handleValue={handlePassword}
					onSubmit={login}
				/>
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
					<CustomButton
						title="Đăng nhập"
						onPress={login}
						isLoading={isLoading}
					/>
				</View>
			</View>
		</ImageBackground>
	);
};
