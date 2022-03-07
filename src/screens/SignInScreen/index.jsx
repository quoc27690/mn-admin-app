import * as React from "react";
import { Text, View, Button } from "react-native";

function SignInScreen({ navigation, route }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>SignInScreen</Text>
			<Button
				title="Go to Sign Up"
				onPress={() => navigation.navigate("SignUp")}
			/>
		</View>
	);
}

export default SignInScreen;
