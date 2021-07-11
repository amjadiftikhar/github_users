import React, { useState } from 'react';
import UserDetails from './UserDetails';

type UserProps = {
    userData: any;
}

const User:React.FC<UserProps> = ({userData}) => {

    // State for user details
	const [showUserDetails, setShowUserDetails] = useState(false);

    // Fuction for setting state
    const showDetails = (e:any) => {
        e.preventDefault();
        setShowUserDetails(!showUserDetails);
    }

    return (
        <div className='userCard' data-testid='userTest'>
            <a className='profileContent' href={userData.url} onClick={showDetails}>
                <img src={userData.avatar_url} alt='profile img' />
                <div className='userLogin'>
                    {userData.login}
                </div>
            </a>
            { showUserDetails && <UserDetails user={userData} /> }
        </div>
    )
}

export default User;
