import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class EditContact extends Component {
    constructor(props){
        super(props);
            const { id , name , email} = props.location.state.contact;
            
            this.state = {
                id,
                name,
                email,
            }  
    }
    update = (e) => {
        
        e.preventDefault();
        this.props.updateContactHandler(this.state);
        this.setState(this.state);

       

    }
    render() {
        return (
            <div className='ui main' style={{marginTop:'5rem'}}>
                <h2>Edit Contact</h2>
                <form className='ui form' onSubmit={this.update}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' 
                        value= {this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email'
                        value= {this.state.email}
                        onChange={(e) => this.setState({email:e.target.value})}></input>
                    </div>
                    
                    <button className='ui button blue'>Update</button>
                    <Link to='/list'>
                    <button className='ui button blue'>See Contacts</button></Link>
                </form>
            </div>
        )
    }
}
