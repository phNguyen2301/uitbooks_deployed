import express from "express";
import {
  createUser,
  deleteUser,
  forgotPassword,
  getAllUser,
  getSingleUser,
  loginUser,
  logoutUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUserRole,
  userDetails,
} from "../controllers/UserController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();
/**
 *@swagger
 *components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *        - avatar
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        avatar:
 *          type: object
 *          required:
 *            - url
 *            - public_id
 *          properties:
 *            url:
 *              type: string
 *            public_id:
 *              type: string
 *        role:
 *         type: string
 */
// cmt
/**
 * @swagger
 * tags:
 *  name: User
 *  description: API to manage User
 */
/**
 * @swagger
 * /api/v2/registration:
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: The User was successfully created
 *       500:
 *         description: Some server error
 */
router.route("/registration").post(createUser);
/**
 * @swagger
 * /api/v2/login:
 *   post:
 *     summary: Login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Login succeed
 *       500:
 *         description: Some server error
 */
router.route("/login").post(loginUser);
/**
 * @swagger
 * /api/v2/logout:
 *   get:
 *     summary: Logout
 *     tags: [User]
 *     description: Logout
 *     responses:
 *        200:
 *          description: success
 */
router.route("/logout").get(logoutUser);
/**
 * @swagger
 * /api/v2/password/forgot:
 *   post:
 *     summary: Forgot Password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Email send success
 *       500:
 *         description: Some server error
 */
router.route("/password/forgot").post(forgotPassword);
/**
 * @swagger
 * /api/v2/password/reset/{token}:
 *   put:
 *     summary: Reset password by token
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: the token reset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reset succeed
 *       404:
 *         description: token was not found
 */
router.route("/password/reset/:token").put(resetPassword);
/**
 * @swagger
 * /api/v2/me:
 *   get:
 *     summary: Get User Details
 *     tags: [User]
 *     description: Information
 *     responses:
 *        200:
 *          description: success
 */
router.route("/me").get(isAuthenticatedUser, userDetails);
/**
 * @swagger
 * /api/v2/me/update:
 *   put:
 *     summary: Update password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: update succeed
 *       404:
 *         description: Server some error
 */
router.route("/me/update").put(isAuthenticatedUser, updatePassword);
/**
 * @swagger
 * /api/v2/me/update/info:
 *   put:
 *     summary: Update User Profile
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: update succeed
 *       404:
 *         description: Server some error
 */
router.route("/me/update/info").put(isAuthenticatedUser, updateProfile);
/**
 * @swagger
 * tags:
 *  name: Admin
 *  description: API Admin
 */
/**
 * @swagger
 * /api/v2/admin/users:
 *   get:
 *     summary: Get All User
 *     tags: [Admin]
 *     description: Information all user
 *     responses:
 *        200:
 *          description: success
 */
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
/**
 * @swagger
 * /api/v2/admin/user/{id}:
 *   get:
 *     summary: Get Single User by Id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id of User
 *     responses:
 *       200:
 *         description: succeed
 *       404:
 *         description: Server some error
 *   put:
 *     summary: Update Role User
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id of User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: update succeed
 *       404:
 *         description: Server some error
 *   delete:
 *     summary: Delete User by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id of User
 *     responses:
 *       200:
 *         description: User was deleted
 *       404:
 *         description: User was not found
 */
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
export default router;
