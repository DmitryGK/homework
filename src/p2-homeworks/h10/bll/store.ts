import { themeReducer } from './../../h12/bll/themeReducer';
import {loadingReducer} from './loadingReducer'
import {} from 'react-redux'
import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev

