import * as React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function DetailScreen({ navigation, route }) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>DetailScreen</Text>
			</View>
		</SafeAreaView>
	);
}

export default DetailScreen;
