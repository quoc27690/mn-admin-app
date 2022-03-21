import { PALETTE } from "@common/style";
import React from "react";
import { View } from "react-native";
import { BarIndicator } from "react-native-indicators";

export default function Loading(props) {
	const { style = null } = props;
	return (
		<View style={style}>
			<BarIndicator color={PALETTE.main} count={6} size={30} />
		</View>
	);
}
