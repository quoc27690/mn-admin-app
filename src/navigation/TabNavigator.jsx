import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { PALETTE } from "@common/style";
import HomeScreen from "@screens/HomeScreen";
import NotificationScreen from "@screens/NotificationScreen";
import ProfileScreen from "@screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "Home") {
						return (
							<Ionicons
								name="home"
								size={size}
								color={focused ? PALETTE.main : PALETTE.black}
							/>
						);
					} else if (route.name === "Notification") {
						return (
							<Ionicons
								name="notifications-sharp"
								size={size}
								color={focused ? PALETTE.main : PALETTE.black}
							/>
						);
					} else {
						return (
							<FontAwesome5
								name="user-cog"
								size={size}
								color={focused ? PALETTE.main : PALETTE.black}
							/>
						);
					}
				},
				tabBarInactiveTintColor: PALETTE.gray.DIMGRAY,
				tabBarActiveTintColor: PALETTE.main,
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Notification" component={NotificationScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
