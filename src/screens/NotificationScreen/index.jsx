import * as React from "react";
import { View, Text } from "react-native";

const NotificationScreen = ({ navigation }) => {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const navigationDrawer = navigation.getParent();
			navigationDrawer.setOptions({ headerShown: true });
		});
		return unsubscribe;
	}, [navigation]);

	return (
		<View>
			<Text>NotificationScreen</Text>
		</View>
	);
};

export default NotificationScreen;
