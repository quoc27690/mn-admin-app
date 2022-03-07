import * as React from "react";
import { Text, View, Button } from "react-native";

function ProfileScreen({ navigation, route }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>ProfileScreen</Text>
			<Button
				title="Go to Detail"
				onPress={() => navigation.navigate("Detail")}
			/>
		</View>
	);
}

export default ProfileScreen;
