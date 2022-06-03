import axios from "axios";

class OrderDataService {
  getAllOrders() {
    return axios.get("/api/v2/orders/me", {
      withCredentials: true,
    });
  }
}

export default new OrderDataService();
