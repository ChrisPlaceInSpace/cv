import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../CSS/contactService.css';
import MessageBox from "./MessageBox";

const ContactService = () => {
    const emailForm = useRef();
    const serviceId = process.env.VITE_EMAILJS_SERVICEID;
    const templateId = process.env.VITE_APP_EMAILJS_TEMPLATEID;
    const publicKey = process.env.VITE_EMAILJS_API;

    const [formInputData, setFormInputData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [inputError, setInputError] = useState('');
    const [messageBox, setMessageBox] = useState({message: '', type: ''});

    const handleChange = (e) => {
        setFormInputData({ ...formInputData, [e.target.name]: e.target.value });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (formInputData.user_name === '' || formInputData.user_email === '' || formInputData.message === '') {
            setInputError('Please fill in all fields before sending the email.');
            setMessageBox({message: 'Failed to send email.❌ Please try again.', type: 'error'});
            setTimeout(() => {setMessageBox({message: '', type: ''})}, 7000);
            return;
        };
        setInputError('');

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
                    e.target.reset();
                    setFormInputData({
                        user_name: '',
                        user_email: '',
                        message: '',
                    });
                    setMessageBox({message: 'Email was sent successfully!✅', type: 'success'});
                    setTimeout(() => {setMessageBox({message: '', type: ''})}, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessageBox({message: 'Failed to send email.❌ Please try again.', type: 'error'});
                    setTimeout(() => {setMessageBox({message: '', type: ''})}, 7000);
                },
            );
    };

    return (
        <div className="form-container flex flex-column flex-center">
            <form className="flex flex-column" ref={emailForm} onSubmit={sendEmail}>
                <div className="flex flex-column">
                    <label>Name</label>
                    <input className="form-input" type="text" name="user_name" 
                    value={formInputData.user_name} onChange={handleChange}/>
                </div>
                <div className="flex flex-column">
                    <label>Email</label>
                    <input className="form-input" type="email" name="user_email" 
                    value={formInputData.user_email} onChange={handleChange}/>
                </div>
                <div className="flex flex-column">
                <label>Message</label>
                <textarea name="message" value={formInputData.message} onChange={handleChange}/>
                {inputError && <p className="error-message">{inputError}</p>}
                <input className="form-btn color-secondary" type="submit" value="Send" 
                />
                </div>
            </form>
            <MessageBox message={messageBox.message} type={messageBox.type} 
            onClose={() => setMessageBox({message: '', type: ''})} />
            
        </div>

    )
};
export default ContactService;