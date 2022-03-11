import { PALETTE } from "@common/style";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import NotificationScreen from "@screens/NotificationScreen";
import ProfileStack from "@stack/ProfileStack";
import React from "react";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "Trang chủ") {
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
				headerShown: false,
			})}
		>
			<Tab.Screen name="Trang chủ" component={HomeScreen} />
			<Tab.Screen
				name="Thông báo"
				component={NotificationScreen}
				options={{ tabBarBadge: 3 }}
			/>
			<Tab.Screen name="Tài khoản" component={ProfileStack} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
