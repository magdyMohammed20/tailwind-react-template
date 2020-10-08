import React from 'react'
import logo from '../../images/logo.png'
import './navbar.css'

function Navbar() {

    const toggleMenu = () => {
        document.getElementById('dropdown-menu').classList.toggle('open-dropdown')
    }

    const toggleOverlay = () => {
        document.getElementsByClassName('search-overlay')[0].classList.toggle('open-search-overlay')
    }

    const closeSearchOverlay = () => {
        document.getElementsByClassName('search-overlay')[0].classList.toggle('open-search-overlay')
    }
    return (
        <nav className='shadow relative' style={{ height: '80px' }}>
            <div className='container-lg px-4 lg:px-8 mx-auto h-full'>
                <div className='row flex h-full items-center'>
                    <div className='logo h-10 w-24 mr-8'>
                        <img src={logo} alt='logo' className='h-full w-full' />
                    </div>
                    <ul className='flex dropdown shadow-lg md:shadow-none' id='dropdown-menu'>
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
                        <button className='bg-gray-300 w-12 h-12 rounded-md transition duration-200 ease-linear hover:bg-gray-400 focus:outline-none' onClick={() => toggleOverlay()}>
                            <i className="fa fa-search"></i>
                        </button>
                        <div className='search-overlay fixed w-full h-full bg-gray-900 left-0 top-0 bg-opacity-75 transform scale-0'>
                            <button className='close-overlay absolute text-white right-0 mt-5 mr-5 border-2 rounded-full transform transition duration-200 ease-in-out hover:scale-110 hover:bg-indigo-600 focus:outline-none' onClick={() => closeSearchOverlay()}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>

                            <form className='absolute w-3/4 lg:w-1/2'>
                                <div className='bg-white px-4 rounded flex items-center'>
                                    <i className='fa fa-search mr-3 text-gray-600'></i>
                                    <input type='search' className='h-100 py-4 flex-1 focus:outline-none' name='search' placeholder='What Are You Looking For ?' />
                                    <button className='text-white py-3 px-6 bg-orange-400 rounded font-medium'>Search</button>
                                </div>
                            </form>
                        </div>
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
