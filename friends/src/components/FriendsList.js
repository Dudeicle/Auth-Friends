import React, { useState, useEffect } from 'react';
import axios from 'react'
import { axiosWithAuth } from '../axiosAuth';

function FriendList() {
    
    let friend = {
        name: "",
        age: "",
        email: ""
    }

    const [ friendList, setFriendList ] = useState()
    const [ newFriend, setNewFriend ] = useState(friend)


    useEffect(() => {
        getData()
    }, friendList)


    console.log(friendList)
    const getData = () => {
        axiosWithAuth()
        .get('/friends', friendList)
        .then(res => {
            setFriendList(res.data)
            console.log(res)
        })
        .catch(err => console.log({ err }))
    }

    // const formatData = () => {
    //     const formattedData = [];
        
    //     this.state.friendList.forEach((friend) => {
    //         if (friend === true) {
    //             formattedData.push({
    //                 name: friend.name,
    //                 age: friend.age,
    //                 email: friend.email
    //             });
    //         }
    //     });
    //     return formattedData;
    // };


    // getFriends = e => {
    //     axios.get("http://localhost:5000/api")
    //     .then(res => {
    //         console.log(res)
            
    //     })
    //     .catch(err => console.log({ err }))
    // }

    // app.get('/api/friends', authenticator, (req, res) => {
    //     setTimeout(() => {
    //       res.send(friends);
    //     }, 1000);
    //   });


    
        return(
            <div>
                friend list component
            </div>
        )
    
}
export default FriendList;