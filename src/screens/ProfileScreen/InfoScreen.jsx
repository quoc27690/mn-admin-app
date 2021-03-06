import { UserApi } from "@api/system";
import checkApi from "@common/checkApi";
import { HostUrlPort } from "@common/const";
import { useIdentity } from "@common/identity";
import { OPTION_STACK, PALETTE } from "@common/style";
import {
	requiredEmail,
	requiredPhoneNumber,
	requiredText
} from "@common/validateForm";
import CustomButton from "@components/CustomButton";
import CustomInputGroup from "@components/CustomInputGroup";
import ImageBg from "@components/ImageBg";
import {
	SVGChangeAvatar,
	SVGEmail,
	SVGGiaoVien,
	SVGLocation,
	SVGPhone
} from "@components/SVG";
import { updateCurrentUser } from "@redux/features/userSlice";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const clearValidation = {
	errorEmail: null,
	errorDiaChi: null,
	errorSDT: null,
};

export default InfoScreen = () => {
	const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
	const ref_sdt = useRef();
	const ref_dc = useRef();

	const { logOut } = useIdentity();
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);

	const [dataProfile, setDataProfile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [validate, setValidate] = useState(clearValidation);
	const [draftAvatar, setDraftAvatar] = useState(null);
	const [email, setEmail] = useState(null);
	const [address, setAddress] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (dataProfile) {
			setEmail(dataProfile?.Email);
			setAddress(dataProfile?.Address);
			setPhoneNumber(dataProfile?.PhoneNumber);
			setAvatar(dataProfile?.Avatar);
		}
	}, [dataProfile]);

	useEffect(() => {
		clearErrorMessage();
	}, [address, phoneNumber, email]);

	const pickImage = async () => {
		const status = await requestPermission();
		if (status.granted === true) {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			});
			if (!result.cancelled) {
				setDraftAvatar(result);
			}
		} else {
			alert("Permission to access camera roll is required!");
		}
	};

	const checkValidate = (props) => {
		let isValid = true;
		const errorMessage = { ...clearValidation };
		const { email, address, phoneNumber } = props;
		if (requiredText(address)) {
			errorMessage.errorDiaChi = requiredText(address);
			isValid = false;
		}
		if (requiredText(email)) {
			errorMessage.errorEmail = requiredText(email);
			isValid = false;
		}
		if (requiredText(phoneNumber)) {
			errorMessage.errorSDT = requiredText(phoneNumber);
			isValid = false;
		}
		if (requiredEmail(email)) {
			errorMessage.errorEmail = requiredEmail(email);
			isValid = false;
		}
		if (requiredPhoneNumber(phoneNumber)) {
			errorMessage.errorSDT = requiredPhoneNumber(phoneNumber);
			isValid = false;
		}
		!isValid && setValidate({ ...errorMessage });
		return isValid;
	};

	const fetchData = async () => {
		setIsLoading(true);
		const res = await UserApi.GetById(currentUser.Id);
		if (checkApi.check(res, false)) {
			setDataProfile(res.Item);
		}
		setIsLoading(false);
	};

	const clearErrorMessage = () => {
		setValidate({ ...clearValidation });
	};

	const updateProfile = async () => {
		const props = { email, address, phoneNumber };
		if (checkValidate(props)) {
			const params = {
				...dataProfile,
				Email: email,
				Address: address,
				PhoneNumber: phoneNumber,
			};
			setIsLoading(true);
			const res = await UserApi.Update(params);
			if (checkApi.check(res)) {
				if (draftAvatar) {
					const formData = new FormData();
					let extension = draftAvatar.uri.split(".");
					formData.append("file", {
						uri: draftAvatar.uri,
						name: `avatar.${extension[extension.length - 1]}`,
						type: `image/${extension[extension.length - 1]}`,
					});
					let resAvatar = await UserApi.UpdateAvatar(formData);
					if (checkApi.check(resAvatar?.data, false)) {
						const currentUserClone = JSON.parse(JSON.stringify(currentUser));
						currentUserClone.Avatar = resAvatar.data.Item;
						params.Avatar = resAvatar.data.Item;
						dispatch(updateCurrentUser(currentUserClone));
						setDraftAvatar(null);
					}
				}
				setDataProfile(params);
			}
			setIsLoading(false);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: PALETTE.white,
			}}
		>
			<ScrollView
				style={{
					paddingHorizontal: OPTION_STACK.spacingHorizontal,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 16,
					}}
				>
					<View style={{ position: "relative", alignSelf: "flex-start" }}>
						<Image
							source={
								draftAvatar
									? { uri: draftAvatar.uri }
									: avatar
									? {
											uri: `${HostUrlPort(5400)}/${avatar}`,
									  }
									: require("@images/user.png")
							}
							style={{ width: 56, height: 56, borderRadius: 28 }}
						/>
						<SVGChangeAvatar
							width={24}
							height={24}
							style={{ position: "absolute", right: -5, bottom: 0 }}
							onPress={pickImage}
						/>
					</View>
					<View style={{ marginLeft: 16 }}>
						<Text
							style={{
								fontFamily: "BeVietnamPro-700",
								fontSize: 16,
								textTransform: "capitalize",
							}}
						>
							{dataProfile?.FullName}
						</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<SVGGiaoVien width={12} height={12} />
							<Text
								style={{
									fontFamily: "BeVietnamPro-400",
									fontSize: 12,
									marginLeft: 4,
								}}
							>
								Gi??o vi??n
							</Text>
						</View>
					</View>
				</View>
				<Text
					style={{
						fontFamily: "BeVietnamPro-700",
						fontSize: 16,
						marginTop: 24,
						marginBottom: 16,
					}}
				>
					Th??ng tin c?? nh??n
				</Text>
				<CustomInputGroup
					iconComponent={<SVGEmail color={PALETTE.main} />}
					value={email}
					title="Email"
					errorValue={validate.errorEmail}
					refNextInput={ref_sdt}
					handleValue={setEmail}
				/>
				<CustomInputGroup
					iconComponent={<SVGPhone color={PALETTE.main} />}
					value={phoneNumber}
					title="S??? ??i???n tho???i"
					errorValue={validate.errorSDT}
					refInput={ref_sdt}
					refNextInput={ref_dc}
					handleValue={setPhoneNumber}
				/>
				<CustomInputGroup
					iconComponent={<SVGLocation color={PALETTE.main} />}
					value={address}
					title="?????a ch???"
					errorValue={validate.errorDiaChi}
					refInput={ref_dc}
					handleValue={setAddress}
					multiline={true}
				/>
				<View style={{ height: 164 }}></View>
			</ScrollView>
			<View
				style={{
					zIndex: 1000,
					position: "absolute",
					bottom: 24,
					left: OPTION_STACK.spacingHorizontal,
					right: OPTION_STACK.spacingHorizontal,
				}}
			>
				<CustomButton
					title="C???p nh???t"
					onPress={updateProfile}
					isLoading={isLoading}
				/>
				<View style={{ marginTop: 16 }}>
					<CustomButton
						isCloseBtn
						title="????ng xu???t"
						onPress={logOut}
						isLoading={isLoading}
					/>
				</View>
			</View>
			<ImageBg />
		</View>
	);
};
