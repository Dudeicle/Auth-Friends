import React from 'react';

function LoginForm() {
    return (
        <div>
            <h1>User Login</h1>
            <form>
                <label>Username: 
                    <input 
                        name="login"
                        type="text"
                    />
                </label>
                <label>Password: 
                    <input 
                        name="login"
                        type="text"
                    />
                </label>
            </form>
        </div>
    )
}

export default LoginForm