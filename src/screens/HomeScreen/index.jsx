import { logOut } from "@common/identity";
import { updateToken } from "@redux/features/userSlice";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";

function HomeScreen({ navigation }) {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const navigationDrawer = navigation.getParent();
			navigationDrawer.setOptions({ headerShown: true });
		});
		return unsubscribe;
	}, [navigation]);

	const dispatch = useDispatch();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>HomeScreen</Text>
			<Button
				title="Log out"
				onPress={() => {
					logOut();
					dispatch(updateToken(null));
				}}
			/>
		</View>
	);
}

export default HomeScreen;
