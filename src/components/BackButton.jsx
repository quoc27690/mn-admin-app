import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton(props) {
	return (
		<Ionicons
			{...props}
			name="arrow-back-outline"
			size={24}
			color="black"
			style={{ marginRight: 16 }}
		/>
	);
}