import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";
const namespace = "product";

const initialState = {
  // loading: null,
  // product: {},
  // isDeleted: null,
  // isUpdated: null,
  // err: "",
};
// export const updateProduct = createAsyncThunk(
//   `${namespace}/updateProduct`,
//   async (id, product) => {
//     // const config = {
//     //   headers: { "Content-Type": "application/json" },
//     // };
//     // const { data } = await axios.put(
//     //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
//     //   productData,
//     //   config
//     // );
//     const { data } = await axios.put(
//       `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
//       product
//     );
//     console.log(data);
//     return data.success;
//   }
// );
export const updateProduct = createAsyncThunk(
  `${namespace}/updateProduct`,
  async (productData) => {
    const { id, info } = productData;
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    // };

    // const { data } = await axios.put(
    //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
    //   info,
    //   config
    // );
    // console.log(data);
    // return data.success;
    const data = await ProductDataService.updateBook(id, info)
      .then((res) => {
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log(err.response.data);
        return err.response.data;
      });
    return data;
  }
);
export const deleteProduct = createAsyncThunk(
  `${namespace}/deleteProduct`,
  // async (id, { rejectWithValue, fulfillWithValue }) => {
  //   try {
  //     const res = await axios.delete(
  //       `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
  //     );
  //     const data = await res.json();
  //     return fulfillWithValue(data);
  //   } catch (err) {
  //     throw rejectWithValue(err);
  //   }
  // }
  async (id) => {
    const data = await ProductDataService.deleteBook(id)
      .then((res) => {
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log(err.response.data);
        return err.response.data;
      });
    return data;
  }
);
export const productSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrorsDeleted: (state, action) => {
      state.error = null;
    },
    resetStateUpdated: (state, action) => {
      state.isUpdated = false;
    },
    resetStateDelete: (state, action) => {
      state.isDeleted = false;
    },
  },
  extraReducers: {
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload.success;
      state.error = action.payload.message;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.isDeleted = action.payload.success;
      state.error = action.payload.message;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      // console.log(action.payload.response.data.message);
      state.error = action.payload.response.data.message;
    },
  },
});
export const { clearErrorsDeleted, resetStateUpdated, resetStateDelete } =
  productSlice.actions;

export default productSlice.reducer;
