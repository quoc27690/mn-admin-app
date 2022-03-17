import { Gender } from "@common/const";
import { PALETTE } from "@common/style";
import { requiredSelect, requiredText } from "@common/validateForm";
import CustomInputGroup from "@components/CustomInputGroup";
import CustomModal from "@components/CustomModal";
import { SVGAge, SVGBirthday, SVGGender } from "@components/SVG";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

const clearValidation = {
	errorName: null,
	errorBirthday: null,
	errorGender: null,
};

export default function ModalInsertOrUpdate(props) {
	const { isShowModal = false, onClose = () => {} } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [isShowDateTimePicker, setIsShowDateTimePicker] = useState(false);
	const [gender, setGender] = useState(null);
	const [birthday, setBirthday] = useState(null);
	const [name, setName] = useState(null);
	const [validate, setValidate] = useState(clearValidation);

	useEffect(() => {
		return () => {
			setGender(null);
			setBirthday(null);
			setName(null);
			setValidate(clearValidation);
		};
	}, [isShowModal]);

	const checkValidate = () => {
		let isValid = true;
		const errorMessage = { ...validate };
		if (requiredText(name)) {
			errorMessage.errorName = requiredText(name);
			isValid = false;
		}
		if (requiredText(birthday)) {
			errorMessage.errorBirthday = requiredText(birthday);
			isValid = false;
		}
		if (requiredSelect(gender)) {
			errorMessage.errorGender = requiredSelect(gender);
			isValid = false;
		}
		!isValid && setValidate({ ...errorMessage });
		return isValid;
	};

	const onChangeName = (value) => {
		setValidate({ ...validate, errorName: null });
		setName(value);
	};

	const onChangeGender = (value) => {
		setValidate({ ...validate, errorGender: null });
		setGender(value);
	};

	const onChangeBirthday = (event, time) => {
		if (event.type == "set") {
			// Button OK
			// Turn off dialog first to fix blinks 2 times
			setIsShowDateTimePicker(false);
			setValidate({ ...validate, errorBirthday: null });
			setBirthday(time);
		} else {
			// Button Cancel
			setIsShowDateTimePicker(false);
		}
	};

	const onSubmit = () => {
		if (checkValidate()) {
			setIsLoading(true);
			// const params = {
			// 	username: username,
			// 	password: password,
			// 	appCode: AppCode,
			// };
			// let res = await UserApi.LogIn(params);
			// if (checkApi.check(res, true)) {
			// 	await logIn(res.Item.Token);
			// 	if (isSavePassword) {
			// 		const saveUser = {
			// 			username: username,
			// 			password: password,
			// 		};
			// 		await setSaveUser(saveUser);
			// 	} else {
			// 		await deleteSaveUser();
			// 	}
			// }
			setIsLoading(false);
		}
	};

	return (
		<>
			<CustomModal
				isShowModal={isShowModal}
				title="Thêm học sinh"
				isLoading={isLoading}
				onClose={onClose}
				onSubmit={onSubmit}
			>
				<View>
					<CustomInputGroup
						iconComponent={<SVGAge color={PALETTE.main} />}
						title="Họ tên"
						value={name}
						errorValue={validate.errorName}
						handleValue={onChangeName}
					/>
					<TouchableOpacity
						onPress={() => {
							setIsShowDateTimePicker(true);
						}}
					>
						<CustomInputGroup
							iconComponent={<SVGBirthday color={PALETTE.main} />}
							title="Ngày sinh"
							editable={false}
							value={birthday ? moment(birthday).format("DD/MM/YYYY") : null}
							errorValue={validate.errorBirthday}
						/>
					</TouchableOpacity>
					<CustomInputGroup
						type="dropdown"
						iconComponent={<SVGGender color={PALETTE.main} />}
						title="Giới tính"
						selectedValue={gender}
						options={Gender}
						setSelectedValue={onChangeGender}
						errorValue={validate.errorGender}
					/>
				</View>
			</CustomModal>
			{isShowDateTimePicker && (
				<DateTimePicker
					value={birthday ? birthday : new Date()}
					onChange={onChangeBirthday}
				/>
			)}
		</>
	);
}
