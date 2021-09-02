import React from 'react';

type FormProps = {
    search: string;
    setSearch: any
}

const Form: React.FC<FormProps> = ( {search, setSearch} ) => {

    return (
        <form className='userInput' data-testid='formTest'>
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
