import { HocSinhApi, LopHocApi, NhatKyHoatDongApi } from "@api/system";
import checkApi from "@common/checkApi";
import { removeVN } from "@common/function";
import { OPTION_STACK, PALETTE } from "@common/style";
import CustomDropdown from "@components/CustomDropdown";
import CustomSearchInput from "@components/CustomSearchInput";
import EmptyData from "@components/EmptyData";
import Loading from "@components/Loading";
import { SVGEmptyKid } from "@components/SVG/Empty";
import { Entypo } from "@expo/vector-icons";
import React, { createRef, useEffect, useState } from "react";
import { Alert, SectionList, Text, TouchableOpacity, View } from "react-native";
import CardHocSinh from "./components/CardHocSinh";
import ModalInsertOrUpdate from "./components/ModalInsertOrUpdate";

function HSScreen({ navigation, route }) {
	const [listHS, setListHS] = useState({ list: [], listAll: [] });
	const [listLopHoc, setListLopHoc] = useState({ list: [], listAll: [] });
	const [listNamHoc, setListNamHoc] = useState([]);
	const [sectionList, setSectionList] = useState([]);
	const [selectedNamHoc, setSelectedNamHoc] = useState(null);
	const [selectedLopHoc, setSelectedLopHoc] = useState(null);
	const [searchValue, setSearchValue] = useState(null);
	const [editId, setEditId] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isShowModal, setIsShowModal] = useState(false);

	const [elRefs, setElRefs] = useState([]);
	const [prevOpenedRow, setPrevOpenedRow] = useState(null);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			await Promise.all([fetchlistHocSinh(), fetchlistLopHoc()]);
			setIsLoading(false);
		})();
		console.log(1)
		return () => {
			console.log(222);
		}
	}, []);

	useEffect(() => {
		updateSectionList();
	}, [listHS]);

	// How can I use multiple refs for an array of elements with hooks?
	useEffect(() => {
		// add or remove refs
		setElRefs((elRefs) => {
			let countLength = 0;
			sectionList.forEach((x) => {
				countLength += x.data.length;
			});
			return Array(countLength)
				.fill()
				.map((_, i) => elRefs[i] || createRef());
		});
	}, [sectionList]);

	useEffect(() => {
		if (selectedNamHoc) {
			updateListLopHoc();
		}
	}, [selectedNamHoc]);

	useEffect(() => {
		if (selectedNamHoc && selectedLopHoc) {
			fetchListByFilter();
		}
	}, [selectedLopHoc]);

	useEffect(() => {
		search();
	}, [searchValue]);

	const fetchlistHocSinh = async () => {
		let resp = await HocSinhApi.GetAll();
		if (checkApi.check(resp, false)) {
			if (resp.Item.length > 0) {
				setListHS({
					list: resp.Item,
					listAll: resp.Item,
				});
			}
		}
	};

	const fetchlistLopHoc = async () => {
		let resp = await LopHocApi.GetAll();
		if (checkApi.check(resp, false)) {
			let nListLopHoc = [];
			let nListNamHoc = [];

			resp.Item.forEach((e) => {
				nListLopHoc.push({
					value: e.Id,
					label: e.TenLop,
					namHoc: e.NamHoc,
				});
			});
			// L???c tr??ng
			resp.Item = resp.Item.filter(
				(thing, index, self) =>
					index === self.findIndex((t) => t.NamHoc === thing.NamHoc)
			);
			// T???o m???ng m???i c?? value v?? label
			resp.Item.forEach((e) => {
				nListNamHoc.push({
					value: e.NamHoc,
					label: `${e.NamHoc}`,
				});
			});

			setListNamHoc(nListNamHoc);
			setListLopHoc({
				list: nListLopHoc,
				listAll: nListLopHoc,
			});
		}
	};

	const fetchListByFilter = async () => {
		setIsLoading(true);
		let resp = await NhatKyHoatDongApi.GetListHS(
			selectedNamHoc,
			selectedLopHoc
		);
		if (checkApi.check(resp, false)) {
			const nListHS = resp.Item.DsLopHoc_HS;
			setListHS({
				list: nListHS,
				listAll: nListHS,
			});
		}
		setIsLoading(false);
	};

	const search = () => {
		if (Array.isArray(listHS.listAll) == false || listHS.listAll.length == 0) {
			return;
		} else {
			let filterValuesClone = searchValue;
			let listRowsClone = listHS.listAll.filter((x) => {
				return (
					(filterValuesClone = (filterValuesClone || "").toLowerCase().trim()),
					removeVN(x.HoTen).toLowerCase().includes(removeVN(filterValuesClone))
				);
			});

			if (!searchValue) {
				setListHS({ list: listHS.listAll, listAll: listHS.listAll });
			} else {
				setListHS({ list: listRowsClone, listAll: listHS.listAll });
			}
		}
	};

	const updateSectionList = () => {
		//L???c d??? li???u -> t??ch th??nh group theo ch??? c??i ?????u ti??n c???a t??n h???c sinh -> d??ng cho sectionList

		//L???y danh s??ch ch??? c??i ?????u c???a t??n t???t c??? h???c sinh
		let listHeader = [];
		listHS.list.length > 0 &&
			listHS.list.forEach((x) => {
				let firstCharacter = "";
				let arr = x.HoTen.split(" ");
				firstCharacter = arr[arr.length - 1].charAt(0).toUpperCase();
				listHeader.push(firstCharacter);
			});
		listHeader = Array.from(new Set(listHeader)); //Lo???i b??? nh???ng ph???n t??? tr??ng nhau

		listHeader.sort(function (a, b) {
			//S???p x???p l???i th??? t???
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		});

		//L???y danh s??ch h???c sinh theo ch??? c??i ?????u ti??n c???a t??n h???c sinh (listHeader - listData)
		let listData = [];
		listHeader.forEach((x, i) => {
			listData.push({ title: x, data: [] });
			listHS.list.forEach((y, ii) => {
				let firstCharacter = "";
				let arr = y.HoTen.split(" ");
				firstCharacter = arr[arr.length - 1].charAt(0).toUpperCase();
				if (x === firstCharacter) {
					listData[i].data.push({ ...y, indexSwipeable: ii });
				}
			});
		});
		listData.forEach((x) => {
			//S???p x???p l???i th??? t???
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

	const updateListLopHoc = () => {
		let listLopHocClone = [...listLopHoc.listAll];
		listLopHocClone = listLopHocClone.filter((x) => x.namHoc == selectedNamHoc);
		setListLopHoc({ list: listLopHocClone, listAll: listLopHoc.listAll });
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

	const onDelete = (id) => {
		Alert.alert("B???n c?? mu???n x??a h???c sinh n??y", "", [
			{
				text: "H???y",
				onPress: () => console.log("Cancel Pressed"),
			},
			{
				text: "?????ng ??",
				onPress: async () => {
					let resp = await HocSinhApi.Delete([id]);
					if (checkApi.check(resp)) {
						prevOpenedRow?.current?.close();
						let listHSClone = JSON.parse(JSON.stringify(listHS));
						listHSClone.list = listHSClone.list.filter((x) => x.Id !== id);
						setListHS(listHSClone);
					}
				},
			},
		]);
	};

	const onSwipeableClose = (indexSwipeable) => {
		if (prevOpenedRow && prevOpenedRow !== elRefs[indexSwipeable]) {
			prevOpenedRow?.current?.close();
		}
		setPrevOpenedRow(elRefs[indexSwipeable]);
	};

	return (
		<View
			style={{
				flex: 1,
				position: "relative",
			}}
		>
			<View
				style={{ overflow: "hidden", paddingBottom: OPTION_STACK.spacingLine }}
			>
				<View
					style={{
						padding: OPTION_STACK.spacingHorizontal,
						backgroundColor: PALETTE.white,
						shadowColor: PALETTE.gray.GAINSBORO,
						shadowOffset: { width: 1, height: 1 },
						shadowOpacity: 0.1,
						shadowRadius: 3,
						elevation: OPTION_STACK.spacingLine,
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
						}}
					>
						<CustomDropdown
							style={{ marginRight: OPTION_STACK.spacingLine }}
							isInputGroup={false}
							title="Ch???n n??m h???c"
							selectedValue={selectedNamHoc}
							options={listNamHoc}
							setSelectedValue={setSelectedNamHoc}
						/>
						<CustomDropdown
							style={{ marginLeft: OPTION_STACK.spacingLine }}
							isInputGroup={false}
							title="Ch???n l???p h???c"
							selectedValue={selectedLopHoc}
							options={listLopHoc.list}
							setSelectedValue={setSelectedLopHoc}
						/>
					</View>
					<CustomSearchInput
						title="T??m h???c sinh"
						searchValue={searchValue}
						onSearch={setSearchValue}
						style={{ marginTop: 10 }}
					/>
				</View>
			</View>

			{isLoading ? (
				<Loading style={{ backgroundColor: PALETTE.white, flex: 1 }} />
			) : (
				<>
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
									onSwipeableClose={onSwipeableClose}
									refSwipeable={elRefs[item.indexSwipeable]}
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
									<Text
										style={{ fontFamily: "BeVietnamPro-700", fontSize: 14 }}
									>
										{title}
									</Text>
								</View>
							)}
						/>
					) : (
						<EmptyData
							icon={<SVGEmptyKid width={150} height={150} />}
							title="Kh??ng c?? tr??? n??o"
						/>
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
				</>
			)}
		</View>
	);
}

export default HSScreen;
