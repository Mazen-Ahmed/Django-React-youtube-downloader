import React, { Component } from 'react';
import SignedOutLinks from '../components/signedOutLinks';
import SignedInLinks from '../components/signedInLinks';
import {connect} from 'react-redux'
import * as authActions from '../store/actions/authActions'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    state={
        opened:false
    }
    render() {
        return (
            <div className="grid ">
            <div className=' bg-white w-full flex flex-direction:row h-auto shadow-md rounded pb-2 pl-12 pr-12'> 
            <div className='text-2xl text-red-500 md:flex-1 mt-3 w-4 h-6 mb-2 font-mono cursor-pointer float-left font-bold'>
            <Link to='/'><span  >Youloader</span></Link>   
            </div>
            {this.props.isAuthenticated
             ?
             <SignedInLinks opened={this.state.opened}/>

             :   
            <SignedOutLinks opened={this.state.opened}/>
            }
            <div className=' mt-0 h-auto cursor-pointer float-right md:hidden'  id='burger' style={{marginLeft:'auto'}}>
            {this.state.opened
            
            ?
            <span className='text-red-500'>
            <svg className="w-8 h-8 mt-4" fill="none" onClick={()=>this.setState({opened:false})} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </span>
            :
            <span className='text-red-500'>
            <svg className="w-8 h-8 mt-4" fill="none" onClick={()=>this.setState({opened:true})} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> 
            </span>
            }
            </div>
            </div>
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
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(NavBar);