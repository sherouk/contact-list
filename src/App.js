import './styles.css'
import ContactCard from './ContactCard'
const App = () => {
  const contacts = [
    { name: 'Mr. Bubble', email: 'mrbubbles@email.com', age: 43 },
    { name: 'Mrs. Suds', email: 'mrssuds@email.com', age: 47 },
    { name: 'Little Soapy', email: 'lilsoapy@email.com', age: 13 }
  ]  
  
  return (
  <div className="container">
    {contacts.map(contact => (
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name={contact.name}
        email={contact.email}
        age={contact.age}
      />
    ))}
  </div>
  )
}

export default App
