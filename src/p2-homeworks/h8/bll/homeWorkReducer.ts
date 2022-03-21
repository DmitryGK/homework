import { InitialStateType } from './tests/homeWorkReducer.test';



type ActionType = 
    {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number} 


export const homeWorkReducer = (state: InitialStateType[], action: ActionType): InitialStateType[] => { 
    switch (action.type) {
        case 'sort': {
            const stateCopy = [...state].sort((a, b) => {
                if(a.name > b.name) return 1
                else if(a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            
            return state.filter(a => a.age >= action.payload)
        }
        default: return state
    }
}