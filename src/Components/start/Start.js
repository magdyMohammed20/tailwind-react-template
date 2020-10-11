import React from 'react'

function Start() {
    return (
        <div className='start bg-indigo-900 p-20'>
            <div className='container-lg text-center'>
                <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e0f4d40100da44f945918b9_trophy.svg' className='mx-auto' />
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mt-6'>Start with Jules template!</h1>
                <p className='text-md w-full md:w-1/2 lg:w-2/3 text-white mx-auto my-6 text-gray-300'>
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.
                </p>
                <button className='bg-orange-500 text-white text-sm lg:text-lg font-bold px-8 py-3 rounded mt-4 transition ease-in-out duration-200 hover:bg-orange-600 focus:outline-none'>
                    Buy It Now
                </button>
            </div>
        </div>
    )
}

export default Start
