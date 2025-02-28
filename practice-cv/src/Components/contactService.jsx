import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactService = () => {
    const emailForm = useRef();
    const serviceId = process.env.VITE_EMAILJS_SERVICEID;
    const templateId = process.env.VITE_APP_EMAILJS_TEMPLATEID;
    const publicKey = process.env.VITE_EMAILJS_API;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                serviceId,
                templateId,
                emailForm.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    console.log('Email was sent successfully!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="form-container flex flex-column flex-center">
            <form ref={emailForm} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>

    )
};
export default ContactService;