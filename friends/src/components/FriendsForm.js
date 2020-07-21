import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../axiosAuth';


class FriendForm extends React.Component {
    state = {
        friends: [
            {
            id: new Date(),
            name: '',
            age: '',
            email: ''
            }
        ]
    };

    handleChange = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
        })
    }

    // addFriend = e => {
    //     e.preventDefault();
    //     axiosWithAuth();
    //     .post("/friends", this.state.)
    // }

    render() {
        return (
            <div>
                <h1>Add A New Friend Below!</h1>
                <form onSubmit={this.addFriend}>
                    <label>Name -:-
                        <input 
                            type="text"
                            name="name"
                            value={this.state.friends.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br></br>
                    <label>Age -:-
                        <input 
                            type="text"
                            name="age"
                            value={this.state.friends.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br></br>
                    <label>Email -:-
                        <input 
                            type="email"
                            name="email"
                            value={this.state.friends.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br></br>
                    <button>Submit</button>
                </form>
                <div>

                </div>
            </div>
        )
    };
}

export default FriendForm;