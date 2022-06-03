import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import AdminCategoryEditComponent from "../components/Admin/AdminCategory/AdminCategoryEdit/AdminCategoryEdit";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminCategoryEdit() {
  return (
    <ProtectedRoute isAdmin={true}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminCategoryEditComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
