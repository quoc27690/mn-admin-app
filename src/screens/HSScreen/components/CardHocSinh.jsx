import { Nothing } from "@common/const";
import { OPTION_STACK, PALETTE } from "@common/style";
import SVGFemale from "@components/SVG/SVGFemale";
import SVGMale from "@components/SVG/SVGMale";
import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwipeBtn = (props) => {
	const {
		title = null,
		color = PALETTE.main,
		item = null,
		swipeableRef = null,
		index = null,
		onPress = () => {},
	} = props;

	return (
		<TouchableOpacity
			onPress={() => {
				(async () => onPress(item.Id))().then((res) => {
					if (res) {
						swipeableRef.current.close();
					}
				});
			}}
			style={{
				marginTop: index > 0 ? OPTION_STACK.spacingLine : 0,
				backgroundColor: color,
				width: 50,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text
				style={{
					color: PALETTE.white,
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const CardHocSinh = (props) => {
	const swipeableRef = useRef(null);
	const {
		navigation,
		item = null,
		index = null,
		onOpenModal = () => {},
		onDelete = () => {},
	} = props;

	return (
		<Swipeable
			ref={swipeableRef}
			renderRightActions={() => (
				<>
					<SwipeBtn
						swipeableRef={swipeableRef}
						title="Xóa"
						color={PALETTE.red.RED}
						item={item}
						onPress={onDelete}
						index={index}
					/>
					<SwipeBtn
						title="Sửa"
						item={item}
						onPress={onOpenModal}
						index={index}
					/>
				</>
			)}
		>
			<TouchableOpacity
				onPress={() => console.log(111)}
				// activeOpacity={1}
				// onPress={() => {
				// 	navigation.navigate("ThongTinHocSinh", {
				// 		item: { ...item, namHoc, lopHoc },
				// 	});
				// }}
			>
				<View
					style={{
						paddingVertical: OPTION_STACK.spacingHorizontal,
						paddingHorizontal: OPTION_STACK.spacingHorizontal,
						backgroundColor: PALETTE.white,
						marginTop: index > 0 ? OPTION_STACK.spacingLine : 0,
					}}
				>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View style={{ flexDirection: "row" }}>
							<Image
								source={require("@images/user.png")}
								style={{ width: 48, height: 48, borderRadius: 25 }}
							/>
							<View style={{ marginLeft: 8, justifyContent: "space-between" }}>
								<Text
									style={{
										fontFamily: "BeVietnamPro-600",
										fontSize: 14,
										textTransform: "capitalize",
									}}
								>
									{item?.HoTen}
								</Text>
								<View style={{ flexDirection: "row" }}>
									{item?.LstHSSK_GhiNhan.length > 0 ? (
										<>
											<Text style={styles.hsskText}>
												{item.LstHSSK_GhiNhan[0].ChieuCao} cm
											</Text>
											<Text style={styles.hsskText}>
												{item.LstHSSK_GhiNhan[0].CanNang} kg
											</Text>
										</>
									) : (
										<Text style={styles.hsskTextNothing}>{Nothing}</Text>
									)}
								</View>
							</View>
						</View>
						{item?.GioiTinh == 0 ? (
							<SVGMale width={24} height={24} />
						) : (
							<SVGFemale width={24} height={24} />
						)}
					</View>

					<View style={styles.row}>
						<Text style={styles.text_title}>Ngày sinh</Text>
						<Text style={styles.text}>
							{item?.NgaySinh}/{item?.ThangSinh}/{item?.NamSinh}
						</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.text_title}>Phụ huynh</Text>
						<View>
							{item?.LstPHHS?.length > 0 ? (
								item.LstPHHS.map((mItem, index) => {
									return (
										<Text key={index} style={styles.text}>
											{mItem.FullName}
										</Text>
									);
								})
							) : (
								<Text key={index} style={styles.text}>
									{Nothing}
								</Text>
							)}
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</Swipeable>
	);
};

export default CardHocSinh;

const stylesCommon = StyleSheet.create({
	text_bg: {
		paddingVertical: 2,
		paddingHorizontal: 10,
		borderRadius: 30,
		marginRight: 4,
		fontFamily: "BeVietnamPro-600",
		fontSize: 12,
	},
});

const styles = StyleSheet.create({
	hsskText: {
		...stylesCommon.text_bg,
		backgroundColor: PALETTE.whiteFull.HONEYDEW,
		color: PALETTE.green.LIMEGREEN,
	},
	hsskTextNothing: {
		...stylesCommon.text_bg,
		backgroundColor: PALETTE.whiteFull.WHITESMOKE,
		color: PALETTE.gray.DIMGRAY,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
		fontSize: 14,
	},
	text_title: {
		fontFamily: "BeVietnamPro-400",
		color: PALETTE.black,
	},
	text: {
		fontFamily: "BeVietnamPro-600",
	},
});
