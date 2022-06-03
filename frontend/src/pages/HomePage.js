import React from 'react';
import Slider from '../components/Home/Slider';
import BestSeller from '../components/Home/BestSeller/index';
import Vouchers from '../components/Home/Vouchers/index';
import ComingSoon from '../components/Home/ComingSoon/index';
import Interest from '../components/Home/Interest/index';
import RecentReview from '../components/Home/RecentReview/index';
import Banner from '../components/Home/Banner/index';
import MainLayout from '../layouts';

export default function Home() {
    return (
        <>
            <MainLayout>
                <Slider />
                <Vouchers />
                <BestSeller />
                <ComingSoon />
                <Interest />
                <RecentReview />
                <Banner />
            </MainLayout>
        </>
    );
}
