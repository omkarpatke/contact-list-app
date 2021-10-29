import React from 'react';


export default function Header() {
    return (
        <div className='ui fixed menu' >
            <div className='ui container center' style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                <h1 className='ui center' style={{marginBottom:'1rem'}}>Contact Manager</h1>
            </div>
        </div>
    )
}
