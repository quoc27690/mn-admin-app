import { View, Text } from "react-native";
import React from "react";

export default function EmptyData(props) {
	const { icon = null, title = "" } = props;
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
			}}
		>
			{icon}
			<Text
				style={{
					marginTop: 36,
					textAlign: "center",
					fontSize: 20,
					fontFamily: "BeVietnamPro-700",
				}}
			>
				{title}
			</Text>
		</View>
	);
}
