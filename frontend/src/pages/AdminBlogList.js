import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import BlogList from '../components/Admin/AdminBlog/AdminBlogList/index';
import ProtectedRoute from '../routes/PrivateRoute';

export default function AdminBlogList() {
    return (
        <ProtectedRoute isAdmin={true}>
            <AdminLayout>
                <BlogList />
            </AdminLayout>
        </ProtectedRoute>
    );
}
