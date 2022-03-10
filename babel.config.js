module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		// fix Error: Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?
		plugins: [
			"react-native-reanimated/plugin",
		],
	};
};
