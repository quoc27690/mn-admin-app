import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 34 : StatusBarManager.HEIGHT;

const PALETTE = {
	main: "#2175EF",
	white: "#fff",
	gray: {
		GAINSBORO: "#DCDCDC",
		DIMGRAY: "#696969",
	},
};
const OPTION_STACK = {
	spacingHorizontal: 22.5,
	// spacingLine: 5,
	buttonPrimary: {
		container: {
			height: 50,
			borderRadius: 5,
			backgroundColor: PALETTE.main,
		},
		text: {
			fontFamily: "BeVietnamPro-600",
			fontSize: 16,
			color: PALETTE.white,
			textTransform: "uppercase",
		},
	},
};
export { OPTION_STACK, STATUSBAR_HEIGHT, PALETTE };
