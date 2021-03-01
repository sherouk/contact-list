import './styles.css'
import React, { useState } from 'react'
// import ContactCard from './ContactCard'

const App = () => {
  const contacts = [
    { name: 'Mr. Bubble', email: 'mrbubbles@email.com', age: 43 },
    { name: 'Mrs. Suds', email: 'mrssuds@email.com', age: 47 },
    { name: 'Little Soapy', email: 'lilsoapy@email.com', age: 13 }
  ];
  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar='https://via.placeholder.com/150'
          name={contact.name}
          email={contact.email}
          age={contact.age}
        />
      ))}
    </>
  )
}
const ContactCard = props => {
  const [showAge, setShowAge] = useState(false)
  return (
    <div className = "contact-card">
      <img src={props.avatar} alt = "profile" />
      <div className = "user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick = {() => setShowAge(!showAge)}>
          Toggle Age
        </button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  )
}

export default App