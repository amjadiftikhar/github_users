import React from 'react';

type FormProps = {
    search: any;
    setSearch: any
}

const Form: React.FC<FormProps> = ( {search, setSearch} ) => {

    return (
        <form className='userInput'>
            <input 
                type='text' 
                placeholder='Enter user name..' 
                value={search}
                onChange={ (e:any) => setSearch(e.target.value) }
            />
        </form>
    )
}

export default Form;
