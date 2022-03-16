import { logOut } from "@common/identity";
import { updateToken } from "@redux/features/userSlice";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";

function HomeScreen({ navigation }) {

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>HomeScreen</Text>
		</View>
	);
}

export default HomeScreen;
