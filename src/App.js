import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './routes'
import './App.css';
import Main from './layouts/main'
import {connect} from 'react-redux'
import * as authActions from './store/actions/authActions'



class App extends React.Component {
  componentWillMount() {
    this.props.loginCheck()
}
render(){
  return (
    <div className="App ">
      <BrowserRouter>
      <Main>
      <MainRouter/>
      </Main>
      </BrowserRouter>
      </div>

  );
}
}

const mapStateToProps=state=>{
  return{
    isAuthenticated:state.auth.token!==null,
  }
}


const mapDispatchToProps=dispatch=>{
  return{
    loginCheck:()=>dispatch(authActions.authCheck())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
