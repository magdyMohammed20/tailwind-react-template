import React from 'react'

function Card({ img, title, text }) {
    return (
        <div className='webflow-card my-6 text-center xl:text-left'>
            <img src={img} className='mx-auto xl:ml-0' />
            <div className='card-body'>
                <h3 className='font-medium text-xl mt-4'>{title}</h3>
                <p className='card-text my-4 pr-8 text-gray-600'>
                    {text}
                </p>
                <a href='#' className='text-indigo-800 font-medium'>
                    Learn More
                    <i className="fa fa-chevron-right ml-3"></i>
                </a>
            </div>
        </div>
    )
}

export default Card
