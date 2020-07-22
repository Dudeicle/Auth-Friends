import React, { useState, useEffect } from 'react';
import axios from 'react'
import { axiosWithAuth } from '../utilis/axiosWithAuth';

function FriendList() {
    
    const [ friendList, setFriendList ] = useState([])


    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            setFriendList(res.data)
        })
        .catch(err => console.log({ err }))
    }, [])
    

        return(
            <div>
                {friendList.map(friend => (
                    <div>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
            </div>
        )
    
}
export default FriendList;