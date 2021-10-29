import React , {useState ,useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import api from './apis/contacts';

function App() {
  let [contacts , setContact] = useState([]);
  let [searchTerm , setSearchTerm] = useState('');
  let [searchResults , setSearchResults] = useState([]);
  // let LOCAL_STORAGE_KEY = "contacts";

  let AddContactHandler = async (contact) => {
    let request = {
      id : uuid(),
      ...contact,
    }
    if(request.name !== '' && request.email !== ''){
    let response = await api.post('/contacts' , request);
    setContact([...contacts , response.data])}
  }

  let removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`);
    let newContactList = contacts.filter((contact) => {
      return contact.id !== id ;
    })
    setContact(newContactList);
  }

  let updateContactHandler = async(contact) => {
    let response = await api.put(`/contacts/${contact.id}` , contact);
    const {id} = response.data;
    setContact(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact;
    }))

  }

  let retriveData = async () => {
      let response = await api.get('/contacts');
      return response.data ;
  }
  let searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm.length > 0){
    let newContactList = contacts.filter((contact) => {
      return Object.values(contact)
      .join('')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      
    });
    setSearchResults(newContactList);  
  }else{
    setSearchResults(contacts)
  }

}

  useEffect(() => {
    // let retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveData) setContact(retriveData);
      let getAllContacts = async() => {
        let allContacts = await retriveData();
        if(allContacts) setContact(allContacts); 
           }

           getAllContacts();
     },[])


   useEffect(() => {
    //  localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts))

   },[contacts])
  return (
    <div className="ui container">
      <Router>
       <Header />
        <Switch>
         <Route path='/' 
         exact component={() => <AddContact AddContactHandler= {AddContactHandler} />}/>
         

         <Route path='/list' 
         component={() => <ContactList contact={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler} />}/>

         <Route path='/contacts/:id' component={ContactDetails}/>
        <Route 
        path='/edit'
        component={(props) => <EditContact {...props} updateContactHandler= {updateContactHandler} /> }/>



        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
