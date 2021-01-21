import React from 'react';

const Scroll=(props)=>{
    return(
        <div style={{overflowY:'auto' ,border:'2px solid black', height: '700px' }}>
            {props.children}
        </div>
    )
}
export default Scroll;