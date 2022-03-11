import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ProfileScreen from "@screens/ProfileScreen";
import DetailScreen from "@screens/DetailScreen";
import { AntDesign } from "@expo/vector-icons";
import InfoScreen from "./InfoScreen";
import PassScreen from "./PassScreen";

const SettingStack = createNativeStackNavigator();

function ProfileStack({ navigation }) {
	return (
		<SettingStack.Navigator
			initialRouteName="Profile"
			screenOptions={{ headerShown: false }}
		>
			<SettingStack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerLeft: (props) => (
						<AntDesign
							{...props}
							name="back"
							size={24}
							color="black"
							style={{ marginRight: 16 }}
							onPress={() => {
								navigation.goBack();
							}}
						/>
					),
				}}
			/>
			<SettingStack.Screen name="Info" component={InfoScreen} />
			<SettingStack.Screen name="Pass" component={PassScreen} />
			<SettingStack.Screen
				name="Detail"
				component={DetailScreen}
				options={{
					headerLeft: (props) => (
						<AntDesign
							{...props}
							name="back"
							size={24}
							color="black"
							style={{ marginRight: 16 }}
							onPress={() => {
								navigation.navigate("Profile");
							}}
						/>
					),
				}}
			/>
		</SettingStack.Navigator>
	);
}

export default ProfileStack;
