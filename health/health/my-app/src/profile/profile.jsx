import  Sidebar  from './Sidebar/Sidebar';
import { Header } from '../profile/Header/Header';
import { ProfileInfo } from '../profile/ProfileInfo/ProfileInfo';
import React from 'react';

function Profile() {
    return ( <>
    
    <div className="app">
      <Sidebar />
      <main style={{ marginLeft: '240px' }}>
        <Header />
        <div className="container">
          <ProfileInfo />
        </div>
      </main>
    </div>
    
    
    </> );
}

export default Profile;