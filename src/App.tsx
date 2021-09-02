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
  const [searchDelay, setSearchDelay] = useState(0)  

  const handleCall = async (a:any) => {
    return fetch(a)
    .then(response => response.json())
    .then(data => {
      setUserData(data.items)
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    const githubUrl = `https://api.github.com/search/users?`;
    const fetchUsers = async () => {
      const searchedUser = `${githubUrl}q=${search}`;
      if(search) {
        setLoading(true)
        if(searchDelay) {
          clearTimeout(searchDelay)
        }
        const setDelay = setTimeout(() => {
          handleCall(searchedUser)          
        }, 500);
        setSearchDelay(setDelay as any)
      }
    }
    fetchUsers();         
  }, [search])

  return (
    <div className='mainSection' data-testid='app'>
      <Header/>
      <Form search={search} setSearch={setSearch}/>
      {loading ? <Loader/> : <UserList userData={userData} />}
    </div>
  );
}

export default App;
