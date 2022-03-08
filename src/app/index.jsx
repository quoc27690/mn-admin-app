import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "@screens/SplashScreen";
import HomeStackScreen from "@stack/HomeStack";
import SettingStackScreen from "@stack/SettingStack";
import SignInStackScreen from "@stack/SignInStack";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

function SrcApp() {
	const { userToken } = useSelector((state) => state.user);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		getUserToken();
	}, []);

	const getUserToken = async () => {
		let userToken;

		try {
			userToken = await SecureStore.getItemAsync("userToken");
		} catch (e) {
			// Restoring token failed
		}
		
	};

	if (isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}

	return (
		<NavigationContainer>
			{!userToken ? (
				<SignInStackScreen />
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
