import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ProfileScreen from "@screens/ProfileScreen";
import DetailScreen from "@screens/DetailScreen";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const SettingStack = createNativeStackNavigator();

function SettingStackScreen({ navigation }) {
	return (
		<SettingStack.Navigator initialRouteName="Profile">
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
								navigation.navigate('Profile');
							}}
						/>
					),
				}}
			/>
		</SettingStack.Navigator>
	);
}

export default SettingStackScreen;
