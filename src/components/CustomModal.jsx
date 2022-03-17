import { View, Text, Modal } from "react-native";
import React from "react";
import { OPTION_STACK, PALETTE } from "@common/style";
import CustomButton from "./CustomButton";
import { SVGClose } from "./SVG";

export default function CustomModal(props) {
	const {
		isShowModal = false,
		isAddBtn = true,
		title = null,
		isLoading = false,
		onClose = () => {},
		onSubmit = () => {},
	} = props;
	return (
		<>
			<Modal
				animationType="fade"
				transparent={true}
				visible={isShowModal}
				onRequestClose={onClose}
			>
				<View
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						top: 0,
						backgroundColor: "rgba(0,0,0,0.5)",
					}}
				></View>
			</Modal>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isShowModal}
				onRequestClose={onClose}
			>
				<View
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
					}}
				>
					<View
						style={{
							backgroundColor: PALETTE.white,
							borderTopLeftRadius: 30,
							borderTopRightRadius: 30,
							padding: OPTION_STACK.spacingHorizontal,
							paddingTop: 16,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: OPTION_STACK.spacingHorizontal,
							}}
						>
							<View
								style={{
									marginTop: 3,
								}}
							>
								<SVGClose width={16} height={16} onPress={onClose} />
							</View>
							<Text
								style={{
									fontFamily: "BeVietnamPro-600",
									fontSize: 14,
									marginLeft: 8,
								}}
							>
								{title}
							</Text>
						</View>
						{props.children}
						{isAddBtn && (
							<View style={{ marginTop: OPTION_STACK.spacingHorizontal }}>
								<CustomButton
									title="Thêm"
									onPress={onSubmit}
									isLoading={isLoading}
								/>
							</View>
						)}
						<View
							style={{
								marginTop: isAddBtn ? 16 : OPTION_STACK.spacingHorizontal,
							}}
						>
							<CustomButton
								isCloseBtn
								title="Đóng"
								onPress={onClose}
								isLoading={isLoading}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
}
