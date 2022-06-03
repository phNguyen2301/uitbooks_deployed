import axios from "axios";

class ProductDataService {
  createBook(productData) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    return axios.post(
      `/api/v2/book/new`,
      // `/api/v2/book/new`,
      productData,
      config
    );
  }
  getAllBook(
    keyword,
    currentPage,
    price,
    category,
    ratings,
    author,
    publisher
  ) {
    if (category && author && publisher) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}&author=${author}&publisher=${publisher}`
      );
    } else if (category && publisher && !author) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}&publisher=${publisher}`
      );
    } else if (category && author && !publisher) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}&author=${author}`
      );
    } else if (category && !author && !publisher) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
      );
    } else if (author && publisher) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&author=${author}&publisher=${publisher}`
      );
    } else if (author && !publisher) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&author=${author}`
      );
    } else if (publisher) {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&publisher=${publisher}`
      );
    } else {
      return axios.get(
        `/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
      );
    }
  }
  getAllBookAdmin() {
    return axios.get(`/api/v2/admin/books`);
  }
  updateBook(id, info) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    return axios.put(`/api/v2/book/${id}`, info, config);
  }
  deleteBook(id) {
    return axios.delete(`/api/v2/book/${id}`);
  }
  getDetailBook(id) {
    return axios.get(`/api/v2/book/${id}`);
  }
  createNewReview(reviewData) {
    return axios.post(`/api/v2/book/review`, reviewData, {
      withCredentials: true,
    });
  }
  getAllReview(id) {
    return axios.get(`/api/v2/reviews?id=${id}`);
  }
  deleteReview(reviewId, bookId) {
    return axios.delete(`/api/v2/reviews?id=${reviewId}&bookId=${bookId}`, {
      withCredentials: true,
    });
  }
  getNewsBook() {
    return axios.get(`/api/v2/books/new`);
  }
  getPopularBook() {
    return axios.get(`/api/v2/books/popular`);
  }
  getRatedBook() {
    return axios.get(`/api/v2/books/rated`);
  }
  getMostReviewProducts() {
    return axios.get(`/api/v2/books/most-review`);
  }
}

export default new ProductDataService();
