import { OPTION_STACK, PALETTE } from "@common/style";
import React from "react";
import { Input } from "react-native-elements";
import { SVGHidePassword, SVGShowPassword } from "./SVG";
import { Ionicons } from "@expo/vector-icons";

export default function CustomInput(props) {
	const {
		type = "text",
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
				type === "date" ? (
					<Ionicons name="calendar-outline" size={16} color={PALETTE.main} />
				) : (
					isHide !== null && (
						<>
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
						</>
					)
				)
			}
			containerStyle={{
				paddingHorizontal: 0,
			}}
			inputContainerStyle={OPTION_STACK.input}
			inputStyle={[
				{
					...OPTION_STACK.inputText,
					height: multiline
						? OPTION_STACK.heightTexarea
						: OPTION_STACK.heightInput,
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
