import { HocSinhApi, LopHocApi } from "@api/system";
import checkApi from "@common/checkApi";
import { Nothing } from "@common/const";
import { OPTION_STACK, PALETTE } from "@common/style";
import React, { useEffect, useState } from "react";
import { SectionList, Text, View } from "react-native";
import CardHocSinh from "./components/CardHocSinh";
import { Picker } from "@react-native-picker/picker";
import { SearchBar } from "react-native-elements";

function HSScreen({ navigation, route }) {
	const [listHSAll, setListHSAll] = useState([]);
	const [listHS, setListHS] = useState([]);
	const [listLopHoc, setListLopHoc] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedNamHoc, setSelectedNamHoc] = useState(null);
	const [searchValue, setSearchValue] = useState(null);
	const [sectionList, setSectionList] = useState([]);

	console.log({ listHS, listLopHoc });

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
		searchData?.length > 0 &&
			searchData.forEach((x) => {
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
			searchData.forEach((y) => {
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

	return (
		<View style={{ flex: 1 }}>
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
						justifyContent: "space-between",
					}}
				>
					<View
						style={{
							borderWidth: 1,
							borderColor: PALETTE.gray.DIMGRAY,
							borderRadius: 8,
							width: "48%",
						}}
					>
						<Picker
							selectedValue={selectedNamHoc}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedNamHoc(itemValue)
							}
						>
							<Picker.Item label="Java" value="java" enabled={false} />
							<Picker.Item label="Java" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
					</View>
					<View
						style={{
							borderWidth: 1,
							borderColor: PALETTE.gray.DIMGRAY,
							borderRadius: 8,
							width: "48%",
						}}
					>
						<Picker
							selectedValue={selectedNamHoc}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedNamHoc(itemValue)
							}
						>
							<Picker.Item label="Java" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
					</View>
				</View>
				<SearchBar
					placeholder="Tìm học sinh"
					round
					onChangeText={(value) => onSearch(value)}
					value={searchValue}
					containerStyle={{
						backgroundColor: PALETTE.white,
						padding: 0,
						paddingTop: OPTION_STACK.spacingHorizontal,
						borderTopWidth: 0,
						borderBottomWidth: 0,
					}}
					inputContainerStyle={{
						backgroundColor: PALETTE.gray.GAINSBORO,
						// backgroundColor: "green",
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
						// <CardHocSinh
						// 	data={item}
						// 	// namHoc={infoClass?.NamHoc}
						// 	// lopHoc={infoClass?.TenLop}
						// 	index={index}
						// 	navigation={navigation}
						// />
						<Text>abc</Text>
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
		</View>
	);
}

export default HSScreen;
