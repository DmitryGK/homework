import React from 'react'
import Header from './Header'
import AllRoutes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>

                <AllRoutes/>

            </HashRouter>
        </div>
    )
}

export default HW5
