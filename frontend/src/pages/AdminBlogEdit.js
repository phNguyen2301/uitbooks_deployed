import React from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import BlogEdit from '../components/Admin/AdminBlog/AdminBlogEdit/index'
import ProtectedRoute from '../routes/PrivateRoute';

export default function AdminBlogEdit() {
    return (
        <ProtectedRoute isAdmin={true}>
            <div style={{ display: "flex", width: "100%" }} >
                <Sidebar />
                <div style={{ flex: "4" }}>
                    <Navbar />
                    <BlogEdit />
                </div>
            </div>
        </ProtectedRoute>
    );
}
