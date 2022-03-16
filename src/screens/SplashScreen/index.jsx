import { PALETTE } from "@common/style";
import React from "react";
import { ImageBackground, View } from "react-native";
import { Image } from "react-native-elements";
import { BarIndicator } from "react-native-indicators";

export default SplashScreen = (props) => {
	return (
		<ImageBackground
			source={require("@images/logo-screen.png")}
			resizeMode="cover"
			style={{ flex: 1, alignItems: "center" }}
		>
			<Image
				source={require("@images/main-logo.png")}
				style={{
					width: 170,
					height: 150,
					marginTop: 100,
				}}
			/>
			<View style={{ height: 100 }}>
				<BarIndicator color={PALETTE.main} count={6} size={30} />
			</View>
		</ImageBackground>
	);
};