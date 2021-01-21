import React from 'react';
const Searchbox = ({ searchfield, searchchange }) => {
    return (
        <div>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Robos'
                onChange={searchchange}
            />
        </div>
    );
}
export default Searchbox;