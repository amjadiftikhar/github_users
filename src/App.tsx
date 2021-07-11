import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import UserList from './components/UserList';
import Loader from './components/Loader';

import './app.css';

const App = () => { 

  const [ userData, setUserData ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ loading, setLoading ] = useState(false);  

  useEffect(() => {
    const githubUrl = `https://api.github.com/search/users?`;
    const fetchUsers = async () => {
      const searchedUser = `${githubUrl}q=${search}`;
      if(search) {
        setLoading(true)
        await fetch(searchedUser)
          .then(response => response.json())
          .then(data => {
            setUserData(data.items)
          })
          .catch(error => console.log(error))
          .finally(() => setLoading(false))
      }
    }
    fetchUsers();         
  }, [search])

  return (
    <div className='mainSection'>
      <Header/>
      <Form search={search} setSearch={setSearch}/>
      {loading ? <Loader/> : <UserList userData={userData} />}
    </div>
  );
}

export default App;
