import { HocSinhApi } from "@api/system";
import checkApi from "@common/checkApi";
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
	const { isShowModal = false, editId = null, onClose = () => {} } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [isShowDateTimePicker, setIsShowDateTimePicker] = useState(false);
	const [gender, setGender] = useState(null);
	const [birthday, setBirthday] = useState(null);
	const [name, setName] = useState(null);
	const [validate, setValidate] = useState(clearValidation);

	useEffect(() => {
		if (editId) {
			fetchById();
		}
		return () => {
			setName(null);
			setBirthday(null);
			setGender(null);
			setValidate(clearValidation);
		};
	}, [isShowModal]);

	const fetchById = async () => {
		let res = await HocSinhApi.GetById(editId);
		if (checkApi.check(res, false)) {
			const item = res.Item;
			setName(item.HoTen);
			setBirthday(
				new Date(
					moment(`${item.ThangSinh}/${item.NgaySinh}/${item.NamSinh}`, "MM-DD-YYYY").format()
				)
			);
			setGender(item.GioiTinh);
		}
	};

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

	const onSubmit = async () => {
		if (checkValidate()) {
			setIsLoading(true);
			const splitBirthday = moment(birthday).format("L").split("/");
			const item = {
				...(editId && { Id: editId }),
				HoTen: name,
				ThangSinh: splitBirthday[0],
				NgaySinh: splitBirthday[1],
				NamSinh: splitBirthday[2],
				GioiTinh: gender,
			};

			let res = editId
				? await HocSinhApi.Update(item)
				: await HocSinhApi.Insert(item);
			if (checkApi.check(res)) {
				console.log(111, { res });
			}
			setIsLoading(false);
		}
	};

	return (
		<>
			<CustomModal
				isShowModal={isShowModal}
				isUpdateBtn={editId ? true : false}
				title={editId ? "Sửa học sinh" : "Thêm học sinh"}
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
						activeOpacity={1}
					>
						<CustomInputGroup
							type="date"
							iconComponent={<SVGBirthday color={PALETTE.main} />}
							title="Ngày sinh"
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
