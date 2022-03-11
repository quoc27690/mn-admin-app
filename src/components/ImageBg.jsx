import { Image } from "react-native";
import React from "react";

export default function ImageBg() {
	return (
		<Image
			source={require("@images/profile-background.png")}
			resizeMode="contain"
			style={{
				zIndex: -1000,
				position: "absolute",
				bottom: -110,
				width: "100%",
			}}
		/>
	);
}
