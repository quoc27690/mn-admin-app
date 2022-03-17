import { PALETTE } from "@common/style";
import React from "react";
import { Button } from "react-native-elements";

export default function CustomButton(props) {
	const {
		isCloseBtn = false,
		title = null,
		isLoading = false,
		onPress = () => {},
	} = props;

	return (
		<Button
			title={title}
			onPress={onPress}
			isLoading={isLoading}
			buttonStyle={[
				{ height: 50, borderRadius: 5, backgroundColor: PALETTE.main },
				isCloseBtn && {
					borderWidth: 1,
					borderColor: PALETTE.main,
					backgroundColor: PALETTE.white,
				},
			]}
			titleStyle={[
				{
					fontFamily: "BeVietnamPro-600",
					fontSize: 16,
					color: PALETTE.white,
					textTransform: "uppercase",
				},
				isCloseBtn && {
					color: PALETTE.main,
				},
			]}
		/>
	);
}
