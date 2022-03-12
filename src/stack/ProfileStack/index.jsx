import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "@screens/ProfileScreen";
import * as React from "react";
import InfoScreen from "@screens/ProfileScreen/InfoScreen";
import PassScreen from "@screens/ProfileScreen/PassScreen";
import BackButton from "@components/BackButton";

const SettingStack = createNativeStackNavigator();

function ProfileStack({ navigation }) {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const navigationDrawer = navigation.getParent();
			navigationDrawer.setOptions({ headerShown: false });
		});
		return unsubscribe;
	}, [navigation]);

	return (
		<SettingStack.Navigator initialRouteName="Profile">
			<SettingStack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
			<SettingStack.Screen
				name="InfoScreen"
				component={InfoScreen}
				options={{
					title: "Thông tin tài khoản",
					headerLeft: (props) => (
						<BackButton
							{...props}
							onPress={() => {
								navigation.navigate("ProfileScreen");
							}}
						/>
					),
					headerShown: true,
				}}
			/>
			<SettingStack.Screen
				name="PassScreen"
				component={PassScreen}
				options={{
					title: "Đổi mật khẩu",
					headerLeft: (props) => (
						<BackButton
							{...props}
							onPress={() => {
								navigation.navigate("ProfileScreen");
							}}
						/>
					),
					headerShown: true,
				}}
			/>
		</SettingStack.Navigator>
	);
}

export default ProfileStack;
