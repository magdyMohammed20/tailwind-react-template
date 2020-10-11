import React from 'react'
import './style.css'

function QuestionCard({ title, text }) {
    return (
        <div className='question-card flex flex-col text-center my-4 xl:my-12 xl:flex-row xl:text-left xl:my-4 '>
            <div className='file bg-white rounded-full text-center mt-4 mx-auto xl:ml-0'>
                <i className="fa fa-file-text-o text-gray-600" style={{ fontSize: '1.3rem' }}></i>
            </div>
            <div className='ml-4'>
                <h2 className='font-bold text-lg lg:text-xl my-3'>{title}</h2>
                <p className='text-gray-600 text-sm lg:text-lg lg:px-8 xl:p-0'>{text}</p>
            </div>
        </div>
    )
}

export default QuestionCard
