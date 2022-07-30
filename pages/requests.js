import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import images from '../assets';
function Requests() {
    return (
        <div className='w-100 h-full pb-20 bg-dark-green sm:px-4 px-24 '>
            <div className='w-100 flex justify-between pt-12'>
                <div className='border flex justify-center hover:bg-green items-center rounded-twenty border-green cursor-pointer'>
                    <Link href={{ pathname: '/' }}>
                        <p className='text-white hover:text-dark-green  px-12 py-2'>Back</p>
                    </Link>
                </div>
                <div className=''>
                    <h4 className='text-white text-4xl font-semibold '>Car <span className='text-dark-green borderText hover:text-green '>Coin</span></h4>
                </div>
                <div className=''>
                </div>
            </div>

            <div className='border border-green rounded-twenty mt-16 py-12 px-12'>

                <p className='text-white font-semibold text-2xl '>My <span className='borderText text-dark-green hover:text-green'>requests</span></p>

                <div className='flex mt-6 flex-wrap gap-8'>

                    <div className='flex bg-[#F3F4FB] p-9 gap-6 rounded-twenty'>
                        <div className='flex flex-col gap-4'>
                            <Image src={images.cartwo} alt='car' className='rounded-fifteen ' />
                            <Link href={{ pathname: '/requests' }}>
                                <div className='w-[200px] col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-fifteen border-green cursor-pointer'>
                                    <p className='text-white hover:text-white px-10 py-2'>View requests</p>
                                </div>
                            </Link>
                        </div>
                        <div className='bg-[#FCFCFC] p-2 flex flex-col justify-between rounded-fifteen'>
                            <p className='text-base'>BMW X4</p>
                            <p className='text-xs font-light'>2021</p>
                            <p className='text-xs font-light'>Petrol</p>
                            <p className='text-xs font-semibold'><span className='text-green'>8300</span>  wei/hr</p>
                            <p className='mt-5 text-base font-normal'>Requests: <span className='text-grey font-normal'>6</span></p>
                            <p className='text-base font-normal'>Status: <span className='text-grey font-normal'>Available</span> </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-evenly w-full gap-6'>
                        <div className='flex items-center justify-between gap-4'>
                            <div className='rounded-full flex justify-center items-center bg-green w-8 h-8'>
                                <p className='text-white'>01.</p>
                            </div>
                            <div className='flex bg-white rounded-twenty justify-between px-4 py-2 gap-9'>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>Address:</p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>From: </p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>To: </p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>Total: </p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                            </div>
                            <div className='w-[150px] col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-fifteen border-green cursor-pointer'>
                                <p className='text-white hover:text-white px-10 py-2'>Approve</p>
                            </div>
                            <div className='w-[150px] col-span-1 border flex justify-center hover:bg-dark-green  bg-[#AD1717] items-center rounded-fifteen border-[#AD1717] cursor-pointer'>
                                <p className='text-white hover:text-white px-10 py-2'>Reject</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-4'>
                            <div className='rounded-full flex justify-center items-center bg-green w-8 h-8'>
                                <p className='text-white'>01.</p>
                            </div>
                            <div className='flex bg-white rounded-twenty justify-between px-4 py-2 gap-9'>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>Address:</p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>From: </p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>To: </p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                                <div className='flex  flex-col'>
                                    <p className='text-green font-semibold'>Total: </p>
                                    <p className=''>0xd667...89sh8</p>
                                </div>
                            </div>
                            <div className='w-[150px] col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-fifteen border-green cursor-pointer'>
                                <p className='text-white hover:text-white px-10 py-2'>Approve</p>
                            </div>
                            <div className='w-[150px] col-span-1 border flex justify-center hover:bg-dark-green  bg-[#AD1717] items-center rounded-fifteen border-[#AD1717] cursor-pointer'>
                                <p className='text-white hover:text-white px-10 py-2'>Reject</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Requests