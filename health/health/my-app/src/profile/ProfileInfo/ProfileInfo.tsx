import { Pencil } from 'lucide-react';
import '../ProfileInfo/profileInfo.scss';
import React from 'react';

export const ProfileInfo = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__header-content">
          <img 
            className="profile__avatar"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
            alt="Stevan Dux"
          />
          <div>
            <h2 className="profile__name">Stevan Dux</h2>
            <p className="profile__role">Gastro Doctor</p>
            <p className="profile__location">United States</p>
          </div>
        </div>
        <button className="profile__edit">
          <Pencil size={16} /> Edit
        </button>
      </div>

      <div className="profile__section">
        <div className="profile__section-header">
          <h3 className="profile__section-title">Personal Information</h3>
          <button className="profile__edit">
            <Pencil size={16} /> Edit
          </button>
        </div>
        
        <div className="profile__grid">
          <div className="profile__grid-item">
            <h4>Name</h4>
            <p>Stavn dux</p>
          </div>
          <div className="profile__grid-item">
            <h4>Date of Birth</h4>
            <p>03/04/1996</p>
          </div>
          <div className="profile__grid-item">
            <h4>Age</h4>
            <p>56</p>
          </div>
          <div className="profile__grid-item">
            <h4>Phone Number</h4>
            <p>+1 2387428345</p>
          </div>
          <div className="profile__grid-item">
            <h4>Email Address</h4>
            <p>Email@gmail.com</p>
          </div>
          <div className="profile__grid-item">
            <h4>Bio</h4>
            <p>Gartro Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );
};