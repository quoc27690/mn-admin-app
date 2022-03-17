export const requiredText = (value) => {
	if (
		!value ||
		(typeof value === "object" &&
			value.hasOwnProperty("value") &&
			value.value === "")
	) {
		return "Dữ liệu không được để trống";
	}
	return undefined;
};

export const requiredSelect = (value) => {
	if (value === null) {
		return "Dữ liệu không được để trống";
	}
	return undefined;
};

// Validate password
export const requiredPassword = (value) =>
	value &&
	!/^.*(?=.{6,32})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=\S+$).*$/g.test(
		value
	)
		? //value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,100}$/g.test(value)
		  "Mật khẩu (có 6-32 ký tự) phải bao gồm chữ hoa , chữ thường , số và ký tự đặc biệt (không có khoảng trắng)"
		: undefined;

export const confirmPassword = (renewValue, newValue) => {
	if (renewValue !== newValue) {
		return "Mật khẩu xác nhận phải trùng với mật khẩu mới";
	}
	return undefined;
};

export const checkPassword = (oldValue, newValue) => {
	if (oldValue === newValue) {
		return "Mật khẩu mới không được trùng với mật khẩu cũ";
	}
	return undefined;
};

export const requiredEmail = (value) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? "Email không đúng định dạng"
		: undefined;

export const requiredPhoneNumber = (value) =>
	value &&
	!/^(?:((09|03|07|08|05|9|3|7|8|5)+([0-9]{8})\b)|)$/i.test(value.trim())
		? "Số điện thoại không đúng định dạng"
		: undefined;
