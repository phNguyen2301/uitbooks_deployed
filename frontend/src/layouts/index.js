import Topbar from '../components/Header/Topbar';
import Footer from '../components/Footer/index';
import ScrollButton from '../more/ScrollToTop';

// Có 3 loại Top bar: Khách, User, Admin
export default function MainLayout({ children }) {
    return (
        <>
            <div style={{ position: "sticky", top: "0", zIndex: "999", width: "100%" }}>
                <Topbar />
            </div>
            {children}
            <Footer />
            <ScrollButton />
        </>
    );
}