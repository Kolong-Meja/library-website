import GuestHeader from './components/GuestHeader';
import GuestNavbar from './components/GuestNavbar';
import GuestFooter from './components/GuestFooter';
import BooksList from './BooksList';

export default function Home() {
    return (
        <>
            <GuestNavbar />
            <GuestHeader />
            <BooksList />
            <GuestFooter />
        </>
    )
}