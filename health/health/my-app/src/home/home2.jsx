import React from "react";
import '../homestyle/home2.scss'
import Calendar from './calendar';
import health from '../img/Frame 1000001093.jpg'
import girl from '../img/image 7.jpg'
import stev from '../img/IMG-2265 1.jpg'
import sochi from '../img/Group 1000003053.jpg'
import photo5 from '../img/Ellipse 191 (1).jpg';
import photo6 from '../img/Ellipse 191 (2).jpg';
import photo7 from '../img/Ellipse 191 (3).jpg';


function App() {
    return ( <>
    
    <div className="filo">

        <div className="emma">
            <div className="bell">
                <img src={health} alt="photo" />
            </div>

            <div className="kripto">
                <div className="demo">
                    <i class="fa-solid fa-cube"></i>
                    <a href="">Dashboard</a>
                </div>
                <div className="demo">
                    <i class="fa-solid fa-calendar-days"></i>
                    <a href="">Calendar</a>
                </div>
                <div className="demo">
                    <i class="fa-regular fa-circle-user"></i>
                    <a href="">Profile</a>
                </div>
                <div className="demo">
                    <i class="fa-regular fa-circle-question"></i>
                    <a href="">Help</a>
                </div>
                <div className="demo">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <a href="">Logout</a>
                </div>
            </div>

            <div className="alya">
                <img src={girl} alt="photo" />
                
                <div className="viking">
                    <div className="act">
                        <h1>Get faster</h1>
                        <h1>and better</h1>
                        <h1>Healthcare</h1>
                    </div>

                    <button>Go Pro</button>
                </div>
            </div>
        </div>

        <div className="rose">
            <div className="combo">
                <div className="kil">
                    <p>Hi, Stevan dux</p>
                    <h1>Welcome Back</h1>
                </div>
                <div className="dux">
                    <div className="ali">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Find doctors" />
                    </div>
                    <div className="ali">
                        <i class="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder="Location" />
                        <i class="fa-solid fa-location-crosshairs"></i>
                    </div>
                    <button>Search</button>
                </div>
                <div className="profi">
                    <select>
                        <option value="eng">ENG</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                    <i class="fa-regular fa-bell"></i>
                    <div className="stiv">
                        <img src={stev} alt="photo" />
                        <h1>Stevan dux</h1>
                    </div>
                </div>
            </div>

            <div className="line">
                <div className="axiles">
                    <div className="group1">
                        <img src={sochi} alt="photo" />
                    </div>

                    <div className="nearby1">
                        <div className="levi">
                            <h1>Nearby Doctors</h1>
                            <a href="">View All</a>
                        </div>
                        <div className="akerman">
                            <div className="note">
                                <i class="fa-solid fa-location-dot"></i>
                                <h1>Please enable your location, so we can find nearby doctors <a href="">Enable Now</a></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="calendar-wrapper">
                    <Calendar />
                </div>
            </div>

            <div className="fram1">
                <div className="clan1">
                    <div className="ten1">
                        <div className="space1">
                            <div className="rasm1">
                                <img src={photo5} alt="photo" />
                            </div>
                            <div className="name1">
                                <h1>Amanda Clara</h1>
                                <p>specialist | 12 years experience</p>
                                <a href="">Padiatric</a>
                            </div>
                        </div>
                        <div className="book1">
                            <div className="akane1">
                                <i class="fa-regular fa-clock"></i>
                                <div className="nier1">
                                    <h1>Tue, Thu</h1>
                                    <p>10:00 AM-01:00 PM</p>
                                </div>
                                <i class="fa-solid fa-coins"></i>
                                <div className="nier1">
                                    <h1>$25</h1>
                                    <p>Starting</p>
                                </div>
                            </div>
                        </div>
                        <button>Book an appointment</button>
                    </div>

                    <div className="ten1">
                        <div className="space1">
                            <div className="rasm1">
                                <img src={photo6} alt="photo" />
                            </div>
                            <div className="name1">
                                <h1>Jason shatsky</h1>
                                <p>specialist | 10 years experience</p>
                                <a href="">Surgical</a>
                            </div>
                        </div>
                        <div className="book1">
                            <div className="akane1">
                                <i class="fa-regular fa-clock"></i>
                                <div className="nier1">
                                    <h1>Tue, Thu</h1>
                                    <p>10:00 AM-01:00 PM</p>
                                </div>
                                <i class="fa-solid fa-coins"></i>
                                <div className="nier1">
                                    <h1>$35</h1>
                                    <p>Starting</p>
                                </div>
                            </div>
                        </div>
                        <button>Book an appointment</button>
                    </div>

                    <div className="ten1">

                        <div className="space1">
                            <div className="rasm1">
                                <img src={photo7} alt="photo" />
                            </div>

                            <div className="name1">
                                <h1>Jessie dux</h1>
                                <p>specialist | 7 years experience</p>
                                <a href="">Gastroentrology</a>
                            </div>
                        </div>

                        <div className="book1">

                            <div className="akane1">
                                <i class="fa-regular fa-clock"></i>

                                <div className="nier1">
                                    <h1>Tue, Thu</h1>
                                    <p>10:00 AM-01:00 PM</p>
                                </div>

                                <i class="fa-solid fa-coins"></i>

                                <div className="nier1">
                                    <h1>$15</h1>
                                    <p>Starting</p>
                                </div>

                            </div>

                        </div>
                        
                        <button>Book an appointment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </> );
}

export default App;