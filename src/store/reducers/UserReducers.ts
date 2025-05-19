import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../../types/common";

const initialState: DataState = {
    userData: {},
    error: null,
    type: ''
};

const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // User Details
        getUserDetailsRequest: (state, { payload, type }) => {
            state.type = type;
        },
        getUserDetailsSuccess: (state, { payload, type }) => {
            state.type = type;
            state.userData = payload?.data;
        },
        getUserDetailsFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        verifyServiceProviderUserDetailsRequest: (state, { payload, type }) => {
            state.type = type;
        },
        verifyServiceProviderUserDetailsSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        verifyServiceProviderUserDetailsFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Add admin user
        AddAdminUserRequest: (state, { payload, type }) => {
            state.type = type;
        },
        AddAdminUserSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        AddAdminUserFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    getUserDetailsRequest,
    getUserDetailsSuccess,
    getUserDetailsFailure,

    verifyServiceProviderUserDetailsRequest,
    verifyServiceProviderUserDetailsSuccess,
    verifyServiceProviderUserDetailsFailure,

    AddAdminUserRequest,
    AddAdminUserSuccess,
    AddAdminUserFailure,
} = UserSlice.actions;

export default UserSlice.reducer;