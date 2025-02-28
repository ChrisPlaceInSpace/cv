import {
    createBrowserRouter,
    Outlet,
    Route,
    RouterProvider,
    Link,
    useNavigate,
} from 'react-router-dom';
import Header from '../Components/header';
import Footer from '../Components/footer';
import GoTopButton from '../Components/goTopButton';

export default function Root() {
    return(
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <GoTopButton />
        <Footer />
        </>
    )
}