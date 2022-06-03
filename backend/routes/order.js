import express from "express";
import {
  createOrder,
  deleteOrder,
  getAdminAllOrders,
  getAdminMonthlyIncome,
  getAllOrders,
  getSingleOrder,
  updateAdminOrder,
} from "../controllers/OrderController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();
/**
 *@swagger
 *components:
 *  schemas:
 *    Order:
 *      type: object
 *      required:
 *        - shippingInfo
 *        - orderItems
 *        - paymentInfo
 *        - itemsPrice
 *        - taxPrice
 *        - shippingPrice
 *        - totalPrice
 *      properties:
 *        shippingInfo:
 *          type: object
 *          required:
 *            - address
 *            - city
 *            - country
 *            - phoneNo
 *          properties:
 *            address:
 *              type: string
 *            city:
 *              type: string
 *            country:
 *              type: string
 *            phoneNo:
 *              type: number
 *        orderItems:
 *          type: object
 *          required:
 *            - name
 *            - price
 *            - quantity
 *            - image
 *            - book
 *          properties:
 *            name:
 *              type: string
 *            price:
 *              type: number
 *            image:
 *              type: string
 *            quantity:
 *              type: number
 *            book:
 *              type: string
 *        paymentInfo:
 *          type: object
 *          required:
 *            - id
 *            - status
 *          properties:
 *            id:
 *              type: string
 *            status:
 *              type: string
 *        itemPrice:
 *          type: number
 *        taxPrice:
 *          type: number
 *        shippingPrice:
 *          type: number
 *        totalPrice:
 *          type: number
 */
/**
 * @swagger
 * tags:
 *  name: Order
 *  description: API to manage Order
 */
/**
 * @swagger
 * /api/v2/order/new:
 *   post:
 *     summary: Create a new Order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order was successfully created
 *       500:
 *         description: Some server error
 */
router.route("/order/new").post(isAuthenticatedUser, createOrder);
/**
 * @swagger
 * /api/v2/order/{id}:
 *   get:
 *     summary: Get Order by Id
 *     tags: [Admin]
 *     description: Get order by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order Id
 *     responses:
 *        200:
 *          description: success
 */
router
  .route("/order/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder);
/**
 * @swagger
 * /api/v2/orders/me:
 *   get:
 *     summary: Get all Order of me
 *     tags: [Order]
 *     description: Get all order of me
 *     responses:
 *        200:
 *          description: success
 */
router.route("/orders/me").get(isAuthenticatedUser, getAllOrders);
/**
 * @swagger
 * /api/v2/admin/orders:
 *   get:
 *     summary: Get all Order ADMIN
 *     tags: [Admin]
 *     description: Get all order ADMIN
 *     responses:
 *        200:
 *          description: success
 */
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAllOrders);

/**
 * @swagger
 * /api/v2/admin/order/{id}:
 *   put:
 *     summary: Update Order Status by ID - ADMIN
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: update succeed
 *       404:
 *         description: Server some error
 *   delete:
 *     summary: Delete Order by Id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order Id
 *     responses:
 *       200:
 *         description: Order was deleted
 *       404:
 *         description: Order was not found
 */
router
  .route("/admin/income")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminMonthlyIncome);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAdminOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);
export default router;
