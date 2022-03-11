import * as React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function GVScreen({ navigation, route }) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>GVScreen</Text>
			</View>
		</SafeAreaView>
	);
}

export default GVScreen;
