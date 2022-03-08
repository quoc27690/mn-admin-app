import {
	decrement,
	increment,
	incrementByAmount,
} from "@redux/features/userSlice";
import * as React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function HomeScreen({ navigation }) {
	const dispatch = useDispatch();
	const { value } = useSelector((state) => state.user);

	console.log("HomeScreen", value);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>HomeScreen</Text>
			<Button
				title="Go to Detail"
				onPress={() => navigation.navigate("Detail")}
			/>
			<Text>{value}</Text>
			<View>
				<Button title="decrement" onPress={() => dispatch(decrement())} />
				<Button title="increment" onPress={() => dispatch(increment())} />
				<Button
					title="incrementByAmount"
					onPress={() => dispatch(incrementByAmount(10))}
				/>
			</View>
		</View>
	);
}

export default HomeScreen;
