import ImageBgHeader from "@components/ImageBgHeader";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HSScreen from "@screens/HSScreen";
import PHHSScreen from "@screens/PHHSScreen";
import React from "react";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator screenOptions={{}}>
			<Drawer.Screen
				name="Main"
				component={TabNavigator}
				options={{
					title: "Trang chủ",
					headerBackground: () => <ImageBgHeader />,
				}}
			/>
			<Drawer.Screen
				name="HSScreen"
				component={HSScreen}
				options={{
					title: 'Quản lý học sinh',
					headerBackground: () => <ImageBgHeader />,
				}}
			/>
			<Drawer.Screen
				name="PHHSScreen"
				component={PHHSScreen}
				options={{
					title: 'Quản lý PHHS',
					headerBackground: () => <ImageBgHeader />,
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
