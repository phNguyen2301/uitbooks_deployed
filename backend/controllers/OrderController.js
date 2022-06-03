import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { Order } from "../models/Order.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { Book } from "../models/Book.js";
import mongodb from "mongodb";

// Create Order
export const createOrder = catchAsyncErrors(async (req, res, next) => {
  const { shippingInfo, orderItems, paymentInfo } = req.body;
  let itemsPrice = orderItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let shippingPrice = itemsPrice > 80000 ? 0 : 50000;
  let totalPrice = itemsPrice + shippingPrice;
  if (paymentInfo.id === "") {
    paymentInfo.id = new mongodb.ObjectId();
  }
  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

async function getInfoBooks(orders) {
  const ordersFullInfo = orders.map(async (order) => {
    const book = await Book.findById(order.book);
    return {
      name: book.name,
      price: book.price,
      image: book.images[0].public_id,
      book: id,
    };
  });
  return ordersFullInfo;
}

//  Get Single order
export const getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  // console.log(order);
  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// Get all orders
export const getAllOrders = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.user._id);
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json({
    success: true,
    orders,
  });
});
// Get All orders ---Admin
export const getAdminAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// Get monthly Incone --Admin
export const getAdminMonthlyIncome = catchAsyncErrors(
  async (req, res, next) => {
    const date = new Date();

    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 5)
    );

    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$totalPrice",
        },
      },
      {
        $group: {
          _id: "$month",
          Total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  }
);

// update Order Status ---Admin
export const updateAdminOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.book, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const book = await Book.findById(id);
  book.Stock -= quantity;

  await book.save({ validateBeforeSave: false });
}

// delete Order ---Admin
export const deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});
