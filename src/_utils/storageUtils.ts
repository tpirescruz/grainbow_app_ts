import { Person } from "../interfaces"

const STORAGE_KEY = "GRAINBOW_TPC-TS_TEST"

export const getAllPersons = (): Person[] => {
    const retrieved: Array<Person> = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    if (!retrieved.length) { addPersonToStorage({ id: 0, name: "Tom", lastName: "Pires Cruz", height: 170, age: 26 }) }
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const addPersonToStorage = (newPerson: Person): Person[] => {
    const retrievedString: string = window.localStorage.getItem(STORAGE_KEY) || '[]'
    const retrieved: Array<Person> = JSON.parse(retrievedString)

    if (retrieved.filter(person => person.name === newPerson.name && person.lastName === newPerson.lastName).length) {
        window.alert("Personne déjà présente")
    } else {
        const incrementedIndex = (retrieved.sort((a, b) => a.id - b.id).at(retrieved.length - 1)?.id || 0) + 1
        newPerson.id = incrementedIndex
        retrieved.push(newPerson)
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(retrieved))
    }


    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const deletePersonFromStorage = (deletedPerson: Person): Person[] => {
    var retrieved: Array<Person> = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    retrieved = retrieved.filter(person => person.id !== deletedPerson.id)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(retrieved))
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}


