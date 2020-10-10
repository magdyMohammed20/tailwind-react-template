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
                                <h2 className='font-bold my-3'>
                                    What makes flyers unrivaled
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320d7b966d96b1f82df33_avatar-04.jpg'} />
                                    <span className='italic text-gray-500'>Olivia Murphy</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c4705541e2b506db86b_tobias-nii-kwatei-quartey-KiSxX5iEQi4-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='font-bold my-3'>
                                    Compare prices find the best accessories
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320de0125d444a4c512f6_avatar-02.jpg'} />
                                    <span className='italic text-gray-500'>Tracy Jackson</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c5d2e290c1320c786d6_tanya-patrikeyeva-423820-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='font-bold my-3'>
                                    Always look on the bright side of life
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320e70125d4807dc51309_avatar-03.jpg'} />
                                    <span className='italic text-gray-500'>Mason Edwards</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c7d0125d47a00c4f925_balazs-ketyi-sScmok4Iq1o-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='font-bold my-3'>
                                    Discover your path to success
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320d7b966d96b1f82df33_avatar-04.jpg'} />
                                    <span className='italic text-gray-500'>Olivia Murphy</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231c8e05541e94cf6dba8d_cameron-sanborn-pqf0dRkIdKs-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='font-bold my-3'>
                                    How to write better advertising copy
                                </h2>
                                <div className='post-person flex items-center'>
                                    <img className='rounded-full mr-2' src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e2320cbdaefb8b51d4b34bc_avatar-01.jpg'} />
                                    <span className='italic text-gray-500'>Magdy Mohammed</span>
                                </div>
                            </div>
                        </div>

                        <div className='lg:p-2 xl:p-3'>
                            <img src={'https://assets.website-files.com/5e09f044743608599de6e15c/5e231dd6945b290b7c552649_you-x-ventures-LR5CYw3AQNo-unsplash-thumb.jpg'} className='mx-auto mainImage' />

                            <div className='mt-5 p-4'>
                                Sep 15, 2019 IN MARKETING
                                <h2 className='font-bold my-3'>
                                    How to write better advertising copy
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
