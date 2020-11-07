import React from 'react'
import NavCustomer from './NavCustomer'

export default function Login() {
    return (
        <div>
            <section className="content-section bg-light" id="about">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2>Login</h2>

                            <form className="form-signin" action="/login" method="post">
                                {/* <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">  */}

                                <div className="form-group">
                                    <label for="inputUsername" className="sr-only">Email address</label>
                                    <input
                                        name="username"
                                        type="text"
                                        id="inputUsername"
                                        className="mx-auto form-control login-fields"
                                        placeholder="Username"
                                        required
                                        autofocus
                                    />
                                    <label for="inputPassword" className="sr-only">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        id="inputPassword"
                                        className="mx-auto form-control login-fields"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button className="btn btn-lg btn-block signin-btn" type="submit">
                                    Login
          </button>
                            </form>
                            <h6 className="seperator"><span>or</span></h6>

                            <a href="#" className="fb btn login-fields">
                                <i className="fa fa-facebook fa-fw"></i> Login with Facebook </a
                            ><br />
                            <a href="#" className="twitter btn login-fields">
                                <i className="fa fa-twitter fa-fw"></i> Login with Twitter </a
                            ><br />
                            <a href="#" className="google btn login-fields">
                                <i className="fa fa-google fa-fw"></i> Login with Google+
        </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
