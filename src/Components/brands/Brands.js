import React from 'react';
import brand1 from '../../images/aven.png'
import brand2 from '../../images/earth.png'
import brand3 from '../../images/ideaa.png'
import brand4 from '../../images/zooTv.png'
import brand5 from '../../images/codeLab.png'
import brand6 from '../../images/circle.png'

function Brands() {
    return (
        <div className="brands">
            <div className='container-lg flex flex-wrap lg:flex-row items-center px-16'>
                <div className='w-1/2 md:w-1/6 p-8 lg:p-12'>
                    <img src={brand1} className='w-full' />
                </div>
                <div className='w-1/2 md:w-1/6 p-8 lg:p-12'>
                    <img src={brand2} className='w-full' />
                </div>
                <div className='w-1/2 md:w-1/6 p-8 lg:p-12'>
                    <img src={brand3} className='w-full' />
                </div>
                <div className='w-1/2 md:w-1/6 p-8 lg:p-12'>
                    <img src={brand4} className='w-full' />
                </div>
                <div className='w-1/2 md:w-1/6 p-8 lg:p-12'>
                    <img src={brand5} className='w-full' />
                </div>
                <div className='w-1/2 md:w-1/6 p-8 lg:p-12'>
                    <img src={brand6} className='w-full' />
                </div>
            </div>
        </div>
    );
}

export default Brands;
