// import { COLORS_PALETTE, OPTION_STACK, PALETTE } from "@common/style";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import {
// 	Dimensions,
// 	Image,
// 	Platform,
// 	ScrollView,
// 	StyleSheet,
// 	Text,
// 	TouchableWithoutFeedback,
// 	View,
// } from "react-native";
// import { Button, Input } from "react-native-elements";
// import {
// 	SVGBirthday,
// 	SVGCalendar,
// 	SVGChangeAvatar,
// 	SVGEmail,
// 	SVGGiaoVien,
// 	SVGLocation,
// 	SVGPhone,
// } from "../../../components/SVG";
// import { HeaderApp } from "../../Navigator/Custom/HeaderApp";
// import ProfileActions from "./Actions";
// import {
// 	SkeletonAvatarRow,
// 	SkeletonInput,
// } from "../../../components/SkeletonItems_ProfileScreen";
// import { HostUrlPort } from "../../../common/Const";

// export default InfoScreen = (props) => {
// 	const {
// 		DataProfile,
// 		Loading,
// 		CheckValidate,
// 		ErrorMessage,
// 		ClearErrorMessage,
// 		UpdateProfile,
// 		Logout,
// 		PickImage,
// 		DraftAvatar,
// 	} = ProfileActions();
// 	const [showDatePicker, setShowDatePicker] = useState(false);
// 	const [ngaySinh, setNgaySinh] = useState(new Date());
// 	const [email, setEmail] = useState();
// 	const [diaChi, setDiaChi] = useState();
// 	const [sdt, setSDT] = useState();
// 	const [avatar, setAvatar] = useState();

// 	useEffect(() => {
// 		if (DataProfile) {
// 			setEmail(DataProfile?.Email);
// 			setDiaChi(DataProfile?.DiaChi);
// 			setNgaySinh(moment(DataProfile?.NgaySinh).toDate());
// 			setSDT(DataProfile?.SDT);
// 			setAvatar(DataProfile?.Avatar);
// 		}
// 	}, [DataProfile]);

// 	useEffect(() => {
// 		ClearErrorMessage();
// 	}, [diaChi, sdt, email]);

// 	const onChange = (event, selectedDate) => {
// 		const currentDate = selectedDate || ngaySinh;
// 		setShowDatePicker(Platform.OS === "ios");
// 		setNgaySinh(currentDate);
// 	};

