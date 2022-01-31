import React, {ChangeEvent, MouseEventHandler} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string | null// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <div className={s.error}>{error}</div>
            </div>
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
