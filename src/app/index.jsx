import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "@screens/SplashScreen";
import HomeStackScreen from "@stack/HomeStack";
import SettingStackScreen from "@stack/SettingStack";
import SignInStackScreen from "@stack/SignInStack";
import React, { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();

function SrcApp() {
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsloading(false);
		}, 3000);
	}, []);

	if (isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}

	return (
		<NavigationContainer>
			{true ? (
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
