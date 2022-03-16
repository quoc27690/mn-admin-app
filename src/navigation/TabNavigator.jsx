import { PALETTE } from "@common/style";
import ImageBgHeader from "@components/ImageBgHeader";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeScreen from "@screens/HomeScreen";
import NotificationScreen from "@screens/NotificationScreen";
import ProfileStack from "@stack/ProfileStack";
import React from "react";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
	React.useEffect(() => {
		// Hide the bar of Drawer
		const listHideTab = ["NotificationScreen", "ProfileStack"];
		const routeName = getFocusedRouteNameFromRoute(route);

		if (listHideTab.includes(routeName)) {
			navigation.setOptions({ headerShown: false });
		} else {
			navigation.setOptions({ headerShown: true });
		}
	}, [route]);

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarInactiveTintColor: PALETTE.gray.DIMGRAY,
				tabBarActiveTintColor: PALETTE.main,
			}}
		>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					title: "Trang chủ",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons name="home" color={PALETTE.main} size={size} />
						) : (
							<Ionicons name="home-outline" color={color} size={size} />
						),
				}}
			/>
			<Tab.Screen
				name="NotificationScreen"
				component={NotificationScreen}
				options={{
					tabBarBadge: 3,
					title: "Thông báo",
					headerBackground: () => <ImageBgHeader />,
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons name="notifications" color={PALETTE.main} size={size} />
						) : (
							<Ionicons
								name="notifications-outline"
								color={color}
								size={size}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="ProfileStack"
				component={ProfileStack}
				options={{
					title: "Thêm",
					headerShown: false,
					tabBarStyle: { display: "none" },
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons
								name="ellipsis-horizontal"
								color={PALETTE.main}
								size={size}
							/>
						) : (
							<Ionicons
								name="ellipsis-horizontal-outline"
								color={color}
								size={size}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
