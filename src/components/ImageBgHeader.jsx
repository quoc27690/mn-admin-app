import { Image } from "react-native";
import React from "react";

export default function ImageBgHeader() {
	return (
		<Image
			source={require("@images/header2.png")}
			resizeMode="cover"
			style={{ width: "100%" }}
		></Image>
	);
}
