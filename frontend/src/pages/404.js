import React from 'react';
import Error404 from '../components/404/index';
import MainLayout from '../layouts';

export default function NotFound() {
    return (
        <>
            <MainLayout>
                <Error404 />
            </MainLayout>
        </>
    );
}