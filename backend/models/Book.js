import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a Book"],
    trim: true,
    maxLength: [50, "Book name not exceed than 50 characters"],
  },
  author: {
    type: String,
    // required: [true, "Please enter a name of author"],
    trim: true,
    maxLength: [50, "Name not exceed than 50 characters"],
  },
  publisher: {
    type: String,
    // required: [true, "Please enter a name of Publisher"],
    trim: true,
    maxLength: [30, "Name not exceed than 30 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description of your Book"],
    maxlength: [10000, "Description is can not exceed than 10000 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price for your Book"],
    maxLength: [9, "Price can not exceed than 9 characters"],
  },
  discountPrice: {
    type: String,
    maxLength: [4, "Discount price can not exceed than 4 characters"],
  },
  // size: {
  //   type: String,
  // },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please add a category of your Book"],
  },
  Stock: {
    type: Number,
    required: [true, "Please add some stoke for your Book"],
    maxLength: [3, "Stock can not exceed than 3 characters"],
  },
  Sold: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  pageNumber: {
    type: Number,
    default: 0,
    required: true,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Book = mongoose.model("Book", bookSchema);
