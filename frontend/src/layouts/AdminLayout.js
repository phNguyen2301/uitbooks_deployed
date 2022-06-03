import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import ProtectedRoute from "../routes/PrivateRoute";

//Đây là layout cho trang Quản lí
export default function AdminLayout({ children }) {
  return (
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ flex: "4" }}>
          <Navbar />
          {children}
        </div>
      </div>
  );
}
