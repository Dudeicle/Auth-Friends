import React, { useState, useEffect } from 'react';
import axios from 'axios';


class LoginForm extends React.Component {

    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        // make a post request to the login page
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/protected")
            })
            .catch(err => console.log({ err }))
    };



    render() {
        return (
            <div>
                <h1>User Login</h1>
                <form onSubmit={this.login}>
                    <label>Username -:-
                        <input 
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <br></br>
                    <label>Password -:-
                        <input 
                            type="text"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <br></br>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm