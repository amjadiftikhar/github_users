import React, {useState, useEffect} from 'react';
import Loader from './Loader';

type UserDetailProps = {
    user: any;
}

const UserDetails:React.FC<UserDetailProps> = ({user}) => {

    // states defined
    const [ details, setDetails ] = useState<any>();
	const [ loading, setLoading ] = useState(false)

    // function to fetch user details
    const fetchUserDetails = async (login:any) => {
        const githubUrl = `https://api.github.com/users/${login}`;
        setLoading(true);
        await fetch(githubUrl)
            .then(response => response.json())
            .then(data => {
                setDetails(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchUserDetails(user.login)
    }, [user.login])

    return (
        <div className='userDetails' data-testid='userDetailsTest'>
            { !details && loading ? 
                <div style={{position:'relative', marginRight:'30%', marginBottom:'20%'}}> 
                    <Loader/> 
                </div> : details ? ( 
                <>
                    <div><span className='infoTitle'> Name: </span>  { details.name } </div>
                    <div><span className='infoTitle'> Blog: </span> { details.blog } </div>
                    <div><span className='infoTitle'> Bio: </span> { details.bio } </div>
                    <div><span className='infoTitle'> Location: </span> { details.location } </div>
                    <div><span className='infoTitle'> 
                        Public repos: </span> { details.public_repos } 
                    </div>
                    <div><span className='infoTitle'> Followers: </span> { details.followers } </div>
                </>
            ) : (
                <p> upssss!! no details available </p>
                ) 
            }
        </div>
    )
}

export default UserDetails;
