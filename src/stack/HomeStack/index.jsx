import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "@screens/HomeScreen";
import DetailScreen from "@screens/DetailScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Detail" component={DetailScreen} />
		</HomeStack.Navigator>
	);
}

export default HomeStackScreen;
