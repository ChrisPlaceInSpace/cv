import ContactService from "./contactService";
import Header from "./header";
import Footer from "./footer";
import '../CSS/Contact.css';
import GoTopButton from "./goTopButton";

export default function Contact() {
    return (<>
        <Header />
        <div className="contact-container color-primary flex flex-column text-center">
            <div className="contact-headline-container flex flex-center flex-column">
            <h1>Contact</h1>
            <p>Feel free to reach out to me with any question, comment or if you'd like to collaborate.</p>
            </div>
            <ContactService />
            <GoTopButton />
        </div>
        <Footer />
    </>
    )
};