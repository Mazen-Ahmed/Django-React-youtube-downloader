import React, { Component } from 'react'
import NavBar from './navBar'
import Footer from './footer'
class Main extends Component {
    render() {
        return (
            <div className='flex flex-col min-h-screen bg-gray-200 w-full'  >
                <NavBar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default Main;