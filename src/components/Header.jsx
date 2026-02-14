import React from 'react';

const Header = () => {
    return (
        <header className="app-header">
            <div className="header-content">
                <div className="logo-container">
                    <span className="logo-icon">📚</span>
                    <h1>LibManager<span className="logo-dot">.</span></h1>
                </div>
                <p className="header-subtitle">Manage your collection with elegance.</p>
            </div>
        </header>
    );
};

export default Header;
