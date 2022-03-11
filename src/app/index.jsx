import { getToken, logOut } from "@common/identity";
import DrawerNavigator from "@navigation/DrawerNavigator";
import TabNavigator from "@navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { updateToken } from "@redux/features/userSlice";
import LogInScreen from "@screens/LogInScreen";
import SplashScreen from "@screens/SplashScreen";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function SrcApp() {
	const dispatch = useDispatch();
	const { userToken, currentUser } = useSelector((state) => state.user);

	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		loadFont();
		updateTokenToRedux();
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

	const updateTokenToRedux = async () => {
		const token = await getToken();
		if (token) {
			dispatch(updateToken(token));
		}
	};

	if (isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}

	//Kiểm tra token còn thời hạn sử dụng không, nếu hết sẽ logout
	const checkTime = async () => {
		const expires = new Date(1000 * currentUser.exp);
		const currentDate = new Date();
		currentDate.setTime(currentDate.getTime() + 12 * 60 * 60 * 1000);
		const subTotalHours = Math.floor(
			Math.abs(expires.getTime() - currentDate.getTime()) / 36e5
		);
		const checkDate = currentDate >= expires;
		if (subTotalHours <= 0 || checkDate === true) {
			logOut();
			dispatch(updateToken(null));
			return false;
		}
		return true;
	};

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				{userToken && checkTime() ? (
					<>
						<DrawerNavigator />
					</>
				) : (
					<LogInScreen />
				)}
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default SrcApp;
