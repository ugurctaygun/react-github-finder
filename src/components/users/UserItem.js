import React from 'react'
import {Link} from 'react-router-dom'

const UserItem = (props) => {
  
    //object deconstruction for not having to use this.state every time
    //while referencing objects in jsx
    const { login, avatar_url} = props.user;

    return (
        <div className="card text-center">
            <img src={avatar_url} alt=""
             className="round-img"
             style= {{ width: '60px'}}
            />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                More
                </Link>
            </div>
        </div>
        )
    
}

export default UserItem