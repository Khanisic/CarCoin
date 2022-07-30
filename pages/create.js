import Image from 'next/image'
import React from 'react'
import images from '../assets'
import Link from 'next/link';

function create() {
    return (
        <div className='w-100 h-screen pb-20 bg-dark-green sm:px-4 px-24 '>
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

                <p className='text-white font-semibold text-2xl '>Enter your Car/ Create your <span className='borderText text-dark-green hover:text-green'>NFT</span></p>


                <div className='flex justify-between'>

                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-4 mt-3'>
                            <div>
                                <label className='ml-2 text-sm text-white'>Car Name</label>
                                <input className='text-sm inputField bg-white  h-[35px] rounded-fifteen pl-4 pr-2'></input>
                            </div>
                            <div>
                                <label className='ml-2 text-sm text-white'>Rate/ hr</label>
                                <input className='text-sm inputField bg-white h-[35px] rounded-fifteen pl-4 pr-2'></input>
                            </div>
                            <div>
                                <label className='text-sm text-white'>Year/ Model</label>
                                <input className='text-sm inputField bg-white h-[35px] rounded-fifteen pl-4 pr-2'></input>
                            </div>
                            <div>
                                <label className='ml-2 text-sm text-white'>Fuel</label>
                                <div className=' h-[35px] border flex justify-center bg-white items-center rounded-twenty cursor-pointer'>
                                    <p className='text-grey hover:text-dark-green text-sm  px-12 py-1'>Petrol</p>
                                    <Image src={images.down} objectFit="contain" alt="search" className='' />
                                </div>

                            </div>

                        </div>
                        <div></div>
                    </div>

                    <div className='flex flex-col items-center gap-10'>

                        <div className='border-green border-dashed border-2 rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center py-10 px-[100px] cursor-pointer'>
                            <p className='text-grey text-center'>JPG, PNG, JPEG, SVG</p>
                            <p className='text-grey text-center mb-4'>Maximum size: 100mb</p>
                            <Image objectFit="contain" className='' alt="search" src={images.upload} />
                            <p className='text-grey text-center mt-4'>Drag and Drop your image</p>
                            <p className='text-grey text-center'>or browse media on your device</p>
                        </div>

                        <div className='w-[200px] col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-fifteen border-green cursor-pointer'>

                            <p className='text-white hover:text-white px-10 py-2'>Create</p>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default create