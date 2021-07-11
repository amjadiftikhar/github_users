import React, { useState } from 'react';
import UserDetails from './UserDetails';

type UserProps = {
    userData: any;
}

const User:React.FC<UserProps> = ({userData}) => {

	const [showUserDetails, setShowUserDetails] = useState(false);

    const showDetails = (e:any) => {
        e.preventDefault();
        setShowUserDetails(!showUserDetails);
    }

    return (
        <div className='userCard'>
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
