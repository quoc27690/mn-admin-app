import { HocSinhApi, LopHocApi } from "@api/system";
import checkApi from "@common/checkApi";
import { Nothing } from "@common/const";
import { OPTION_STACK, PALETTE } from "@common/style";
import { Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { SectionList, Text, TouchableOpacity, View, Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import CardHocSinh from "./components/CardHocSinh";
import ModalInsertOrUpdate from "./components/ModalInsertOrUpdate";

function HSScreen({ navigation, route }) {
	const [listHSAll, setListHSAll] = useState([]);
	const [listHS, setListHS] = useState([]);
	const [listLopHoc, setListLopHoc] = useState([]);
	const [sectionList, setSectionList] = useState([]);
	const [selectedNamHoc, setSelectedNamHoc] = useState(null);
	const [searchValue, setSearchValue] = useState(null);
	const [editId, setEditId] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isShowModal, setIsShowModal] = useState(false);

	// console.log({ listHS, listLopHoc });

	useEffect(() => {
		(async () => {
			await Promise.all([fetchlistHocSinh(), fetchlistLopHoc()]);
		})();
	}, []);

	useEffect(() => {
		if (listHS.length > 0) {
			updateSectionList();
		}
	}, [listHS]);

	const fetchlistHocSinh = async () => {
		let resp = await HocSinhApi.GetAll();
		if (checkApi.check(resp, false)) {
			if (resp.Item.length > 0) {
				setListHSAll(resp.Item);
				setListHS(resp.Item);
			}
		}
	};
	const fetchlistLopHoc = async () => {
		let resp = await LopHocApi.GetAll();
		if (checkApi.check(resp, false)) {
			if (resp.Item.length > 0) {
				resp.Item.forEach((e) => {
					e.value = e.Id;
					e.label = e.TenLop;
				});
				setListLopHoc(resp.Item);
			}
		}
	};

	const onSearch = () => {};

	const updateSectionList = () => {
		//Lọc dữ liệu -> tách thành group theo chữ cái đầu tiên của tên học sinh -> dùng cho sectionList
		//Lấy danh sách chữ cái đầu của tên tất cả học sinh
		let listHeader = [];
		listHS?.length > 0 &&
			listHS.forEach((x) => {
				let firstCharacter = "";
				let arr = x.HoTen.split(" ");
				firstCharacter = arr[arr.length - 1].charAt(0).toUpperCase();
				listHeader.push(firstCharacter);
			});
		listHeader = Array.from(new Set(listHeader)); //Loại bỏ những phần tử trùng nhau

		listHeader.sort(function (a, b) {
			//Sắp xếp lại thứ tự
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		});

		//Lấy danh sách học sinh theo chữ cái đầu tiên của tên học sinh (listHeader - listData)
		let listData = [];
		listHeader.forEach((x, i) => {
			listData.push({ title: x, data: [] });
			listHS.forEach((y) => {
				let firstCharacter = "";
				let arr = y.HoTen.split(" ");
				firstCharacter = arr[arr.length - 1].charAt(0).toUpperCase();
				if (x === firstCharacter) {
					listData[i].data.push(y);
				}
			});
		});
		listData.forEach((x) => {
			//Sắp xếp lại thứ tự
			if (x.data.length > 1) {
				x.data.sort(function (a, b) {
					if (a.HoTen < b.HoTen) {
						return -1;
					}
					if (a.HoTen > b.HoTen) {
						return 1;
					}
					return 0;
				});
			}
		});
		setSectionList(listData);
	};

	const onOpenModal = (id) => {
		if (id) {
			setEditId(id);
		}
		setIsShowModal(true);
	};

	const onCloseModal = () => {
		if (editId) {
			setEditId(null);
		}
		setIsShowModal(false);
	};

	const onDelete = async (id) => {
		const reuslt = await AsyncAlert(id);
		return reuslt;
	};

	const AsyncAlert = async (id) =>
		new Promise((resolve) => {
			Alert.alert(
				"Bạn có muốn xóa học sinh này",
				"",
				[
					{
						text: "Hủy",
						onPress: () => console.log("Cancel Pressed"),
					},
					{
						text: "ok",
						onPress: async () => {
							setIsLoading(true);
							let resp = await HocSinhApi.Delete([id]);
							if (checkApi.check(resp)) {
								let listHSClone = JSON.parse(JSON.stringify(listHS));
								listHSClone = listHSClone.filter((x) => x.Id !== id);
								setListHS(listHSClone);
								resolve(true);
							}
							setIsLoading(false);
						},
					},
				],
				{ cancelable: false }
			);
		});

	return (
		<View
			style={{
				flex: 1,
				position: "relative",
			}}
		>
			<View
				style={{
					padding: OPTION_STACK.spacingHorizontal,
					backgroundColor: PALETTE.white,
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Picker
						selectedValue={selectedNamHoc}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedNamHoc(itemValue)
						}
						style={{ width: "50%" }}
					>
						<Picker.Item
							label="Chọn năm học"
							value="0"
							enabled={false}
							color={PALETTE.gray.DIMGRAY}
						/>
						<Picker.Item label="Java" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
					<Picker
						selectedValue={selectedNamHoc}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedNamHoc(itemValue)
						}
						style={{ width: "50%" }}
					>
						<Picker.Item
							label="Chọn lớp học"
							value="0"
							enabled={false}
							color={PALETTE.gray.DIMGRAY}
						/>
						<Picker.Item label="Java" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>
				<SearchBar
					placeholder="Tìm học sinh"
					onChangeText={(value) => onSearch(value)}
					value={searchValue}
					containerStyle={{
						backgroundColor: PALETTE.white,
						padding: 0,
						borderTopWidth: 0,
						borderBottomWidth: 0,
					}}
					inputContainerStyle={{
						backgroundColor: PALETTE.whiteFull.GHOSTWHITE,
						borderRadius: 8,
					}}
					inputStyle={{ fontFamily: "BeVietnamPro-400", fontSize: 14 }}
				/>
			</View>

			{sectionList?.length > 0 ? (
				<SectionList
					sections={sectionList}
					keyExtractor={(item, index) => item + index}
					renderItem={({ item, index }) => (
						<CardHocSinh
							item={item}
							index={index}
							navigation={navigation}
							onOpenModal={onOpenModal}
							onDelete={onDelete}
						/>
					)}
					renderSectionHeader={({ section: { title } }) => (
						<View
							style={{
								paddingHorizontal: OPTION_STACK.spacingHorizontal,
								height: 48,
								justifyContent: "center",
							}}
						>
							<Text style={{ fontFamily: "BeVietnamPro-700", fontSize: 14 }}>
								{title}
							</Text>
						</View>
					)}
				/>
			) : (
				<Text>{Nothing}</Text>
			)}
			<TouchableOpacity
				style={{
					backgroundColor: PALETTE.main,
					width: 48,
					height: 48,
					borderRadius: 24,
					alignItems: "center",
					justifyContent: "center",
					position: "absolute",
					right: OPTION_STACK.spacingHorizontal,
					bottom: OPTION_STACK.spacingHorizontal,
				}}
				onPress={() => onOpenModal(null)}
			>
				<Entypo name="plus" size={24} color={PALETTE.white} />
			</TouchableOpacity>
			<ModalInsertOrUpdate
				isShowModal={isShowModal}
				editId={editId}
				onClose={onCloseModal}
			/>
		</View>
	);
}

export default HSScreen;
