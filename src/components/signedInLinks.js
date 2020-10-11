import React from 'react'
import {Link} from 'react-router-dom'
import * as authActions from '../store/actions/authActions'
import {connect} from 'react-redux'
import {useState} from 'react'

 function SignedOutLinks(props) {
    const [opened,setOpened]=useState(false)
    let menu=opened ?'block':'hidden'
    let state=props.opened ? 'block' : 'hidden'
    const handleOpen=()=>{
        if(opened){
            setOpened(false)
        }else{
            setOpened(true)
        }
    }
    return (
        <div  className=''>
           
            <div className={`mt-16  md:mt-4 justify-start md:justify-end ${state} md:block `} id='menu'>
                <li  style={{listStyleType:'none'}}>
                    <Link onClick={handleOpen}><ul className=' md:inline-block' > 
                    <span className='w-20 text-1xl mt-12 text-red-500  rounded font-bold mr-2' ><img className='h-6 w-6 rounded-full inline-block mr-1 border-red-500 border-solid border-2' src={localStorage.getItem('avatar')} />
                    {localStorage.getItem('username')} 
                    {opened
                    ?
                    <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    :   
                    <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    }  
                    </span></ul></Link>
                </li>
                <div className={`w-auto h-auto p-4 px-8 ${menu} bg-white rounded-md absolute mt-4`}>
                <li  style={{listStyleType:'none'}}>
              

                <Link to='/' onClick={()=>props.logout()}><ul  > <span className='w-20 text-1xl mt-12 text-red-500  rounded font-bold' >
                <svg className="w-4 h-4 inline-block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Logout
                    </span></ul></Link>
                </li>
                </div>
           
            </div>
        </div>
    )
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
      logout:()=>dispatch(authActions.logout()),
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignedOutLinks)