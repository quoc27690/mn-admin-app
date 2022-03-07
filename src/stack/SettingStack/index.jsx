import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ProfileScreen from "@screens/ProfileScreen";
import DetailScreen from "@screens/DetailScreen";

const SettingStack = createNativeStackNavigator();

function SettingStackScreen({ navigation }) {
	return (
		<SettingStack.Navigator>
			<SettingStack.Screen name="Profile" component={ProfileScreen} />
			<SettingStack.Screen name="Detail" component={DetailScreen} />
		</SettingStack.Navigator>
	);
}

export default SettingStackScreen;
