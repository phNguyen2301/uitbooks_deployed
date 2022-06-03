import React from "react";
import AddBlogComponent from "../components/Blogs/AddBlog";
import MainLayout from "../layouts/";
import ProtectedRoute from "../routes/PrivateRoute";
function AddBlog() {
  return (
    <ProtectedRoute>
      <MainLayout>
        <AddBlogComponent />
      </MainLayout>
    </ProtectedRoute>
  );
}

export default AddBlog;
