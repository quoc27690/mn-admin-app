import { OPTION_STACK, PALETTE } from "@common/style";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";

export default function CustomDropdown(props) {
	const {
		style = null,
		isInputGroup = true,
		title = null,
		selectedValue = null,
		errorValue = null,
		options = [],
		setSelectedValue = () => {},
	} = props;
	return (
		<>
			<View
				style={[
					OPTION_STACK.input,
					{
						paddingLeft: 8,
						paddingRight: 0,
						height: OPTION_STACK.heightInput,
						flex: 1,
						justifyContent: "center",
					},
					style,
				]}
			>
				<Picker
					selectedValue={selectedValue}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
					style={{}}
					itemStyle={{}}
				>
					<Picker.Item
						label={title}
						value={null}
						// enabled={false}
						color={PALETTE.gray.DIMGRAY}
						style={OPTION_STACK.inputText}
					/>
					{options.map((x, i) => (
						<Picker.Item
							label={x.label}
							value={x.value}
							key={i}
							style={OPTION_STACK.inputText}
						/>
					))}
				</Picker>
			</View>
			{isInputGroup && (
				<Text
					style={{
						color: PALETTE.red.RED,
						fontSize: 12,
						marginLeft: 5,
						marginTop: 5,
					}}
				>
					{errorValue}
				</Text>
			)}
		</>
	);
}
