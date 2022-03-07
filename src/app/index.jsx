import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "@screens/SplashScreen";
import HomeStackScreen from "@stack/HomeStack";
import SettingStackScreen from "@stack/SettingStack";
import SignInStackScreen from "@stack/SignInStack";
import React, { useEffect, useState } from "react";

function SrcApp() {
	const [isLoading, setIsloading] = useState(true);

	if (state.isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}

	return (
		<Stack.Navigator>
			{state.userToken == null ? (
				// No token found, user isn't signed in
				<Stack.Screen
					name="SignIn"
					component={SignInScreen}
					options={{
						title: "Sign in",
						// When logging out, a pop animation feels intuitive
						// You can remove this if you want the default 'push' animation
						animationTypeForReplace: state.isSignout ? "pop" : "push",
					}}
				/>
			) : (
				// User is signed in
				<Stack.Screen name="Home" component={HomeScreen} />
			)}
		</Stack.Navigator>
	);
}

export default SrcApp;
