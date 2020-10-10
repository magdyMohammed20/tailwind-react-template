import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './posts.css'
function Posts() {
    return (
        <div className='bg-gray-300 p-16'>
            <div className='container-lg flex'>
                <div className='w-full lg:w-1/3 text-center lg:text-left'>
                    <span className='uppercase text-gray-700'>recent posts</span>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-8 leading-snug'>
                        Learn More About The Template
                    </h1>
                    <button className='bg-orange-400 text-white font-bold px-6 py-3 rounded transition ease-in-out duration-200 hover:bg-orange-600 focus:outline-none'>
                        View All Posts
                    </button>
                </div>

                <div className='w-2/3 hidden lg:block'>
                    <OwlCarousel items={2} className="owl-theme" loop nav margin={8} >

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c2e0125d4bf3cc4f65f_new-data-services-UO-QYR28hS0-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='text-xl font-bold my-3'>
                                    3 simple tips for using Webflow templates
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c2e0125d4bf3cc4f65f_new-data-services-UO-QYR28hS0-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='text-xl font-bold my-3'>
                                    3 simple tips for using Webflow templates
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c2e0125d4bf3cc4f65f_new-data-services-UO-QYR28hS0-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='text-xl font-bold my-3'>
                                    3 simple tips for using Webflow templates
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c2e0125d4bf3cc4f65f_new-data-services-UO-QYR28hS0-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='text-xl font-bold my-3'>
                                    3 simple tips for using Webflow templates
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c2e0125d4bf3cc4f65f_new-data-services-UO-QYR28hS0-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='text-xl font-bold my-3'>
                                    3 simple tips for using Webflow templates
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c2e0125d4bf3cc4f65f_new-data-services-UO-QYR28hS0-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='text-xl font-bold my-3'>
                                    3 simple tips for using Webflow templates
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Posts
