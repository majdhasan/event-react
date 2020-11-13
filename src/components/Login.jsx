import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { loginUser } from '../http-common'
import { Redirect } from "react-router-dom";



export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");



    useEffect(() => {
        return (
            setToken(Cookies.get('token'))
        )
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser({ username: username, password: password })
            .then(res => {
                if (res.status === 200) {
                    Cookies.set('token', res.data.token, { expires: 1 });
                    setToken(res.data.token)
                }
            })
            .catch(err => {
                console.log("Failed sorry: try again" + err);
            })
    }



    if (typeof token != 'undefined' && token !== "") {
        return <Redirect to={'/home'} />
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
