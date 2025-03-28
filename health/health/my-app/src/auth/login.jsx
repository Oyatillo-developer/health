import rasm from "../img/login.png"
import "../authstyle/login.scss"

function Login() {
    return ( <>
    
    <div className="home">
    <div className="health">
        <div className="img">
            <img src={rasm} alt="photo" />
        </div>
        <div className="back">
            <div className="close">
                <button><i class="fa-solid fa-x"></i></button>
            </div>
            <div className="new">
                <div className="me">
                    <h1>Welcome back</h1>
                    <div className="to">
                        <h1>New to Musaki?</h1>
                        <a href="">Sign up</a>
                    </div>
                </div>
                <div className="user">
                    <div className="you">
                        <h1>Your Username</h1>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="you">
                        <h1>Your password</h1>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Log in</button>
                    <div className="me1">
                        <div className="read">
                            <input type="checkbox" name="" id="" />
                            <h1>Remember me</h1>
                        </div>
                        <a href="">Forgot password?</a>
                    </div>
                </div>
            </div>
            <div className="close">
                <h2>.</h2>
            </div>
        </div>
    </div>
    </div>
    
    </> );
}

export default Login;