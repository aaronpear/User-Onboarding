import React from "react";

const User = ({ details }) => {
    return (
        <div className='user'>
            <h2>{details.name ? details.name : (details.first_name + ' ' + details.last_name)}</h2>
            <p>{details.email}</p>
            {
                details.avatar ? <img src={details.avatar} alt='AN AVATAR' /> : null
            }
        </div>
    )
}

export default User;