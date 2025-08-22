import React, { useState } from 'react';

const Popup = ({ message = "Are you an internet user?", onClose }) => {
    const [visible, setVisible] = useState(true);

    const handleButtonClick = (choice) => {
        setVisible(false);
        if (onClose) onClose(choice);
    };

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }}>
            <div style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                minWidth: '300px'
            }}>
                <p>{message}</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-around' }}>
                    <button onClick={() => handleButtonClick('yes')}>Yes</button>
                    <button onClick={() => handleButtonClick('yes')}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;