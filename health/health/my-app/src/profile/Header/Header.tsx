import { Bell } from 'lucide-react';
import '../Header/header.scss';
import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Profile</h1>
      
      <div className="header__actions">
        <button className="header__notification">
          <Bell size={20} />
        </button>
        
        <div className="header__user">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400" alt="Profile" />
          <span>Stevan dux</span>
        </div>
      </div>
    </header>
  );
};

export default Header;