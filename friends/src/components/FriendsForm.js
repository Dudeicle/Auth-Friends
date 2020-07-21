import React from 'react';
import axios from 'axios';




let nextId = 7;


let friends = [
    {
      id: 1,
      name: 'Rachel Green',
      age: 30,
      email: 'rachel@friends.com'
    },
    {
      id: 2,
      name: 'Joey Tribbiani',
      age: 34,
      email: 'joey@friends.com'
    },
    {
      id: 3,
      name: 'Chandler Bing',
      age: 32,
      email: 'chandler@friends.com'
    },
    {
      id: 4,
      name: 'Ross Geller',
      age: 32,
      email: 'ross@friends.com'
    },
    {
      id: 5,
      name: 'Monica Bing',
      age: 31,
      email: 'monica@friends.com'
    },
    {
      id: 6,
      name: 'Phoebe Buffay-Hannigan',
      age: 30,
      email: 'phoebe@friends.com'
    }
  ];
  

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

    getNextId = () => {
        return nextId++;
    }
    

    handleChange = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/friends", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ld3VzZXIiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU5MzExNDk4OSwiZXhwIjoxNTkzMTE4NTg5fQ.Kc4aVoBO-jf9QJt5JNBnk0AxrC6e36yoo3rrd_trf3A', (req, res) => {
                const friend = { id: getNextId(), ...req.body };

                friends = [...friends, friend];

                res.send(friends);
            });    
    }
    
    // app.post('/api/friends', authenticator, (req, res) => {
    //     const friend = { id: getNextId(), ...req.body };
      
    //     friends = [...friends, friend];
      
    //     res.send(friends);
    //   });
      
    
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