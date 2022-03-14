import React from "react";
import { View } from "react-native";
import CustomInput from "./CustomInput";

export default function CustomInputGroup(props) {
	const {
		iconComponent = null,
		value = null,
		isPassInput = false,
		isHide = false,
		title = null,
		errorValue = null,
		refInput = null,
		refNextInput = null,
		multiline = false,
		setIsHideValue = () => {},
		handleValue = () => {},
		onSubmit = () => {},
	} = props;

	return (
		<View style={{ flexDirection: "row" }}>
			<View style={{ marginTop: 13 }}>{iconComponent}</View>
			<View style={{ flex: 1, marginLeft: 19 }}>
				<CustomInput
					value={value}
					isPassInput={isPassInput}
					isHide={isHide}
					title={title}
					errorValue={errorValue}
					refInput={refInput}
					refNextInput={refNextInput}
					multiline={multiline}
					setIsHideValue={setIsHideValue}
					handleValue={handleValue}
					onSubmit={onSubmit}
				/>
			</View>
		</View>
	);
}
