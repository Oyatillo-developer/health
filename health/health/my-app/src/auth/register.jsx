import rasm from "../img/login.png"
import "../authstyle/register.scss"

function Register() {
    return ( <>
    
    <div className="home2">
    <div className="health2">
        <div className="img2">
            <img src={rasm} alt="photo" />
        </div>
        <div className="back2">
            <div className="close2">
                <button><i class="fa-solid fa-x"></i></button>
            </div>
            <div className="new2">
                <div className="me2">
                    <h1>Hey there</h1>
                    <div className="to2">
                        <h1>Already know Musaki?</h1>
                        <a href="">Log in</a>
                    </div>
                </div>
                <div className="user2">
                    <div className="you2">
                        <h1>Email address</h1>
                        <input type="text2" placeholder="Email" />
                    </div>
                    <div className="you2">
                        <h1>Username</h1>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="you2">
                        <h1>Your password</h1>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="you2">
                        <h1>Confirm password</h1>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Sign Up</button>
                    <div className="me12">
                        <div className="read2">
                            <input type="checkbox" name="" id="" />
                            <h1>Remember me</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="close2">
                <h2>.</h2>
            </div>
        </div>
    </div>
    </div>
    
    </> );
}

export default Register;