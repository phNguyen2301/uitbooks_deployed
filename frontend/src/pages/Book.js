import React from 'react';
import BookDetail from '../components/Book';
import MainLayout from '../layouts';

export default function Book() {
    return (
        <MainLayout>
            <BookDetail />
        </MainLayout>
    );
}