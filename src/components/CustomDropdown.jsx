import { PALETTE } from "@common/style";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View } from "react-native";

export default function CustomDropdown(props) {
	const {
		title = null,
		selectedValue = null,
		errorValue = null,
		options = [],
		setSelectedValue = () => {},
	} = props;
	return (
		<View
			style={{
				borderWidth: 1,
				borderRadius: 4,
				borderColor: PALETTE.gray.GAINSBORO,
				paddingLeft: 5,
			}}
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
					enabled={false}
					color={PALETTE.gray.DIMGRAY}
					style={{
						fontSize: 12,
					}}
				/>
				{options.map((x, i) => (
					<Picker.Item
						label={x.label}
						value={x.value}
						key={i}
						style={{
							fontSize: 12,
						}}
					/>
				))}
			</Picker>
		</View>
	);
}
