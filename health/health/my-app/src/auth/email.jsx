import rasm from "../img/login.png"
import "../authstyle/email.scss"

function Email() {
    return ( <>
    
    <div className="home3">
    <div className="health3">
        <div className="img3">
            <img src={rasm} alt="photo" />
        </div>
        <div className="back3">
            <div className="close3">
                <button><i class="fa-solid fa-x"></i></button>
            </div>
            <div className="new3">
                <div className="me3">
                    <h1>Email confirmation</h1>
                    <div className="to3">
                        <h1>Don't worry! It occurs. Please enter the email address linked with your account.</h1>
                    </div>
                </div>
                <div className="user3">
                    <div className="you3">
                        <h1>Enter your Email</h1>
                        <input type="text" placeholder="Email" />
                    </div>
                    <button>Send Code</button>
                    <div className="me13">
                        <div className="read3">
                            <input type="checkbox" name="" id="" />
                            <h1>Remember me</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="close3">
                <h2>.</h2>
            </div>
        </div>
    </div>
    </div>
    
    </> );
}

export default Email;