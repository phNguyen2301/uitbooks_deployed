import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookEditComponent from "../components/Admin/AdminBook/AdminBookEdit/AdminBookEdit";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminBookEdit() {
  return (
    <ProtectedRoute isAdmin={true}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminBookEditComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
