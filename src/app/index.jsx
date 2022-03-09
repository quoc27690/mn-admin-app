import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "@screens/SplashScreen";
import HomeStackScreen from "@stack/HomeStack";
import SettingStackScreen from "@stack/SettingStack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import SignInScreen from "@screens/SignInScreen";
// import { useDispatch } from "react-redux";
import * as Font from "expo-font";
import { User } from "@common/const";

const Tab = createBottomTabNavigator();

function SrcApp() {
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		loadFont();
		setTimeout(() => {
			setIsloading(false);
	}, 2000);
	}, []);

	const loadFont = async () => {
		Font.loadAsync({
			"BeVietnamPro-400": require("@fonts/BeVietnamPro-Regular-400.ttf"),
			"BeVietnamPro-600": require("@fonts/BeVietnamPro-SemiBold-600.ttf"),
			"BeVietnamPro-700": require("@fonts/BeVietnamPro-Bold-700.ttf"),
		});
	};

	if (isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}

	//Kiểm tra token còn thời hạn sử dụng không, nếu hết sẽ logout
	const checkUser = async () => {
		const currentUser = await SecureStore.getItemAsync(User.CurrentUser);
		if (!currentUser || !currentUser.Id) {
			return false;
		}
		const expires = new Date(1000 * currentUser.exp);
		const currentDate = new Date();
		currentDate.setTime(currentDate.getTime() + 12 * 60 * 60 * 1000);
		const subTotalHours = Math.floor(
			Math.abs(expires.getTime() - currentDate.getTime()) / 36e5
		);
		const checkDate = currentDate >= expires;
		if (subTotalHours <= 0 || checkDate === true) {
			Logout();
			return false;
		}

		return true;
	};

	// Logout xóa hết token trên máy & app -> chuyển về trang login
	const Logout = async () => {
		// await RemoveToken();
		// dispatch(actions.AuthActions.UpdateToken(null));
	};

	return (
		<NavigationContainer>
			{!checkUser() ? (
				<SignInScreen />
			) : (
				<Tab.Navigator>
					<Tab.Screen name="HomeTab" component={HomeStackScreen} />
					<Tab.Screen name="SettingTab" component={SettingStackScreen} />
				</Tab.Navigator>
			)}
		</NavigationContainer>
	);
}

export default SrcApp;
