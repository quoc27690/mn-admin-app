import React from "react";
import { View } from "react-native";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";

export default function CustomInputGroup(props) {
	const {
		type = "text",
		iconComponent = null,
		value = null,
		isHide = null,
		title = null,
		errorValue = null,
		refInput = null,
		refNextInput = null,
		multiline = false,
		setIsHideValue = () => {},
		handleValue = () => {},
		onSubmit = () => {},

		// prop for type="dropdown"
		selectedValue = null,
		options = [],
		setSelectedValue = () => {},
	} = props;

	return (
		<View style={{ flexDirection: "row" }}>
			<View style={{ marginTop: 13 }}>{iconComponent}</View>
			<View style={{ flex: 1, marginLeft: 19 }}>
				{type === "dropdown" ? (
					<CustomDropdown
						title={title}
						selectedValue={selectedValue}
						options={options}
						setSelectedValue={setSelectedValue}
						errorValue={errorValue}
					/>
				) : (
					<CustomInput
						type={type}
						value={value}
						isHide={isHide}
						title={title}
						errorValue={errorValue}
						refInput={refInput}
						refNextInput={refNextInput}
						multiline={multiline}
						editable={type === "date" ? false : true}
						setIsHideValue={setIsHideValue}
						handleValue={handleValue}
						onSubmit={onSubmit}
					/>
				)}
			</View>
		</View>
	);
}
