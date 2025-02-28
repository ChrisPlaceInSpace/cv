import ContactService from "./contactService";
import Header from "./header";
import Footer from "./footer";
import '../CSS/Contact.css';
import GoTopButton from "./goTopButton";

export default function Contact() {
    return (<>
        <Header />
        <div className="contact-container color-primary flex flex-column text-center">
            <h1>Contact</h1>
            <p>Feel free to reach out to me with any questions or comments.</p>
            <ContactService />
            <GoTopButton />
        </div>
        <Footer />
    </>
    )
};