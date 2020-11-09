import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie'


export default function Login() {

    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/api/v1/login`, {
            username: username,
            password: password
        })
            .then(res => {
                if (res.status === 200) {
                    setToken(res.data.token)
                    Cookies.set('token', res.data.token, { expires: 1 });
                    setIsLogged(true)
                }
            })
            .catch(err => {
                console.log("Failed sorry: try again" + err);
            })
    }



    if (isLogged) {
        return <div><h6>Logged: Token is {token}</h6></div>
    } else {
        return (
            <div>

                <section className="content-section bg-light">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h2>Login</h2>

                                <div className="form-group">
                                    <label htmlFor="inputUsername" className="sr-only">Email address</label>

                                    <input
                                        onChange={e => { setUsername(e.target.value) }}
                                        name="username"
                                        type="text"
                                        id="inputUsername"
                                        className="mx-auto form-control login-fields"
                                        placeholder="Username"
                                        required
                                        autoFocus
                                    />
                                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                                    <input
                                        onChange={e => { setPassword(e.target.value) }}
                                        name="password"
                                        type="password"
                                        id="inputPassword"
                                        className="mx-auto form-control login-fields"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button onClick={e => handleSubmit(e)} className="btn btn-lg btn-block signin-btn" >
                                    Login
          </button>

                                <h6 className="seperator"><span>or</span></h6>

                                <a href="/#" className="fb btn login-fields">
                                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook </a
                                ><br />
                                <a href="/#" className="twitter btn login-fields">
                                    <i className="fa fa-twitter fa-fw"></i> Login with Twitter </a
                                ><br />
                                <a href="/#" className="google btn login-fields">
                                    <i className="fa fa-google fa-fw"></i> Login with Google+
        </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
