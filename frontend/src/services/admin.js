import axios from "axios";

class AdminService {
  getAllUsers() {
    return axios.get("/api/v2/admin/users", {
      withCredentials: true,
    });
  }
  getUserDetails(id) {
    return axios.get(`/api/v2/admin/user/${id}`, {
      withCredentials: true,
    });
  }
  updateInfoUser(id, name, email, role, avatar) {
    return axios.put(
      `/api/v2/admin/user/${id}`,
      {
        name,
        email,
        role,
        avatar,
      },
      {
        withCredentials: true,
      }
    );
  }
  deleteUser(id) {
    return axios.delete(`/api/v2/admin/user/${id}`, {
      withCredentials: true,
    });
  }
  // ORDER
  getIncome() {
    return axios.get("/api/v2/admin/income", {
      withCredentials: true,
    });
  }

  getAllOrders() {
    return axios.get("/api/v2/admin/orders", {
      withCredentials: true,
    });
  }
  getOrder(id) {
    return axios.get(`/api/v2/order/${id}`, {
      withCredentials: true,
    });
  }
  updateOrder(id, orderStatus) {
    return axios.put(
      `/api/v2/admin/order/${id}`,
      {
        status: orderStatus,
      },
      {
        withCredentials: true,
      }
    );
  }
  deleteOrder(id) {
    return axios.delete(`/api/v2/admin/order/${id}`, {
      withCredentials: true,
    });
  }
}

export default new AdminService();
