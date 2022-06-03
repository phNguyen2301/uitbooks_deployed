import axios from "axios";

export const addItemsToFavourite = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v2/book/${id}`);
  // console.log(data);
  dispatch({
    type: "ADD_TO_FAVOURITE",
    payload: {
      book: data.book._id,
      name: data.book.name,
      price: data.book.price,
      image: data.book.images[0].url,
      stock: data.book.Stock,
      author: data.book.author,
    },
  });
};

let initialState = {
  favouriteItems: [],
};

export default function favouriteSlice(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      const item = action.payload;
      const isItemExist = state.favouriteItems.find(
        (i) => i.book === item.book
      );
      if (isItemExist) {
        return {
          ...state,
          favouriteItems: state.favouriteItems.map((i) =>
            i.book === isItemExist.book ? item : i
          ),
        };
      } else {
        return {
          ...state,
          favouriteItems: [...state.favouriteItems, item],
        };
      }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}
