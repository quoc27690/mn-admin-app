import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function BackButton(props) {
	return (
		<AntDesign
			{...props}
			name="back"
			size={24}
			color="black"
			style={{ marginRight: 16 }}
		/>
	);
}