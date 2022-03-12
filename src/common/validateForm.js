// Validate password
export const password = (value) =>
	value &&
	!/^.*(?=.{6,32})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=\S+$).*$/g.test(
		value
	)
		? //value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,100}$/g.test(value)
		  "Mật khẩu (có 6-32 ký tự) phải bao gồm chữ hoa , chữ thường , số và ký tự đặc biệt (không có khoảng trắng)."
		: undefined;
