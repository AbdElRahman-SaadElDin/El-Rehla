import React, { useEffect, useRef } from 'react';
import './logoutmodel.css';

function LogoutModal({ show, handleClose, handleLogout }) {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClose]);

    return (
        <>
            {show && (
                <div className="modal-overlay">
                    <div className="modal-content" ref={modalRef}>
                        <p>Are you sure you want to logout?</p>
                        <button className="btn btn-green" onClick={handleLogout}>Yes</button>
                        <button className="btn btn-red" onClick={handleClose}>No</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default LogoutModal;
