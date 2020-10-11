import React from 'react'
import {Link} from 'react-router-dom'


export default function SignedOutLinks({opened}) {
    let state=opened ? 'block' : 'hidden'
    return (
        <div  className=''>
           
            <div className={`mt-16 md:mt-2 justify-start md:justify-end ${state} md:block `} id='menu'>
                <li  style={{listStyleType:'none'}}>
                    <Link to='/signin'><ul className=' mr-2 mb-2 md:inline-block'><span className=' font-bold text-red-500 text-1xl cursor-pointer hover:underline ' >Sign In </span></ul></Link>
                    <Link to='/signup'><ul className=' md:inline-block' > <button className='w-20 bg-red-500 p-2 rounded text-white font-bold' >Sign Up</button></ul></Link>
                </li>
           
            </div>
        </div>
    )
}
