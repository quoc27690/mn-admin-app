import BackButton from "@components/BackButton";
import ImageBgHeader from "@components/ImageBgHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "@screens/ProfileScreen";
import InfoScreen from "@screens/ProfileScreen/InfoScreen";
import PassScreen from "@screens/ProfileScreen/PassScreen";
import * as React from "react";

const SettingStack = createNativeStackNavigator();

function ProfileStack({ navigation }) {
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
					headerBackground: () => <ImageBgHeader />,
					headerLeft: (props) => (
						<BackButton
							{...props}
							onPress={() => {
								navigation.navigate("ProfileScreen");
							}}
						/>
					),
				}}
			/>
			<SettingStack.Screen
				name="PassScreen"
				component={PassScreen}
				options={{
					title: "Đổi mật khẩu",
					headerBackground: () => <ImageBgHeader />,
					headerLeft: (props) => (
						<BackButton
							{...props}
							onPress={() => {
								navigation.navigate("ProfileScreen");
							}}
						/>
					),
				}}
			/>
		</SettingStack.Navigator>
	);
}

export default ProfileStack;
