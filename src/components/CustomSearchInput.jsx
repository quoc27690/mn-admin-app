import { OPTION_STACK, PALETTE } from "@common/style";
import React from "react";
import { SearchBar } from "react-native-elements";

export default function CustomSearchInput(props) {
	const {
		style = null,
		title = "",
		searchValue = null,
		onSearch = () => {},
	} = props;
	return (
		<SearchBar
			placeholder={title}
			onChangeText={(value) => onSearch(value)}
			value={searchValue}
			containerStyle={[
				{
					backgroundColor: PALETTE.white,
					padding: 0,
					borderTopWidth: 0,
					borderBottomWidth: 0,
				},
				style,
			]}
			inputContainerStyle={{
				backgroundColor: PALETTE.whiteFull.GHOSTWHITE,
				borderRadius: OPTION_STACK.input.borderRadius,
				height: OPTION_STACK.heightInput,
			}}
			inputStyle={[OPTION_STACK.inputText, { marginLeft: 0}]}
			leftIconContainerStyle={{ marginTop: 5, marginLeft: 16 }}
		/>
	);
}
