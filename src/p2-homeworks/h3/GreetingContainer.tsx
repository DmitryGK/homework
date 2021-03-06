import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

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
    const [error, setError] = useState<string | null>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value.trim()

        if (newName) {
            setName(newName)
            setError(null)
        } else {
            setName('')
            setError('name is required')
        }
    }

    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            alert(`Hello ${name} !`)
            setName('')
        } else {
            setError('name is required')

        }
    }

    const onKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key  === 'Enter' && name) {
            addUser()
            setName('')
        }
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
            onKeyPress={onKeyPress}
        />
    )
}

export default GreetingContainer
