import rasm from "../img/login.png"
import "../authstyle/otp.scss"

function Verification() {
    return ( <>
    
    <div className="home4">
    <div className="health4">
        <div className="img4">
            <img src={rasm} alt="photo" />
        </div>
        <div className="back4">
            <div className="close4">
                <button><i class="fa-solid fa-x"></i></button>
            </div>
            <div className="new4">
                <div className="me4">
                    <h1>OTP Verification</h1>
                    <div className="to4">
                        <h1>Don't worry! It occurs. Please enter the email address linked with your account.</h1>
                    </div>
                </div>
                <div className="user4">
                    <div className="you4">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <button>Verify</button>
                    <div className="me14">
                        <div className="read4">
                            <input type="checkbox" name="" id="" />
                            <h1>Remember me</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="close4">
                <h2>.</h2>
            </div>
        </div>
    </div>
    </div>
    
    </> );
}

export default Verification;