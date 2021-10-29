import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

export default function ContactDetails(props) {
    let { name , email} = props.history.location.state.contact;
    
    return (
        <div className='main' style={{display:'flex' , justifyContent:'center' , alignItems:'center',marginTop:'5rem',
        flexDirection:'column'}}>
            <div className='ui card center'>
                <div className='image'>
                    <img src={user} alt='user'/>
                </div>  
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='descreption'>{email}</div>
                </div>
            </div>  
            <Link to='/list'>
            <button className='ui button blue center'>Back To Contact List</button>
            </Link>

        </div>
    )
}
