import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 34 : StatusBarManager.HEIGHT;

const PALETTE = {
	main: "#2175EF",
	white: "#fff",
	black: "#000",
	gray: {
		GAINSBORO: "#DCDCDC",
		DIMGRAY: "#696969",
	},
	whiteFull: {
		WHITE: "#FFFFFF",
		HONEYDEW: "#F0FFF0",
		GHOSTWHITE: "#F8F8FF",
		WHITESMOKE: "#F5F5F5",
		LAVENDERBLUSH: "#FFF0F5",
		OLDLACE: "#FDF5E6",
		AZURE: "#F0FFFF",
	},
	green: {
		LIMEGREEN: "#32CD32",
		FORESTGREEN: "#228B22",
		TEAL: "#008080",
		SEAGREEN: "#2E8B57",
	},
};

const OPTION_STACK = {
	spacingHorizontal: 22.5,
	spacingLine: 5,
};

export { OPTION_STACK, STATUSBAR_HEIGHT, PALETTE };
