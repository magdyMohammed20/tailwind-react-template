import React from 'react'

function Footer() {
    return (
        <div className='footer p-12 bg-indigo-900'>
            <div className='container-lg'>
                <div className='flex flex-col lg:flex-row lg:border-b pb-5'>
                    <div className='lg:border-r w-32 h-16 lg:pr-10 mx-auto lg:mx-0'>
                        <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e1afe324b6c08d6d4782712_logo-white.png' />
                    </div>
                    <div className='text-center lg:pl-6 lg:text-left'>
                        <span className='text-white text-sm text-gray-400'>
                            Powerful UI Kit Template<br className='hidden lg:inline-block' />
                            for Your Business
                        </span>
                    </div>
                    <button className='mx-auto mt-6 lg:mt-0 lg:ml-auto lg:mx-0 bg-indigo-700 text-white text-sm md:text-lg font-bold px-4 rounded focus:outline-none transition ease-in-out duration-200 hover:bg-indigo-600' style={{ height: '50px' }}>View On Webflow</button>
                </div>
                <div className='footer-sections mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-4'>
                    <div className='my-3 lg:my-0'>
                        <h2 className='text-white text-2xl font-semibold'>Navigation</h2>
                        <ul className='mt-5'>
                            <li className='my-2'><a href='#' className='text-gray-300'>Home</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Services</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Pricing</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Blog</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>About</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='my-3 lg:my-0'>
                        <h2 className='text-white text-2xl font-semibold'>Templates</h2>
                        <ul className='mt-5'>
                            <li className='my-2'><a href='#' className='text-gray-300'>Style Guide</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Licenses</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Changelog</a></li>
                            <li className='my-2'><a href='#' className='text-gray-300'>Support</a></li>

                        </ul>
                    </div>
                    <div className='my-3 lg:my-0'>
                        <h2 className='text-white text-2xl font-semibold'>Other Links</h2>
                        <ul className='mt-5'>
                            <li className='my-2 text-gray-300'>
                                <i className="fa fa-envelope-o mr-2"></i>
                                webflow@template.com
                            </li>
                            <li className='my-2 text-gray-300'>
                                <i className="fa fa-phone mr-2"></i>
                                +1 (234) 567-08-91
                            </li>
                            <li className='my-2 text-gray-300'>
                                <i className="fa fa-map-o mr-2" ></i>
                                4293 Euclid Avenue, Los Angeles,CA 90012
                            </li>
                        </ul>
                    </div>
                    <div className='my-3 lg:my-0'>
                        <h2 className='text-white text-2xl font-semibold'>Subscribe</h2>
                        <input type='email' className='block mt-5 w-5/6 focus:outline-none py-2 px-3' placeholder='Your Email Address' />
                        <span className='text-gray-500 text-sm italic'>NO SPAM</span>
                        <span className='text-gray-600 text-4xl mx-1'>.</span>
                        <span className='text-gray-500 text-sm italic'>UNSUBSCRIBE ANYTIME</span>
                    </div>
                </div>

                <hr className='border-gray-600' />
                <div className='mt-6 flex flex-col lg:flex-row justify-between items-center px-2'>
                    <ul className='flex'>
                        <li><a href='#' className='text-white w-8 h-8 block text-center leading-8 transition ease-in-out duration-200 rounded hover:bg-indigo-600'><i className="fa fa-twitter"></i></a></li>
                        <li><a href='#' className='text-white w-8 h-8 block text-center leading-8 transition ease-in-out duration-200 rounded hover:bg-indigo-600'><i className="fa fa-facebook"></i></a></li>
                        <li><a href='#' className='text-white w-8 h-8 block text-center leading-8 transition ease-in-out duration-200 rounded hover:bg-indigo-600'><i className="fa fa-instagram"></i></a></li>
                        <li><a href='#' className='text-white w-8 h-8 block text-center leading-8 transition ease-in-out duration-200 rounded hover:bg-indigo-600'><i className="fa fa-pinterest-p"></i></a></li>
                        <li><a href='#' className='text-white w-8 h-8 block text-center leading-8 transition ease-in-out duration-200 rounded hover:bg-indigo-600'><i className="fa fa-youtube-play"></i></a></li>
                    </ul>
                    <div>
                        <span className='text-gray-500 text-sm italic'>© Crafted by Elastic Themes</span>
                        <span className='text-gray-600 text-4xl mx-1'>.</span>
                        <span className='text-gray-500 text-sm italic'>Powered by Webflow</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
