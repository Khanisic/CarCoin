import React from 'react'
import Link from 'next/link';
import images from '../assets';
import Image from 'next/dist/client/image';

function MyBookings() {
    return (
        <div className=' h-full pb-20 bg-dark-green sm:px-4 px-24 '>
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

                <p className='text-white font-semibold text-2xl '>My <span className='borderText text-dark-green hover:text-green'>bookings</span></p>

                <div className='flex justify-between mt-6 flex-wrap gap-8 flex-col'>

                    <div className='flex bg-[#F3F4FB] p-9 gap-6 rounded-twenty w-100'>
                        <div className='flex flex-col gap-4'>
                            <Image src={images.cartwo} alt='car' className='rounded-fifteen ' width={300} height={200} />
                        </div>
                        <div className='flex flex-col w-full bg-[#FCFCFC] rounded-fifteen p-4 justify-between'>
                            <div className='flex justify-between w-100'>
                                <div className=' p-2 flex flex-col justify-between '>
                                    <p className='text-base'>BMW X4</p>
                                    <p className='text-xs font-light'>2021</p>
                                    <p className='text-xs font-light'>Petrol</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>From: <span className='text-grey font-light'> 26th May 12 : 30</span> </p>
                                    <p className='font-semibold'>To: <span className='text-grey font-light'> 26th May 19:20</span></p>
                                </div>
                                <div>
                                    <div className='w-[200px] col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-fifteen border-green cursor-pointer'>
                                        <p className='text-white hover:text-white px-10 py-2'>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-base font-semibold'><span className='text-green'>8300</span>  wei/hr</p>
                                    <p className='text-base font-semibold'>Status: <span className='text-grey font-normal'>Pending</span> </p>
                                </div>
                                <div>
                                    <p className=' font-semibold'>Owner: <span className='text-grey font-light'>0x554...23bf</span> </p>
                                    <p className=' font-semibold'>Transaction ID: <span className='text-grey font-light'>0x554...23bf</span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex bg-[#F3F4FB] p-9 gap-6 rounded-twenty w-100'>
                        <div className='flex flex-col gap-4'>
                            <Image src={images.cartwo} alt='car' className='rounded-fifteen ' width={300} height={200} />
                        </div>
                        <div className='flex flex-col w-full bg-[#FCFCFC] rounded-fifteen p-4 justify-between'>
                            <div className='flex justify-between w-100'>
                                <div className=' p-2 flex flex-col justify-between '>
                                    <p className='text-base'>BMW X4</p>
                                    <p className='text-xs font-light'>2021</p>
                                    <p className='text-xs font-light'>Petrol</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>From: <span className='text-grey font-light'> 26th May 12 : 30</span> </p>
                                    <p className='font-semibold'>To: <span className='text-grey font-light'> 26th May 19:20</span></p>
                                </div>
                                <div>
                                    <div className='w-[200px] col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-fifteen border-green cursor-pointer'>
                                        <p className='text-white hover:text-white px-10 py-2'>View</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-base font-semibold'><span className='text-green'>8300</span>  wei/hr</p>
                                    <p className='text-base font-semibold'>Status: <span className='text-grey font-normal'>Pending</span> </p>
                                </div>
                                <div>
                                    <p className=' font-semibold'>Owner: <span className='text-grey font-light'>0x554...23bf</span> </p>
                                    <p className=' font-semibold'>Transaction ID: <span className='text-grey font-light'>0x554...23bf</span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default MyBookings