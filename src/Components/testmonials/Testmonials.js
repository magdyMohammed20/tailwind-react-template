import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testmonials.css'
import circle from '../../images/circle.png'
import aven from '../../images/aven.png'
import earth from '../../images/earth.png'
import idea from '../../images/ideaa.png'
import zooTv from '../../images/zooTv.png'
import codeLab from '../../images/codeLab.png'

function Testmonials() {
    return (

        <div className='testmonials p-12 hidden lg:block'>

            <div className='container-lg' >
                <div className='title text-center mb-8'>
                    <span className='uppercase text-sm text-gray-600'>Testmonials</span>
                    <h1 className='text-3xl font-bold mt-4'>What Our Clients Say</h1>
                </div>
                <div className='p-16'>
                    <OwlCarousel items={3} className="owl-theme" loop nav margin={8} >

                        <div className='lg:p-2 xl:p-8 border'>
                            <img src={circle} className='w-1/2 mx-auto' />
                            <p className='text-center mt-5 text-gray-700'>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must consumers to take action.
                            </p>
                            <div className='review flex justify-center mt-5'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-8 border'>
                            <img src={earth} className='w-1/2 mx-auto' />
                            <p className='text-center mt-5 text-gray-700'>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must consumers to take action.
                            </p>
                            <div className='review flex justify-center mt-5'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-8 border'>
                            <img src={idea} className='w-1/2 mx-auto' />
                            <p className='text-center mt-5 text-gray-700'>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must consumers to take action.
                            </p>
                            <div className='review flex justify-center mt-5'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-8 border'>
                            <img src={zooTv} className='w-1/2 mx-auto' />
                            <p className='text-center mt-5 text-gray-700'>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must consumers to take action.
                            </p>
                            <div className='review flex justify-center mt-5'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-8 border'>
                            <img src={codeLab} className='w-1/2 mx-auto' />
                            <p className='text-center mt-5 text-gray-700'>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must consumers to take action.
                            </p>
                            <div className='review flex justify-center mt-5'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-8 border'>
                            <img src={aven} className='w-1/2 mx-auto' />
                            <p className='text-center mt-5 text-gray-700'>
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must consumers to take action.
                            </p>
                            <div className='review flex justify-center mt-5'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        </div>
    )
}

export default Testmonials
