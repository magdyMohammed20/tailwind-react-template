import React from 'react'
import logo from '../../images/logo.png'
import './navbar.css'

function Navbar() {

    const toggleMenu = () => {
        document.getElementById('dropdown-menu').classList.toggle('open-dropdown')
    }
    return (
        <nav className='shadow relative' style={{ height: '80px' }}>
            <div className='container-lg px-4 lg:px-8 mx-auto h-full'>
                <div className='row flex h-full items-center'>
                    <div className='logo h-10 w-24 mr-8'>
                        <img src={logo} alt='logo' className='h-full w-full' />
                    </div>
                    <ul className='flex dropdown' id='dropdown-menu'>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Intro</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Home</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Pages</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Components</a>
                        </li>
                        <li className='mx-1'>
                            <a href='#' className='block p-3 font-medium hover:bg-gray-300 rounded-md transition duration-200 ease-in-out'>Templates</a>
                        </li>
                    </ul>

                    <div className='search-and-buy ml-auto'>
                        <button className='toggle-dropdown-menu hidden bg-gray-300 w-12 h-12 mr-2 rounded-md transition duration-200 ease-linear hover:bg-gray-400 focus:outline-none' onClick={() => toggleMenu()}>
                            <i className="fa fa-bars" ></i>
                        </button>
                        <button className='bg-gray-300 w-12 h-12 rounded-md transition duration-200 ease-linear hover:bg-gray-400 focus:outline-none'>
                            <i className="fa fa-search"></i>
                        </button>
                        <button className='bg-orange-400 text-white h-12 px-2 ml-2 rounded-md font-medium transition duration-200 ease-linear hover:bg-orange-500 focus:outline-none'>
                            Buy Template Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
