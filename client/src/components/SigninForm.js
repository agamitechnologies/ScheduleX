import React, { useState } from 'react';

function SigninForm({ Signin, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Signin(details);  
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Sign-In</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>  
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                
                <div className="text-center pt-1 mb-5 pb-1">
                    <input type="submit" value="SIGN-IN" />
                    <button type="button" className="btn btn-link btn-floating mx-1"></button>
                </div>

                <div>
                    <p className="mb-0">Don't have an account? <a href="#!" >Sign Up</a>
                    </p>
                </div>



                <div className="text-center pt-1 mb-5 pb-1">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

        </form>
    )
}

export default SigninForm;
