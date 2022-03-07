import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "@screens/SignInScreen";
import SignUpScreen from "@screens/SignUpScreen";
import * as React from "react";

const Stack = createNativeStackNavigator();

function SignInStackScreen({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="SignIn" component={SignInScreen} />
			<Stack.Screen name="SignUp" component={SignUpScreen} />
		</Stack.Navigator>
	);
}

export default SignInStackScreen;
