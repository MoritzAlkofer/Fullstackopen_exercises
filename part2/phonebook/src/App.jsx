import { useState } from 'react'
import Names from './Names'
import namesToShow from './namesToShow'

const App = () => {
  const [names, setName] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')  

  const [numbers, setNumbers] = useState([{ number: '0' }]) 
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  const addNameAndNumber = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    
    // make sure that name is not already present
    names.filter(person => person.name === newName).length
      ? alert(`${newName} is already added to phonebook`) // raise alert if already present
      : setName(names.concat({name: newName, number: newNumber})) // else add 
    setNewName('')
  
    console.log('button clicked', event.target)
    setNumbers(numbers.concat({number: newNumber}))
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
            filter: <input 
                    value={filter}
                    onChange={handleFilterChange}/>
        </div>
      <h2>Add new</h2>
        <form onSubmit={addNameAndNumber}>
          <div>
            name: <input 
                    value={newName}
                    onChange={handleNameChange}/>
          </div>
          <div>
            Number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

      <h2>Numbers</h2>
      {console.log({filter})}
      <Names names={
        namesToShow({names, filter})
        }/>
    </div>
  )
}

export default App