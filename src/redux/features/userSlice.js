import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const initialState = {
	userToken: null,
	currentUser: null,
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		updateToken: (state, action) => {
			state.userToken = action.payload;
			if (action.payload) {
				const objUser = jwt_decode(action.payload);
				state.currentUser = objUser;
			} else {
				state.currentUser = null;
			}
		},
		updateCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

export const { updateToken, updateCurrentUser } = userSlice.actions;
export default userSlice.reducer;
