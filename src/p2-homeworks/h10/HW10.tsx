import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import Preloader from './bll/preloader/Rolling-1.9s-124px.svg'


function HW10() {
    
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()


    const loading = false

    const setLoading = () => {

        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)


    };

    return (
        <div>
            <hr />
            homeworks 10
            {isLoading
                ? (
                    <div> ...... </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
