import axios from "axios";

class UserDataService {
  login(email, password) {
    return axios.post(
      "/api/v2/login",
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  }
  registration(name, email, password, avatar) {
    return axios.post(
      "/api/v2/registration",
      {
        name: name,
        email: email,
        password: password,
        avatar: avatar,
      },
      {
        withCredentials: true,
      }
    );
  }
  logout() {
    return axios.get("/api/v2/logout");
  }
  forgotPassword(email) {
    return axios.post("/api/v2/password/forgot", {
      email: email,
    });
  }
  resetPassword(password, confirmPassword, token) {
    return axios.put(`/api/v2/password/reset/${token}`, {
      password: password,
      confirmPassword: confirmPassword,
    });
  }
  getDetails() {
    return axios.get("/api/v2/me", {
      withCredentials: true,
    });
  }

  updateInfo(name, email, avatar) {
    return axios.put(
      "/api/v2/me/update/info",
      {
        name,
        email,
        avatar,
      },
      {
        withCredentials: true,
      }
    );
  }

  updatePassword(oldPassword, newPassword, confirmPassword) {
    return axios.put(
      "/api/v2/me/update",
      {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      },
      {
        withCredentials: true,
      }
    );
  }
}

export default new UserDataService();
