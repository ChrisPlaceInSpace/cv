import ContactService from "./contactService";
import Header from "./header";
import Footer from "./footer";
import '../CSS/Contact.css';

export default function Contact() {
    return (<>
            <Header />
        <div className="contact-container color-primary flex flex-column flex-center">
            <ContactService />
        </div>
            <Footer />
        </>
    )
};