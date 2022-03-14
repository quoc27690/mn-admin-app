import Reactotron from "reactotron-react-native";

import { NativeModules } from "react-native";
const scriptURL = NativeModules.SourceCode.scriptURL;
const address = scriptURL.split("://")[1].split("/")[0];
const hostname = address.split(":")[0];

Reactotron.configure({ host: hostname }) // controls connection & communication settings
	.useReactNative() // add all built-in react native plugins
	.connect(); // let's connect!
