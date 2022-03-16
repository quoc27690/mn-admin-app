import { HostUrlPort } from "@common/const";
import { OPTION_STACK, PALETTE } from "@common/style";
import BackButton from "@components/BackButton";
import ImageBg from "@components/ImageBg";
import { SVGDoiMatKhau, SVGThongTinTaiKhoan } from "@components/SVG/Menu";
import React from "react";
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const list = [
	{
		title: "Thông tin tài khoản",
		icon: <SVGThongTinTaiKhoan width={40} height={40} />,
		navigation: "InfoScreen",
		description: "Thông tin cá nhân, đăng xuất",
	},
	{
		title: "Đổi mật khẩu",
		icon: <SVGDoiMatKhau width={40} height={40} />,
		navigation: "PassScreen",
		description: "Thay đổi mật khẩu đăng nhập",
	},
];

export default ProfileScreen = ({ navigation }) => {
	const { currentUser } = useSelector((state) => state.user);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					backgroundColor: PALETTE.white,
					position: "relative",
				}}
			>
				<ImageBackground
					source={require("@images/header2.png")}
					resizeMode="cover"
					style={{ position: "relative", height: 85 }}
				>
					<View style={{ flex: 1, justifyContent: "center", marginLeft: OPTION_STACK.spacingHorizontal }}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<BackButton />
						</TouchableOpacity>
					</View>
					<View
						style={{
							position: "absolute",
							width: "100%",
							alignItems: "center",
							bottom: -100,
						}}
					>
						<Avatar
							rounded
							title="AD"
							containerStyle={{
								backgroundColor: PALETTE.black,
							}}
							size={90}
							source={
								currentUser.Avatar
									? {
											uri: `${HostUrlPort(5400)}/${currentUser.Avatar}`,
									  }
									: require("@images/user.png")
							}
						/>
						<Text
							style={{
								fontSize: 24,
								fontWeight: "bold",
								color: PALETTE.black,
								textAlign: "center",
							}}
							numberOfLines={2}
							ellipsizeMode={"head"}
						>
							{currentUser?.FullName}
						</Text>
						<Text
							style={{
								color: PALETTE.gray.DIMGRAY,
								fontSize: 14,
								marginVertical: 4,
								textAlign: "center",
							}}
						>
							Giáo Viên
						</Text>
					</View>
				</ImageBackground>
				<View
					style={{
						paddingHorizontal: OPTION_STACK.spacingHorizontal,
						marginTop: 120,
					}}
				>
					{list.map((item, i) => (
						<ListItem
							key={i}
							onPress={() => navigation.navigate(item.navigation)}
						>
							{item.icon}
							<ListItem.Content>
								<ListItem.Title
									style={{
										fontSize: 18,
										color: PALETTE.black,
										fontWeight: "bold",
									}}
								>
									{item.title}
								</ListItem.Title>
								<ListItem.Subtitle
									style={{ fontSize: 14, color: PALETTE.gray.DIMGRAY }}
								>
									{item.description}
								</ListItem.Subtitle>
							</ListItem.Content>
							<ListItem.Chevron size={24} color={PALETTE.main} />
						</ListItem>
					))}
				</View>
				<ImageBg />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});
