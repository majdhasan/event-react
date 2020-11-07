import React from 'react'

export default function Signup() {
    return (
        <section className="content-section bg-light" id="about">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Sign up</h2>

                        <form className="form-signin" action="/signup" method="post">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="mx-auto form-control login-fields"
                                    name="fname"
                                    placeholder="First name"
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="mx-auto form-control login-fields"
                                    name="lname"
                                    placeholder="Last name"
                                    required="required"
                                />
                            </div>
                            <hr />
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="mx-auto form-control login-fields"
                                    name="username"
                                    placeholder="Username"
                                    required="required"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="mx-auto form-control login-fields"
                                    name="password"
                                    placeholder="Password"
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
                    <a href="#">Terms of Use</a> &amp;
                    <a href="#">Privacy Policy</a></label
                                >
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg signup-btn login-fields">
                                    Sign Up
                  </button>
                            </div>
                        </form>
                        <hr />
                        <div className="form-group">
                            <a href="/login">
                                <button className="btn btn-primary btn-lg signup-btn login-fields">
                                    Already a member?
                  </button></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
