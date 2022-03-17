import { PALETTE } from "@common/style";
import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { SVGHidePassword, SVGShowPassword } from "./SVG";

export default function CustomInput(props) {
	const {
		value = null,
		isHide = null,
		title = null,
		errorValue = null,
		refInput = null,
		refNextInput = null,
		multiline = false,
		editable = true,
		setIsHideValue = () => {},
		handleValue = () => {},
		onSubmit = () => {},
	} = props;

	return (
		<Input
			value={value}
			secureTextEntry={isHide}
			placeholder={title}
			placeholderTextColor={PALETTE.gray.DIMGRAY}
			onChangeText={handleValue}
			errorMessage={errorValue}
			onSubmitEditing={() => {
				refNextInput?.current.focus() || onSubmit();
			}}
			ref={refInput}
			returnKeyType="next"
			multiline={multiline}
			editable={editable}
			blurOnSubmit={false}
			rightIcon={
				isHide !== null && (
					<View>
						{isHide ? (
							<SVGHidePassword
								width={16}
								height={16}
								onPress={() => setIsHideValue(!isHide)}
							/>
						) : (
							<SVGShowPassword
								width={16}
								height={16}
								onPress={() => setIsHideValue(!isHide)}
							/>
						)}
					</View>
				)
			}
			containerStyle={{
				paddingHorizontal: 0,
			}}
			inputContainerStyle={{
				borderRadius: 4,
				borderColor: PALETTE.gray.GAINSBORO,
				borderWidth: 1,
				paddingLeft: 16,
				paddingRight: 16,
			}}
			inputStyle={[
				{
					fontSize: 12,
					height: multiline ? 104 : 47,
				},
				multiline && {
					textAlignVertical: "top",
					paddingVertical: 16,
				},
			]}
			// errorStyle={{ position: "absolute", top: 50, left: 10 }}
			rightIconContainerStyle={{ position: "absolute", right: 16 }}
		/>
	);
}
