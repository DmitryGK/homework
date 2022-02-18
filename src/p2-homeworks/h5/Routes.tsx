import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Routes, Route,} from 'react-router-dom';
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+'
}

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes
