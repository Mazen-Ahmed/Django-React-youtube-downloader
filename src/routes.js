import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/home'
import Signin from './components/signin'
import Signup from './components/signup'
const MainRouter=()=>(
    <div>
<Route exact path='/' component={Home}  />
<Route exact path='/signin' component={Signin}  />
<Route exact path='/signup' component={Signup}  />

    </div>
)

export default MainRouter;