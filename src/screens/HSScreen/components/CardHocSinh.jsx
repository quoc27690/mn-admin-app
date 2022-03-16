import { PALETTE, OPTION_STACK } from "@common/style";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Nothing } from "@common/const";
import SVGFemale from "@components/SVG/SVGFemale";
import SVGMale from "@components/SVG/SVGMale";

const CardHocSinh = ({ navigation, data, index, namHoc, lopHoc }) => {
	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => {
				navigation.navigate("ThongTinHocSinh", {
					data: { ...data, namHoc, lopHoc },
				});
			}}
		>
			<View
				style={{
					...styles.flatView,
					marginTop: index !== 0 ? OPTION_STACK.spacingLine : 0,
				}}
			>
				<View style={styles.headerContainer}>
					<View style={styles.headerLeft}>
						<Image source={require("@images/user.png")} style={styles.avatar} />
						<View style={styles.name}>
							<Text style={styles.nameText}>{data?.HoTen}</Text>
							<View style={styles.hssk}>
								{data?.LstHSSK_GhiNhan.length > 0 ? (
									<>
										<Text style={styles.hsskText}>
											{data.LstHSSK_GhiNhan[0].ChieuCao} cm
										</Text>
										<Text style={styles.hsskText}>
											{data.LstHSSK_GhiNhan[0].CanNang} kg
										</Text>
									</>
								) : (
									<Text style={styles.hsskTextNothing}>{Nothing}</Text>
								)}
							</View>
						</View>
					</View>
					{data?.GioiTinh == 0 ? (
						<SVGMale width={24} height={24} />
					) : (
						<SVGFemale width={24} height={24} />
					)}
				</View>

				<View style={styles.row}>
					<Text style={styles.text_title}>Ngày sinh</Text>
					<Text style={styles.text}>
						{data.NgaySinh}/{data.ThangSinh}/{data.NamSinh}
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.text_title}>Phụ huynh</Text>
					<View>
						{data?.LstPHHS?.length > 0 ? (
							data.LstPHHS.map((mItem, index) => {
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
	flatView: {
		paddingVertical: 15,
		paddingHorizontal: OPTION_STACK.spacingHorizontal,
		backgroundColor: PALETTE.white,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	headerLeft: {
		flexDirection: "row",
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 25,
	},
	name: {
		marginLeft: 8,
		justifyContent: "space-between",
	},
	nameText: {
		fontFamily: "BeVietnamPro-600",
		fontSize: 14,
		textTransform: "capitalize",
	},
	hssk: {
		flexDirection: "row",
	},
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
