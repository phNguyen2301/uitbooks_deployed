import express from "express";
import {
  createBook,
  createBookReview,
  deleteBook,
  deleteReview,
  getAdminBooks,
  getAllBooks,
  getMostReviewBooks,
  getNewBooks,
  getPopularBooks,
  getRatedBooks,
  getSingleBook,
  getSingleBookReviews,
  updateBook,
} from "../controllers/BookController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();
/**
 *@swagger
 *components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - name
 *        - author
 *        - publisher
 *        - description
 *        - price
 *        - images
 *        - url
 *        - category
 *        - Stock
 *        - pageNumber
 *      properties:
 *        name:
 *          type: string
 *        author:
 *          type: string
 *        publisher:
 *          type: string
 *        description:
 *          type: string
 *        price:
 *          type: number
 *        images:
 *          type: object
 *          required:
 *            - url
 *            - public_id
 *          properties:
 *            url:
 *              type: string
 *            public_id:
 *              type: string
 *        category:
 *         type: string
 *        Stock:
 *          type: number
 *        pageNumber:
 *          type: number
 */
/**
 * @swagger
 * tags:
 *  name: Books
 *  description: API to manage your Books
 */
/**
 * @swagger
 * /api/v2/book/new:
 *   post:
 *     summary: Create a new Book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The Books was successfully created
 *       500:
 *         description: Some server error
 */
router.route("/book/new").post(createBook);
/**
 * @swagger
 * /api/v2/books/new:
 *   get:
 *     summary: Get new  Books
 *     tags: [Books]
 *     description: get new books
 *     responses:
 *        200:
 *          description: success
 */
router.route("/books/new").get(getNewBooks);
/**
 * @swagger
 * /api/v2/books/popular:
 *   get:
 *     summary: Get Popular  Books
 *     tags: [Books]
 *     description: get Popular books
 *     responses:
 *        200:
 *          description: success
 */
router.route("/books/popular").get(getPopularBooks);

/**
 * @swagger
 * /api/v2/books:
 *   get:
 *     summary: Get all  Book
 *     tags: [Books]
 *     description: get all book
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Search KeyWord
 *       - in: query
 *         schema:
 *           type: string
 *         description: filter
 *       - in: query
 *         name: page
 *         schema:
 *           type: string
 *         description: Page
 *     responses:
 *        200:
 *          description: success
 */
router.route("/books").get(getAllBooks);
/**
 * @swagger
 * /api/v2/admin/books:
 *   get:
 *     summary: Get all Books - ADMIN
 *     tags: [Books]
 *     description: get all books ADMIN
 *     responses:
 *        200:
 *          description: success
 */
router.route("/admin/books").get(getAdminBooks);
/**
 * @swagger
 * /api/v2/book/{id}:
 *   put:
 *     summary: Update Book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: update succeed
 *       404:
 *         description: Server some error
 *   get:
 *     summary: Get the single book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Book id
 *     responses:
 *       200:
 *         description: Succeed
 *       404:
 *         description: The Book was not found
 *   delete:
 *     summary: Delete the  book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Book id
 *     responses:
 *       200:
 *         description: The Book was deleted
 *       404:
 *         description: The Book was not found
 */
router.route("/book/:id").put(updateBook).get(getSingleBook).delete(deleteBook);
/**
 * @swagger
 * /api/v2/book/review:
 *   post:
 *     summary: Create a new Review
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookId:
 *                 type: string
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review was successfully created
 *       500:
 *         description: Some server error
 */
router.route("/book/review").post(isAuthenticatedUser, createBookReview);
/**
 * @swagger
 * /api/v2/reviews:
 *   get:
 *     summary: Get all review by Book Id
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Book id
 *     responses:
 *       200:
 *         description: The Book by id
 *       404:
 *         description: The Book was not found
 *   delete:
 *     summary: Delete review by Book id
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id of review
 *       - in: query
 *         name: bookId
 *         schema:
 *           type: string
 *         required: true
 *         description: The Book id
 *     responses:
 *       200:
 *         description: Review was deleted
 *       404:
 *         description: Review was not found
 */

router.route("/books/rated").get(getRatedBooks);
router.route("/books/most-review").get(getMostReviewBooks);

router
  .route("/reviews")
  .get(getSingleBookReviews)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);
export default router;
