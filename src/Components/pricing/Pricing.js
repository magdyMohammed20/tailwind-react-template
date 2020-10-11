import React from 'react'
import Card from './Components/Card'

function Pricing() {
    const beginnerList = ['+100 Components', 'For Personal Use', 'Up To 3 Projects', 'Interactions', 'CMS Content']
    const freelancerList = ['+300 Components', 'For Commercial Use', 'Up to 10 Projects', 'Interactions', 'CMS Content']
    const teamList = ['+300 Components', 'For Commercial Use', 'Unlimited Projects', 'Interactions', 'CMS Content']
    return (
        <div className='pricing relative px-12 py-20 bg-indigo-900 lg:px-20 xl:bg-transparent'>
            <div className='wavy bg-indigo-900 absolute top-0 left-0 w-full hidden xl:block' style={{ zIndex: -1, height: '60%' }}>
                <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e130c3e6a42a449fb63c612_decor-v1.svg' className='absolute left-0' style={{ bottom: -1 }} />
            </div>
            <div className='container-lg'>
                <div className='text-center'>
                    <span className='text-white text-sm text-gray-400 font-bold'>CHOOSE YOUR PLAN</span>
                    <h2 className='text-4xl font-bold text-white mt-3 mb-5'>Affordable Pricing</h2>
                    <hr className='w-24 border-t-4 border-orange-400 mx-auto'></hr>
                    <p className='w-1/2 mx-auto text-gray-400 mt-5'>
                        Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20'>
                    <Card imgSrc={'https://i.ibb.co/ydvHFvx/beginner.png'} title={'Beginner'} list={beginnerList} price={'0'} plan={'Free For Ever'} btnText={'Sign Up Free'} />
                    <Card imgSrc={'https://i.ibb.co/dmvb6tB/hero.png'} title={'Freelancer'} list={freelancerList} price={'15'} plan={'per month, billed yearly'} btnText={'Start Trial'} />
                    <Card imgSrc={'https://i.ibb.co/vH1N97F/team.png'} title={'Team'} list={teamList} price={'35'} plan={'per month, billed yearly'} btnText={'Start Trial'} />
                </div>
            </div>
        </div>
    )
}

export default Pricing
