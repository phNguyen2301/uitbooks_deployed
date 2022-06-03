import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { Book } from "../models/Book.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ApiFeatures from "../utils/ApiFeatures.js";
import { v2 as cloudinary } from "cloudinary";

// create new book
export const createBook = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.uploader.upload(images[i], {
      folder: "books",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  // req.body.user = req.user.id;
  const book = await Book.create(req.body);

  res.status(201).json({
    success: true,
    book,
  });
});
// get all books
export const getAllBooks = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 9;

  const booksCount = await Book.countDocuments();

  const apiFeature = new ApiFeatures(Book.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  let books = await apiFeature.query;

  let filteredBooksCount = books.length;

  res.status(200).json({
    success: true,
    books,
    booksCount,
    resultPerPage,
    filteredBooksCount,
  });
});

// get new books
export const getNewBooks = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 9;
  const apiFeature = new ApiFeatures(
    Book.find().sort({ createAt: -1 }),
    req.query
  )
    .search()
    .filter()
    .pagination(resultPerPage);
  const books = await apiFeature.query;
  res.status(200).json({
    success: true,
    books,
    resultPerPage,
  });
});
// Get All Books (Admin)
export const getAdminBooks = catchAsyncErrors(async (req, res, next) => {
  const books = await Book.find();

  res.status(200).json({
    success: true,
    books,
  });
});
// get popular books
export const getPopularBooks = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 9;
  const apiFeature = new ApiFeatures(Book.find().sort({ Sold: -1 }), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const books = await apiFeature.query;
  res.status(200).json({
    success: true,
    books,
    resultPerPage,
  });
});
// get rated books
export const getRatedBooks = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 9;
  const apiFeature = new ApiFeatures(
    Book.find().sort({ ratings: -1 }),
    req.query
  )
    .search()
    .filter()
    .pagination(resultPerPage);
  const books = await apiFeature.query;
  res.status(200).json({
    success: true,
    books,
    resultPerPage,
  });
});
// get most review books
export const getMostReviewBooks = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 9;
  const apiFeature = new ApiFeatures(
    Book.find().sort({ numOfReviews: -1 }),
    req.query
  )
    .search()
    .filter()
    .pagination(resultPerPage);
  const books = await apiFeature.query;
  res.status(200).json({
    success: true,
    books,
    resultPerPage,
  });
});
// update book by id
export const updateBook = catchAsyncErrors(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  // console.log(first)
  if (!book) {
    return next(new ErrorHandler("Book is not found with this id", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < book.images.length; i++) {
      await cloudinary.uploader.destroy(book.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: "books",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    book,
  });
});
// delete book by id
export const deleteBook = catchAsyncErrors(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler("book is not found with this id", 404));
  }
  // Deleting Images From Cloudinary
  for (let i = 0; i < book.images.length; i++) {
    await cloudinary.uploader.destroy(book.images[i].public_id);
  }

  await book.remove();

  res.status(200).json({
    success: true,
    message: "book deleted successfully",
  });
});
// get single book detail
export const getSingleBook = catchAsyncErrors(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler("book is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    book,
  });
});

// Create review and update review
export const createBookReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, bookId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const book = await Book.findById(bookId);

  const isReviewed = book.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    book.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    book.reviews.push(review);
    book.numOfReviews = book.reviews.length;
  }

  let avg = 0;

  book.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  book.ratings = avg / book.reviews.length;

  await book.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get all reviews of a single book

export const getSingleBookReviews = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.findById(req.query.id);

  if (!book) {
    return next(new ErrorHandler("book is not found with this id", 404));
  }

  res.status(200).json({
    success: true,
    reviews: book.reviews,
  });
});
// Delete Review --Admin
export const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.findById(req.query.bookId);

  if (!book) {
    return next(new ErrorHandler("book not found with this id", 404));
  }

  const reviews = book.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Book.findByIdAndUpdate(
    req.query.bookId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
