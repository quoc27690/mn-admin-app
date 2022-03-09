import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import { PALETTE } from "@common/style";
import { BarIndicator } from "react-native-indicators";

export default SplashScreen = (props) => {
	return (
		<ImageBackground
			source={require("@images/logo-screen.png")}
			resizeMode="cover"
			style={styles.container}
		>
			<Image source={require("@images/main-logo.png")} style={styles.logo_Img} />
			<View style={{ height: 100 }}>
				<BarIndicator color={PALETTE.main} count={6} size={30} />
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	logo_Img: {
		width: 170,
		height: 150,
		marginTop: 100,
	},
});
