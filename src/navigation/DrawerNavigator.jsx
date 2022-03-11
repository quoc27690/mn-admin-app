import { createDrawerNavigator } from "@react-navigation/drawer";
import PHHSScreen from "@screens/HSScreen";
import HSScreen from "@screens/PHHSScreen";
import SettingStackScreen from "@stack/SettingStack";
import React from "react";
import { Text } from "react-native-elements";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={
				{
					// headerShown: false
				}
			}
		>
			<Drawer.Screen
				name="Main"
				component={TabNavigator}
				options={
					{
						// drawerLabel: () => null,
						// drawerIcon: () => {
						//   return <Text>abc</Text>
						// },
						// drawerActiveBackgroundColor: 'transparent'
					}
				}
			/>
			<Drawer.Screen name="HSScreen" component={HSScreen} />
			<Drawer.Screen name="PHHSScreen" component={PHHSScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
