import React from 'react'
import QuestionCard from './Components/QuestionCard'
function Questions() {
    return (
        <div className='questions bg-gray-200 p-20'>

            <p className='w-3/4 xl:w-1/2 mx-auto text-center text-xs mb-6 text-gray-600'>
                Do not hesitate to <a href='#' className='text-indigo-800 underline'>contact us</a> if you have any questions about our pricing plans. We're here to help. Oh, and don’t forget to check the <a href='#' className='text-indigo-800 underline'>FAQ page</a>.
                </p>

            <div className='container-lg flex flex-col xl:flex-row mt-16'>
                <div className='ask-title w-full xl:w-2/6 text-center xl:text-left'>
                    <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e11b62b0227d01a8f7a8d65_question-mark.svg' className='mx-auto xl:ml-0' />
                    <h1 className='text-4xl font-bold mt-4 mb-8 leading-snug'>
                        Frequently Asked <br />Questions
                    </h1>
                    <a href='#' className='text-indigo-800 font-bold'>
                        More Questions
                        <i className="fa fa-chevron-right ml-2 text-xl"></i>
                    </a>
                </div>
                <div className='w-full mt-6 grid grid-cols-1 md:grid-cols-2 xl:block xl:mt-0 xl:w-4/6 xl:pl-16'>
                    <QuestionCard title='What is a FAQ page?' text='A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.' />
                    <QuestionCard title='Where do I look for “Frequently Asked” Questions?' text='A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.' />

                    <QuestionCard title='Can a FAQ page help with SEO?' text='A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.' />
                    <QuestionCard title='Where should I put my FAQ section?' text='A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.' />
                    <QuestionCard title='Do you have an API?' text='A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.' />
                </div>
            </div>
        </div>
    )
}

export default Questions
