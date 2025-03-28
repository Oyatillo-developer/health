import '../homestyle/home.scss';
import React from 'react';
import photo1 from '../img/Ellipse 192.jpg';
import photo2 from '../img/Ellipse 193.jpg';
import photo3 from '../img/Ellipse 194.jpg';
import photo4 from '../img/2 doc.jpg';
import photo5 from '../img/Ellipse 191 (1).jpg';
import photo6 from '../img/Ellipse 191 (2).jpg';
import photo7 from '../img/Ellipse 191 (3).jpg';
import logo from "../img/Frame 1000001093.jpg"

function Home() {
    return (<>

        <div className="car">
            <div className="pro">
                <div className="logo">
                    <img src={logo} alt="photo" />
                </div>
                <div className="star">
                    <a href="">Go Pro</a>
                    <a href="">Login</a>
                    <button>Register</button>
                </div>
            </div>
        </div>
        
        <div className="app">
            <div className="visit">
                <div className="online">
                    <h1>No need to visit local hospitals</h1>
                    <h1>Get your consultation online</h1>
                    <div className="links">
                        <a href="#">Audio/</a>
                        <a href="#">Text/</a>
                        <a href="#">Video/</a>
                        <a href="#">In-person</a>
                    </div>
                    <div className="doc">
                        <div className="imgs">
                            <img src={photo1} alt="Doctor 1" />
                            <img src={photo2} alt="Doctor 2" />
                            <img src={photo3} alt="Doctor 3" />
                        </div>
                        <h1>+180 doctors are online</h1>
                    </div>
                </div>
                <div className="doctors">
                    <img src={photo4} alt="Doctors illustration" />
                </div>
            </div>

            <div className="main">
                <div className="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Find doctors' />
                </div>
                <div className="search">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" placeholder='Location' />
                </div>
                <button>Search</button>
            </div>

            <div className="fram">
                <h1>Recommended Doctors</h1>
                <div className="clan">
                    <div className="ten">
                        <div className="space">
                            <div className="rasm">
                                <img src={photo5} alt="photo" />
                            </div>
                            <div className="name">
                                <h1>Amanda Clara</h1>
                                <p>specialist | 12 years experience</p>
                                <a href="">Padiatric</a>
                            </div>
                        </div>
                        <div className="book">
                            <div className="akane">
                                <i class="fa-regular fa-clock"></i>
                                <div className="nier">
                                    <h1>Tue, Thu</h1>
                                    <p>10:00 AM-01:00 PM</p>
                                </div>
                                <i class="fa-solid fa-coins"></i>
                                <div className="nier">
                                    <h1>$25</h1>
                                    <p>Starting</p>
                                </div>
                            </div>
                        </div>
                        <button>Book an appointment</button>
                    </div>

                    <div className="ten">
                        <div className="space">
                            <div className="rasm">
                                <img src={photo6} alt="photo" />
                            </div>
                            <div className="name">
                                <h1>Jason shatsky</h1>
                                <p>specialist | 10 years experience</p>
                                <a href="">Surgical</a>
                            </div>
                        </div>
                        <div className="book">
                            <div className="akane">
                                <i class="fa-regular fa-clock"></i>
                                <div className="nier">
                                    <h1>Tue, Thu</h1>
                                    <p>10:00 AM-01:00 PM</p>
                                </div>
                                <i class="fa-solid fa-coins"></i>
                                <div className="nier">
                                    <h1>$35</h1>
                                    <p>Starting</p>
                                </div>
                            </div>
                        </div>
                        <button>Book an appointment</button>
                    </div>

                    <div className="ten">

                        <div className="space">
                            <div className="rasm">
                                <img src={photo7} alt="photo" />
                            </div>

                            <div className="name">
                                <h1>Jessie dux</h1>
                                <p>specialist | 7 years experience</p>
                                <a href="">Gastroentrology</a>
                            </div>
                        </div>

                        <div className="book">

                            <div className="akane">
                                <i class="fa-regular fa-clock"></i>

                                <div className="nier">
                                    <h1>Tue, Thu</h1>
                                    <p>10:00 AM-01:00 PM</p>
                                </div>

                                <i class="fa-solid fa-coins"></i>

                                <div className="nier">
                                    <h1>$15</h1>
                                    <p>Starting</p>
                                </div>

                            </div>

                        </div>
                        
                        <button>Book an appointment</button>
                    </div>
                </div>
            </div>
            <div className="share">
                <i class="fa-solid fa-location-dot"></i>
                <div className="text">
                    <p>Please enable your location, so we can find nearby doctors <a href="">Enable Now</a></p>
                </div>
            </div>
        </div>
    </>);
}

export default Home;
