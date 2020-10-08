import React from 'react'
import webFlow from '../../images/webflow.png'
import webFlow1 from '../../images/webflow1.svg'
import webFlow2 from '../../images/webflow2.svg'
import webFlow3 from '../../images/webflow3.svg'
import webFlow4 from '../../images/webflow4.svg'
import Card from './Components/Card'

function Webflow() {
    return (
        <div className='webflow p-8'>
            <div className='container-lg flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <img src={webFlow} className='w-full h-full' />
                </div>
                <div className='w-full lg:w-1/2 px-12'>
                    <span className='mt-16 mb-8 block text-gray-600 text-sm'>STUNNING TEMPLATE</span>
                    <h5 className='text-4xl font-bold leading-snug pr-16'>
                        Build Your Website with Jules UI Kit Template
                    </h5>
                    <p className='my-4 text-gray-600'>
                        A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers.
                    </p>
                    <div className='mt-8'>
                        <button className='focus:outline-none py-3 px-8 bg-orange-400 rounded text-white  font-medium transition duration-200 ease-in-out hover:bg-orange-600'>Buy Template</button>
                    </div>
                </div>
            </div>
            <div className='w-3/5 mx-auto text-center py-12'>
                <span className='p-1 text-white bg-orange-400 rounded font-medium'>ELASTIC THEMES</span>
                <p className='text-xl mt-8 leading-7'>
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
                </p>
            </div>
            <div className='container-lg px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <Card img={webFlow2} title='100% Responsive' text='The template is fully responsive, so it looks great on all devices: desktop, tablets and mobile phones.' />
                <Card img={webFlow3} title='CMS Content' text='Use the power of Webflow CMS to add new blog posts, categories and tags. The whole structure is ready.' />
                <Card img={webFlow4} title='Powerful UI Kit' text='There are many useful sections that you can copy/paste from one page to another to create new layouts.' />
                <Card img={webFlow1} title='Friendly Support' text='Feel free to contact us if you have any questions or suggestions about the template. Were always glad to help.' />
            </div>
        </div>
    )
}

export default Webflow
