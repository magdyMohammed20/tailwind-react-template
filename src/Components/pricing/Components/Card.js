import React from 'react'
import './card.css'

function Card({ imgSrc, title, list, price, plan, btnText }) {

    return (
        <div className='pricing-card my-3 px-1 lg:p-5'>
            <div className='bg-white shadow p-8 rounded transition duration-200 ease hover:shadow-lg'>
                <div className='w-48 h-40 mx-auto'>
                    <img src={imgSrc} className='xl:ml-0 w-full h-full' alt={title} />
                </div>
                <div className='card-body'>
                    <h3 className='font-medium text-lg lg:text-2xl text-center font-bold mt-4 mb-6'>{title}</h3>
                    <ul>
                        {
                            list.map((item, index) => {
                                return <li key={index} className='my-3 text-sm md:text-md'>
                                    {
                                        title === 'Beginner' && (index === 3 || index === 4) ? <i className="fa fa-ban mr-3 text-lg text-gray-500"></i> : <i className="fa fa-check-square-o mr-3 text-lg text-gray-700" aria-hidden="true"></i>
                                    }

                                    {
                                        title === 'Beginner' && (index === 3 || index === 4) ? <span className='text-gray-500'>{item}</span> : <span>{item}</span>
                                    }


                                </li>
                            })
                        }
                    </ul>
                    <h3 className='text-indigo-800 text-xl lg:text-4xl font-bold text-center'>${price}</h3>
                    <span className='text-sm block text-center text-gray-500 italic font-semibold'>
                        {plan}
                    </span>
                    <a href='#' className='font-medium text-white text-sm md:text-lg font-bold bg-orange-500 w-1/2 lg:w-3/4 block text-center mx-auto p-3 mt-5 rounded transition ease-in-out duration-200 hover:bg-orange-600'>
                        {btnText}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
