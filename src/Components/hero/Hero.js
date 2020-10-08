import React from 'react'
import hero from '../../images/hero.png'
import './hero.css'
function Hero() {
    return (
        <div className='bg-indigo-900 h-screen relative'>
            <div className='container-xl flex flex-wrap px-6 h-full'>
                <div className='text-white text-center w-full lg:w-1/2 lg:text-left lg:p-5 flex flex-col justify-center'>
                    <span className='mb-5'>STUNNING TEMPLATE</span>
                    <h2 className='text-2xl lg:text-5xl font-bold leading-snug'>
                        Build Your Website with Jules UI Kit Template
                    </h2>
                    <p className='my-4'>
                        A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers.
                    </p>
                    <div className='mt-4'>
                        <button className='focus:outline-none py-3 px-4 bg-white text-gray-900 font-medium rounded transition duration-200 ease-in-out hover:bg-gray-300'>buy template</button>
                        <button className='focus:outline-none py-3 px-4 bg-orange-400 rounded font-medium ml-3 transition duration-200 ease-in-out hover:bg-orange-600'>learn more</button>
                    </div>
                </div>
                <div className='w-1/2 p-5 hidden lg:inline-block'>
                    <img src={hero} />
                </div>
                <div className='bg-white mx-auto rounded-full flex justify-center overflow-hidden' style={{ width: '30px', height: '50px' }}>
                    <span className='hero-spin bg-indigo-900 rounded-full block mt-2'></span>
                </div>
            </div>

            <img src={'https://assets.website-files.com/5e09f044743608547fe6e12a/5e130c3e6a42a449fb63c612_decor-v1.svg'} className='absolute bottom-0 left-0 w-full' />
        </div>
    )
}

export default Hero
