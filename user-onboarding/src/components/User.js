import React from "react";

const User = ({ details }) => {
    return (
        <div className='user'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
        </div>
    )
}

export default User;