// 	const CapNhatThongTin = () => {
// 		const props = { email, diaChi, sdt };
// 		if (CheckValidate(props)) {
// 			const params = {
// 				...DataProfile,
// 				Email: email,
// 				DiaChi: diaChi,
// 				SDT: sdt,
// 				NgaySinh: ngaySinh,
// 			};
// 			UpdateProfile(params);
// 		}
// 		// props.navigation.goBack();
// 	};
// 	const userImg = require("../../../../assets/icon/user.png");
// 	return (
// 		<View style={styles.container}>
// 			<HeaderApp title="Thông tin tài khoản" left />
// 			<ScrollView
// 				style={{
// 					paddingHorizontal: PALETTE.spacingHorizontal,
// 				}}
// 			>
// 				{Loading ? (
// 					<View>
// 						<View style={{ height: 72 }}>
// 							<SkeletonAvatarRow />
// 						</View>
// 						<Text style={styles.infoText}>Thông tin cá nhân</Text>
// 						<SkeletonInput height={42} />
// 						<SkeletonInput height={42} />
// 						<SkeletonInput height={42} />
// 						<SkeletonInput height={126} />
// 					</View>
// 				) : (
// 					<>
// 						<View style={styles.headerContainer}>
// 							<View style={styles.avatarContainer}>
// 								<Image
// 									source={
// 										DraftAvatar
// 											? { uri: DraftAvatar.uri }
// 											: avatar
// 											? {
// 													uri: `${HostUrlPort(5400)}/${avatar}`,
// 											  }
// 											: userImg
// 									}
// 									style={styles.avatar}
// 								/>
// 								<SVGChangeAvatar
// 									width={24}
// 									height={24}
// 									style={styles.iconChangeAvatar}
// 									onPress={PickImage}
// 								/>
// 							</View>
// 							<View style={styles.nameContainer}>
// 								<Text style={styles.nameText}>{DataProfile?.HoTen}</Text>
// 								<View style={styles.giaoVienContainer}>
// 									<SVGGiaoVien width={12} height={12} />
// 									<Text style={styles.giaoVienText}>Giáo viên</Text>
// 								</View>
// 							</View>
// 						</View>
// 						<Text style={styles.infoText}>Thông tin cá nhân</Text>
// 						<View style={styles.rowContainer}>
// 							<SVGBirthday width={24} height={24} color="#2175EF" />
// 							<TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
// 								<View style={{ flex: 1 }}>
// 									<Input
// 										placeholder="Ngày sinh"
// 										containerStyle={styles.containerStyle}
// 										inputContainerStyle={styles.inputContainerStyle}
// 										inputStyle={styles.inputStyle}
// 										errorStyle={styles.errorStyle}
// 										value={moment(ngaySinh).format("DD/MM/YYYY")}
// 										editable={false}
// 										rightIcon={<SVGCalendar width={16} height={16} />}
// 										rightIconContainerStyle={styles.rightIconContainerStyle}
// 									/>
// 									{showDatePicker && (
// 										<DateTimePicker
// 											testID="dateTimePicker"
// 											value={ngaySinh}
// 											mode={"date"}
// 											is24Hour={true}
// 											display="default"
// 											onChange={onChange}
// 										/>
// 									)}
// 								</View>
// 							</TouchableWithoutFeedback>
// 						</View>
// 						<View style={styles.rowContainer}>
// 							<SVGEmail width={24} height={24} color="#2175EF" />
// 							<Input
// 								placeholder="Email"
// 								containerStyle={styles.containerStyle}
// 								inputContainerStyle={styles.inputContainerStyle}
// 								inputStyle={styles.inputStyle}
// 								errorStyle={styles.errorStyle}
// 								value={email}
// 								errorMessage={ErrorMessage.errorEmail}
// 								onChangeText={setEmail}
// 								returnKeyType="next"
// 								blurOnSubmit={false}
// 							/>
// 						</View>
// 						<View style={styles.rowContainer}>
// 							<SVGPhone width={24} height={24} color="#2175EF" />
// 							<Input
// 								placeholder="Số điện thoại"
// 								containerStyle={styles.containerStyle}
// 								inputContainerStyle={styles.inputContainerStyle}
// 								inputStyle={styles.inputStyle}
// 								errorStyle={styles.errorStyle}
// 								value={sdt}
// 								errorMessage={ErrorMessage.errorSDT}
// 								onChangeText={setSDT}
// 								returnKeyType="next"
// 								blurOnSubmit={false}
// 							/>
// 						</View>
// 						<View style={[styles.rowContainer, { alignItems: "flex-start" }]}>
// 							<View style={{ paddingTop: 4 }}>
// 								<SVGLocation width={24} height={24} color="#2175EF" />
// 							</View>
// 							<Input
// 								placeholder="Địa chỉ"
// 								containerStyle={styles.containerStyle}
// 								inputContainerStyle={styles.inputContainerStyle}
// 								inputStyle={[
// 									styles.inputStyle,
// 									{
// 										textAlignVertical: "top",
// 										paddingVertical: 16,
// 										height: 104,
// 									},
// 								]}
// 								errorStyle={styles.errorStyle}
// 								value={diaChi}
// 								errorMessage={ErrorMessage.errorDiaChi}
// 								onChangeText={setDiaChi}
// 								returnKeyType="next"
// 								blurOnSubmit={false}
// 								multiline={true}
// 							/>
// 						</View>
// 						<View style={styles.emptyView}></View>
// 					</>
// 				)}
// 			</ScrollView>
// 			<View style={styles.btnContainer}>
// 				<Button
// 					title="Cập nhật"
// 					onPress={CapNhatThongTin}
// 					loading={Loading}
// 					buttonStyle={OPTION_STACK.buttonPrimary}
// 					titleStyle={OPTION_STACK.buttonPrimaryText}
// 				/>
// 				<View style={{ marginTop: 16 }}>
// 					<Button
// 						title="Đăng xuất"
// 						onPress={Logout}
// 						loading={Loading}
// 						buttonStyle={OPTION_STACK.buttonClose}
// 						titleStyle={OPTION_STACK.buttonCloseText}
// 					/>
// 				</View>
// 			</View>
// 			<Image
// 				source={require("../../../../assets/UI_App/profile-background.png")}
// 				resizeMode="contain"
// 				style={styles.imageBackground}
// 			/>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: PALETTE.backgroundScreen.WHITE,
// 	},
// 	emptyView: {
// 		height: 164,
// 	},
// 	headerContainer: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 		marginTop: 16,
// 	},
// 	avatarContainer: {
// 		position: "relative",
// 		alignSelf: "flex-start",
// 	},
// 	avatar: {
// 		width: 56,
// 		height: 56,
// 		borderRadius: 28,
// 	},
// 	iconChangeAvatar: {
// 		position: "absolute",
// 		right: -5,
// 		bottom: 0,
// 	},
// 	nameContainer: {
// 		marginLeft: 16,
// 	},
// 	nameText: {
// 		fontFamily: "BeVietnamPro-700",
// 		fontSize: 16,
// 		textTransform: "capitalize",
// 	},
// 	giaoVienContainer: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 	},
// 	giaoVienText: {
// 		fontFamily: "BeVietnamPro-400",
// 		fontSize: 12,
// 		marginLeft: 4,
// 	},
// 	infoText: {
// 		fontFamily: "BeVietnamPro-700",
// 		fontSize: 16,
// 		marginTop: 24,
// 	},
// 	rowContainer: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 		marginTop: 16,
// 	},
// 	containerStyle: {
// 		flex: 1,
// 		paddingLeft: 19,
// 		paddingRight: 0,
// 	},
// 	inputContainerStyle: {
// 		borderBottomWidth: 0,
// 	},
// 	inputStyle: {
// 		paddingHorizontal: 16,
// 		borderRadius: 4,
// 		borderWidth: 1,
// 		borderColor: COLORS_PALETTE.gray.GAINSBORO,
// 		fontFamily: "BeVietnamPro-400",
// 		fontSize: 14,
// 		height: 47,
// 	},
// 	errorStyle: {
// 		position: "absolute",
// 		top: 40,
// 		left: 30,
// 	},
// 	rightIconContainerStyle: {
// 		position: "absolute",
// 		right: 16,
// 	},
// 	btnContainer: {
// 		zIndex: 1000,
// 		position: "absolute",
// 		bottom: 24,
// 		left: PALETTE.spacingHorizontal,
// 		right: PALETTE.spacingHorizontal,
// 	},
// 	imageBackground: {
// 		zIndex: -1000,
// 		position: "absolute",
// 		bottom: -110,
// 		width: Dimensions.get("screen").width,
// 	},
// });

import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class InfoScreen extends Component {
  render() {
    return (
      <View>
        <Text>InfoScreen</Text>
      </View>
    )
  }
}