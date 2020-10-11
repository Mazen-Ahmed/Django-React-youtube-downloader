import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as authActions from '../store/actions/authActions'
import Loader from 'react-loader-spinner'

class Signin extends Component {

  
  handleSubmit = e => {
    e.preventDefault()
    const name=e.target.username.value;
    const password=e.target.password.value;
    this.props.authLogin(name,password)
  };
    render() {
        if(this.props.isAuthenticated) return <Redirect to='/' />
        return (

        <div className="w-full max-w-xs mt-16 flex justify-center m-auto "  >

          
  <form className="bg-white shadow-md border-gray-600 rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
    
{this.props.error
  ?
  
    Object.keys(this.props.error).map((key)=> {
         return this.props.error[key] && this.props.error[key].map(msg =>
         <div class="bg-red-100 border border-red-400 mb-4 text-red-700 w-auto px-4 py-3 rounded relative" role="alert">
         
         <span class="block sm:inline">{msg}</span>
       </div>)
    })

  
  :
  ''
  }
  <span className='text-1xl md:text-3xl font-bold flex justify-center m-auto border-b-2  text-red-500'>Sign In</span>

    <div className="mb-4 mt-10">
      <label className="block text-red-500 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" name='username' type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-red-500 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border required rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="Password"/>
    </div>
    <div className="flex items-center justify-between">
    {this.props.loading
                
                ?
                 <button className="w-32 pl-1 pr-1  md:text-md md:w-32 bg-red-500 inline-flex justify-center p-2 rounded text-white font-bold opacity-50 cursor-not-allowed" type="submit">
                    <Loader
                            type="Bars"
                            color="#FFF"
                            height={15}
                            width={15}   
                            className='mr-2 mt-1 '     
                        />
                    Sign In
                  </button>
                               :
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
                              }
     
      <Link to='/signup'className="inline-block align-baseline font-bold text-sm ml-1 text-red-500 hover:text-red-600 hover:underline"   href="#">
        Don't have account yet?
      </Link>
    </div>
  </form>
  </div>
        )
    }
}

const mapStateToProps=state=>{
  return{
    isAuthenticated:state.auth.token !== null,
    error:state.auth.error,
    loading:state.auth.loading,
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    authLogin:(username,password)=>dispatch(authActions.authLogin(username,password)),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Signin)