import { useEffect, useState } from 'react';
import './App.css';
import MemberCard from './_components/MemberCard/MemberCard';
import { Person } from './interfaces';
import { addPersonToStorage, deletePersonFromStorage, getAllPersons } from './_utils/storageUtils';
import Button from './_components/Button/Button';
import AddPopup from './_components/AddPopup/AddPopup';


function App() {
  const [persons, setPersons] = useState<Array<Person>>([])
  const [addPopupOpen, setAddPopupOpen] = useState<boolean>(false)

  useEffect(() => {
    setPersons(getAllPersons())
  }, [])

  const deletePerson = (personToBeDeleted: Person) => {
    setPersons(deletePersonFromStorage(personToBeDeleted))
  }

  const addNewPerson = (newPerson: Person) => {
    setPersons(addPersonToStorage(newPerson))
  }

  return (
    <div className="main">
      <header>
        <h1>Grainbow</h1>
        <h2>Application de test</h2>
      </header>
      <main>
        <div className="person_container">
          <Button outlined onclick={() => setAddPopupOpen(true)} text='Ajouter une personne' />
          {persons?.map((it, index) => (<MemberCard key={index} person={it} deletionFunction={deletePerson} />))}
        </div>
        {addPopupOpen && <AddPopup closePopupSetter={setAddPopupOpen} addNewPerson={addNewPerson} />}
      </main>
    </div>
  );
}

export default App;
