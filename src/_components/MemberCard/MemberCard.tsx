import React, { FC } from "react"
import '../MemberCard/memberCard.css'
import { Person } from "../../interfaces"
import DeleteIcon from "../../_svgs/DeleteIcon"
import Button from "../Button/Button"

type MemberCardProps = {
    person : Person
    deletionFunction : (person : Person) => void
}

const MemberCard : FC<MemberCardProps> = ({person, deletionFunction}) => {
    const { name, lastName, age, height } = person
    return(
        <div className='card person-card'>
            <div className="person-card-body">
                <div className='person-card-header'>
                    <h3>{lastName}</h3>
                    <h2>{name}</h2>
                </div>
                {age && <p>{age} ans</p>}
                { <p>{height ? `${height} cm` : "Non renseigné"} </p> }
            </div>
            <div className="card-action">
                <Button icon={<DeleteIcon/>} onclick={()=> {deletionFunction(person)}}/>
            </div>
        
        </div>
    )

}

export default MemberCard