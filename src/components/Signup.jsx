import axios from 'axios';
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import LoadingCircle from './AppComponents/LoadingCircle';

export default function Signup() {

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        username: "",
        password: ""
    })

    const [accountCreated, setAccountCreated] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);



    const handleClick = () => {
        setLoading(true)
        axios.post(`http://localhost:4000/api/v1/signup`, { fname: user.fname, lname: user.lname, username: user.username, password: user.password })
            .then(res => {
                setLoading(false)
                setAccountCreated(true)
                setTimeout(() => {
                    setRedirect(true)
                }, 5000);
            })
            .catch(err => {
                console.log("Failed sorry: try again" + err);
            })
    }


    const onChange = (e) => {
        const { name, value } = e.target;

        setUser((prevValue) => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })
    }
    if (redirect) {
        return <Redirect to={'/login'} />
    }
    else if (accountCreated) {
        return (
            <section className="content-section bg-light" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>Your Account has been created, you will be redirected to login</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="content-section bg-light" >

                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>Sign up</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    onChange={onChange}
                                    className="mx-auto form-control login-fields"
                                    name="fname"
                                    placeholder="First name"
                                    required="required"
                                    value={user.fname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={onChange}
                                    type="text"
                                    className="mx-auto form-control login-fields"
                                    name="lname"
                                    placeholder="Last name"
                                    required="required"
                                    value={user.lname}
                                />
                            </div>
                            <hr />
                            <div className="form-group">
                                <input
                                    type="text"
                                    onChange={onChange}
                                    className="mx-auto form-control login-fields"
                                    name="username"
                                    placeholder="Username"
                                    required="required"
                                    value={user.username}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="mx-auto form-control login-fields"
                                    name="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={onChange}
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="mx-auto form-control login-fields"
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-check-label"
                                ><input type="checkbox" required="required" /> I accept the
                        <a href="/#">Terms of Use</a> &amp;
                        <a href="/#">Privacy Policy</a></label
                                >
                            </div>

                            <div className="form-group">
                                {loading && <LoadingCircle />}
                                <button onClick={handleClick} className="btn btn-primary btn-lg signup-btn login-fields">
                                    Sign Up
                      </button>
                            </div>
                            <hr />
                            <div className="form-group">
                                <a href="/login">
                                    <button className="btn btn-primary btn-lg signup-btn login-fields">
                                        Already a member?
                      </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
