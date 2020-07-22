import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utilis/axiosWithAuth';


function FriendForm() {
    
    let initialState = {
        name: "",
        age: "",
        email: ""
    }

    const [ newFriend, setNewFriend ] = useState(initialState)

    // const handleChange = e => {
    //     setNewFriend({
    //         name: e.target.value,
    //         age: e.target.value,
    //         email: e.target.value
    //     })
    // }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/friends", {
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log({ err }))
    }

    // const addFriend = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post("/friends", newFriend)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log({ err }))
    // }

        return (
            <div>
                <h1>Add A New Friend Below!</h1>
                <form onSubmit={addFriend}>
                    <label>Name -:-
                        <input 
                            type="text"
                            name="name"
                            value={newFriend.name}
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>Age -:-
                        <input 
                            type="text"
                            name="age"
                            value={newFriend.age}
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>Email -:-
                        <input 
                            type="email"
                            name="email"
                            value={newFriend.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <button>Submit</button>
                </form>
                <div>

                </div>
            </div>
        )
}

export default FriendForm;