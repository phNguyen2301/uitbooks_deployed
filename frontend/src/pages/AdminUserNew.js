import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import UserNew from "../components/Admin/AdminUser/AdminUserNew/index";
import ProtectedRoute from "../routes/PrivateRoute";

export default function AdminUserNew() {
  return (
    <ProtectedRoute isAdmin={true}>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ flex: "4" }}>
          <Navbar />
          <UserNew />
        </div>
      </div>
    </ProtectedRoute>
  );
}
