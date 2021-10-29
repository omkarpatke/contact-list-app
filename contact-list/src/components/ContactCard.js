import React from 'react';
import User from '../images/user.png';
import {Link} from 'react-router-dom';

export default function ContactCard(props) {
    let {id, name , email} = props.contact;
    return (
        <div className='item' style={{display:'flex',justifyContent:'space-between',alignItems:'center', height:'10vh',width:'100%'}}>
        <div className='content' style={{fontSize:'1.2rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img className='ui avatar image' src={User} alt='img' />
            <Link to={{pathname:`/contacts/${id}` , state: {contact : props.contact } }}>
            <div style={{display:'flex',flexDirection:'column'}}>
            <div className='header'>{name}</div>
            <div>{email}</div></div>
            </Link>
        </div>
        <div>
        <Link to={{pathname:'/edit', state: {contact : props.contact } }}>
            <i className='edit alternate outline icon' style={{color:'blue' , fontSize:'1.3rem'}}
            ></i>
            </Link>
            <i className='trash alternate outline icon' style={{color:'red' , fontSize:'1.3rem'}}
            onClick={() => props.clickHandler(id)}></i>
            </div>
    </div>
    )
}
