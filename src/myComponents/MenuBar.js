import { useState } from 'react';
import './MenuBar.css';

export default function MenuBar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <>
        <div className="menu-bar">
            <div className="menu-options">
                <span className="menu-option">Home</span>
                <span className="menu-option">Explore</span>
                <span className="menu-option">Profile</span>
            </div>
            <div className="menu-options">
                <div className="notifications">Notifications</div>
                <div className="profile-dropdown" onClick={toggleProfileDropdown}>
                    Profile
                    {isProfileOpen && (
                        <div className="dropdown-content">
                        <span>View Profile</span>
                        <span>Settings</span>
                        <span>Logout</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}