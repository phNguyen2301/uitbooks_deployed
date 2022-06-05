import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../../services/user";
// import { persistor } from "../../store";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    clear: (state, action) => {
      state.error = null;
      state.message = null;
      state.status = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = action.payload.message;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload.message;
      })
      .addCase(registerRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.success = action.payload.success;
        state.avatar = action.payload.user.avatar.url;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.error = action.payload.message;
      })
      .addCase(logoutRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.status = action.payload.success;
        // persistor.purge();
      })
      .addCase(logoutRequest.rejected, (state, action) => {
        state.status = action.payload.success;
      })
      .addCase(loadUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = action.payload.message;
      });
  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await UserDataService.login(email, password);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerRequest = createAsyncThunk(
  "user/registerUserRequest",
  async ({ name, email, password, avatar }, { rejectWithValue }) => {
    try {
      const response = await UserDataService.registration(
        name,
        email,
        password,
        avatar
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutRequest = createAsyncThunk(
  "user/logoutRequest",
  async () => {
    const data = await UserDataService.logout()
      .then((res) => res.data)
      .catch((err) => err);

    return data;
  }
);

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  const data = await UserDataService.getDetails()
    .then((res) => res.data)
    .catch((err) => err);

  return data;
});

export const { clear } = userSlice.actions;
export default userSlice.reducer;
