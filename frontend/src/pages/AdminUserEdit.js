import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import UserEdit from "../components/Admin/AdminUser/AdminUserEdit/index";
import ProtectedRoute from "../routes/PrivateRoute";

export default function AdminUserEdit() {
  return (
    <ProtectedRoute isAdmin={true}>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ flex: "4" }}>
          <Navbar />
          <UserEdit />
        </div>
      </div>
    </ProtectedRoute>
  );
}
