import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v2/book/${id}`);
  dispatch({
    type: "ADD_TO_CART",
    payload: {
      book: data.book._id,
      name: data.book.name,
      price: data.book.price,
      image: data.book.images[0].url,
      stock: data.book.Stock,
      author: data.book.author,
      quantity,
    },
  });
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Remove from Cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    payload: id,
  });
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Save Shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: "SAVE_SHIPPING_INFO",
    payload: data,
  });
  // localStorage.setItem("shippingInfo", JSON.stringify(data));
};
export const clearCart = () => async (dispatch) => {
  dispatch({ type: "CLEAR_CART_ITEM" });
};

let initialState = {
  // cartItems: localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : [],

  // shippingInfo: localStorage.getItem("shippingInfo")
  //   ? JSON.parse(localStorage.getItem("shippingInfo"))
  //   : {
  //       address: "Khu phố 6",
  //       ward: "Phường Linh Trung",
  //       district: "Quận Thủ Đức",
  //       city: "Hồ Chí Minh",
  //       phone: "0123456789",
  //       email: "example@gmail.com",
  //     },
  cartItems: [],
  shippingInfo: {},
};

// Cart Slice
export default function cartSlice(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.book === item.book);
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.book === isItemExist.book ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.book !== action.payload),
      };
    case "SAVE_SHIPPING_INFO":
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case "CLEAR_CART_ITEM":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}
