import '../CSS/messageBox.css';
import { useState, useEffect } from 'react';

const MessageBox = ({ message, type, duration = 5000, onClose }) => {
    const [countTracker, setCountTracker] = useState(100);

    useEffect(() => {
        if (!message) return;
        setCountTracker(100);

        const interval = setInterval(() => {
            setCountTracker((prev) => Math.max(prev - 100 / (duration / 100), 0));
        }, 100);
        const timeout = setTimeout(() => {
            setCountTracker(0);
            onClose();
        }, duration);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [message, duration, onClose]);
    if (!message) return null;

    return (
        <div className={`message-box text-center ${type}`}>
            <p>{message}</p>
            <div className='time-bar' style={{ width: `${countTracker}%` }}></div>
        </div>
    );
}
export default MessageBox;