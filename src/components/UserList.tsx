import React from 'react';
import User from './User';

type UserListProps = {
    userData: any;
}

const UserList:React.FC<UserListProps> = ({userData}) => {

    return (
        <div className='mainContainer' data-testid='userListTest'>
            <ul>
                { userData && userData.length > 0 ? (
                    // mapping through userData and returning container
                    userData.map((user:any) => {
                        return(
                            <li key={user.id} className='userContainer'>
                                <User key={user.id} userData={user}/>
                            </li>
                        )
                        })
                    ) : (
                        <p> Type &#9757; to search for a user </p>
                    )
                }
            </ul>
        </div>
    )
}

export default UserList;
