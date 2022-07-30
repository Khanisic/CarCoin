import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import images from '../assets'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

function CarDetails() {

    const [isLoading, setIsLoading] = useState(true)
    const [carDetails, setCarDetails] = useState([])

    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        setCarDetails(router.query);
        setIsLoading(false);
    }, [router.isReady]);



    return (
        <div className='w-100 h-100 bg-dark-green sm:px-4 px-24 pb-6'>
            <div className='w-100 flex justify-between pt-12'>
                <div className='border flex justify-center hover:bg-green items-center rounded-twenty border-green cursor-pointer '>
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

            <div className='border border-green rounded-twenty mt-16 py-12 px-12 mb-5'>

                <p className='text-white font-semibold text-2xl mb-6'>Book your Car/ <span className='borderText text-dark-green hover:text-green'>NFT</span></p>


                {
                    isLoading ?
                        <Loader /> :
                        <div className='flex justify-between'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <p className='text-white'>Car owner: <span className='text-grey'>0x617...012D</span></p>
                                    <p className='text-white'>{carDetails.name}</p>
                                    <p className='text-white'>{carDetails.model}</p>
                                    <p className='text-white'>{carDetails.fuel}</p>
                                    <p className='text-white'><span className='text-green'>{carDetails.price}</span> wei/hr</p>
                                </div>
                                <div className='flex flex-col items-center mt-5'>

                                    <div className='flex justify-start gap-4'>
                                        <div>
                                            <label className='ml-2 text-sm text-white'>From date</label>
                                            <input type='date' className='pl-6 pr-4 text-sm inputField bg-white h-[35px] rounded-tr-3xl rounded-bl-3xl'></input>
                                        </div>
                                        <div>
                                            <label className='ml-2 text-sm text-white'>To date</label>
                                            <input type='date' className='pl-6 pr-4 text-sm inputField bg-white  h-[35px] rounded-tr-3xl rounded-bl-3xl'></input>
                                        </div>
                                    </div>

                                    <div className='flex justify-between gap-4'>
                                        <div>
                                            <label className='ml-2 text-sm text-white'>From time</label>
                                            <input type='time' className='pl-6 pr-2 text-sm inputField bg-white  h-[35px] rounded-tr-3xl rounded-bl-3xl'></input>
                                        </div>
                                        <div>
                                            <label className='ml-2 text-sm text-white'>To time</label>
                                            <input type='time' className='pl-6 pr-2 text-sm inputField bg-white  h-[35px] rounded-tr-3xl rounded-bl-3xl'></input>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col items-end'>
                                <Image src={images.carfour} alt='car' className='rounded-fifteen' width={400} height={200} />

                                <div className='flex flex-col items-end mt-5'>
                                    <p className='text-white'>Rent amount <span className='text-green'>69300</span></p>
                                    <p className='text-white'>Advance <span className='text-green'>33300</span></p>
                                    <p className='text-white'>*Booking charges <span className='text-green'>300</span></p>

                                    <p className='text-white mt-6'>Total amount <span className='text-green'>300</span></p>
                                </div>

                                <div className='w-[200px] col-span-1 border flex justify-center hover:bg-dark-green mt-6  bg-green items-center rounded-fifteen border-green cursor-pointer'>
                                    <p className='text-white hover:text-white px-10 py-2'>Create</p>
                                </div>
                            </div>



                        </div>
                }




            </div>
        </div>
    )
}

export default CarDetails