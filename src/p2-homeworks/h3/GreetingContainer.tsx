import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (user:string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        alert(`Hello ${name}!`) // need to fix
        addUserCallback(name)
    }

    const totalUsers = users.length// need to fix

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
