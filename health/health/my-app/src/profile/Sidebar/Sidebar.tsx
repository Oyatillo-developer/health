import { LayoutDashboard, Calendar, User, HelpCircle, LogOut } from 'lucide-react';
import '../Sidebar/sidebar.scss';
import React from 'react';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2 style={{ color: '#47B5B0' }}>Healthi</h2>
      </div>
      
      <nav>
        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <LayoutDashboard size={20} />
            Dashboard
          </li>
          <li className="sidebar__nav-item">
            <Calendar size={20} />
            Calendar
          </li>
          <li className="sidebar__nav-item sidebar__nav-item--active">
            <User size={20} />
            Profile
          </li>
          <li className="sidebar__nav-item">
            <HelpCircle size={20} />
            Help
          </li>
          <li className="sidebar__nav-item">
            <LogOut size={20} />
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};