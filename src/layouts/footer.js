import React from 'react'

export default function Footer() {
    return (
        <footer className=' text-white  bg-red-500 shadow-xs bottom-0 p-1 mt-auto text-sm' style={{height:'auto',paddingLeft:50}}>
        <span className='w-full flex'>made with  
        <svg className="w-6 h-6 ml-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> 
        by Mazen Ahmed</span>
    </footer>
    )
}
