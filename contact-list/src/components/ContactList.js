import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';

export default function ContactList(props) {
    function getSearchTerm(e){
        
        props.searchKeyword(e.target.value);
        
    }
   
   const renderList = props.contact.map((contact) => {

    let deleteHandler = (id) => {
        props.getContactId(id);
    }
       
       return(
           
           
          <ContactCard contact={contact} clickHandler={deleteHandler} key={contact.id} />
        
       )
   })
   
    
    return (
        <>
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        <h1 className='ui header' style={{marginTop:'5rem'}}>Contact List
        <Link to='/'><button className='ui button blue right' style={{marginLeft:'1rem',marginBottom:'1rem'}}>Add Contacts</button></Link></h1>
        </div>
        <div className='ui search'>
            <div className='ui icon input'>
                <input className='promt' placeholder='Search Contacts' type='text'
                onChange={getSearchTerm}
                style={{width:"80vw", height:'5vh',marginLeft:'2rem'}}></input>
                <i className='search icon'></i>
            </div>
        </div>
        <div className='ui celled list' style={{display:'flex' , justifyContent:'center' , alignItems:'center',flexDirection:'column',width:'90%'}}>
            {renderList.length > 0 ? renderList : 'No Contacts Available'}
        </div>
        </>
    )
}
