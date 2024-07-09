import { FC, useEffect, useState } from "react";
import "./addPopup.css"
import Button from "../Button/Button";
import { Person } from "../../interfaces";

type AddPopupProps = {
    closePopupSetter: React.Dispatch<React.SetStateAction<boolean>>
    addNewPerson: (person: Person) => void
}

const AddPopup: FC<AddPopupProps> = ({ closePopupSetter, addNewPerson }) => {
    const [personToAdd, setPersonToAdd] = useState<Person>({ id: 0, name: "", lastName: "" })

    // VALIDATORS 
    const validateName = (): boolean => {
        return personToAdd.name.length > 0  
    }
    const validateLastName = (): boolean => {
        return personToAdd.lastName.length > 0 
    }
    const validateAge = (): boolean => {
        return personToAdd.age === undefined || personToAdd.age > 0 
    }
    const validateHeight = (): boolean => {
        return personToAdd.age === undefined || personToAdd.age > 0 
    }

    const validatePerson = (): boolean => {
        return (validateName() && validateLastName() && validateHeight() && validateAge())
    }

    useEffect(() => { console.log(personToAdd) }, [personToAdd])
    return (
        <div className="add-popup-wrapper">
            <section className="card form-card">
                <div className="form-card-header">
                    <h3>Ajouter une nouvelle personne</h3>
                </div>
                <form className="form-card-body" >
                    <div className="form-body">
                        <label id="name">Prénom</label>
                        <input type="text" name="name" id="name" value={personToAdd?.name} onChange={(e) => setPersonToAdd({ ...personToAdd, name: e.target.value })} />
                        <label id="name">Nom</label>
                        <input type="text" name="name" id="name" value={personToAdd?.lastName} onChange={(e) => setPersonToAdd({ ...personToAdd, lastName: e.target.value })} />
                        <label id="name">Age</label>
                        <input type="number" name="name" id="name" value={personToAdd?.age} onChange={(e) => setPersonToAdd({ ...personToAdd, age: parseInt(e.target.value) })} />
                        <label id="name">Taille (cm)</label>
                        <input type="number" name="name" id="name" value={personToAdd?.height} onChange={(e) => setPersonToAdd({ ...personToAdd, height: parseInt(e.target.value) })} />
                    </div>
                    
                </form>
                <div className="form-card-footer">
                        <Button outlined text="Annuler" onclick={() => closePopupSetter(false)} />
                        <Button outlined text="Ajouter" disabled={!validatePerson()} onclick={() => addNewPerson(personToAdd)}/>
                    </div>
            </section>
        </div>
    )
}

export default AddPopup