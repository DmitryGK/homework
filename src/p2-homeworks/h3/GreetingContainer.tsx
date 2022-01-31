import React, {ChangeEvent, MouseEventHandler, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (user: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName){
            setName(trimmedName)
            setError(null)
        } else {
            setName('')
            setError('name is required')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert (`Hello ${name} !`)
    }

    const totalUsers = users.length


    console.log(users)
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
