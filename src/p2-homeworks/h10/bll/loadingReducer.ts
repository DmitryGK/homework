const initState = {
    isLoading: false
}

type IsLoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: IsLoadingActionType):typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        } 
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): IsLoadingActionType => ({type: 'CHANGE_LOADING', isLoading})