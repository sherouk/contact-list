import { useState } from 'react'

const ContactCard = props => {
  // console.log(props.avatar)
  // console.log(props.name)
  // console.log(props.email)
  // console.log(props.age)

  const contacts = [
    { name: 'Mr. Bubble', email: 'mrbubbles@email.com', age: 43 },
    { name: 'Mrs. Suds', email: 'mrssuds@email.com', age: 47 },
    { name: 'Little Soapy', email: 'lilsoapy@email.com', age: 13 }
  ]

  const [showAge, setShowAge] = useState(false)

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

export default ContactCard
