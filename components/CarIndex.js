import React from 'react'
import Image from 'next/dist/client/image';
import Link from 'next/link';

function CarIndex({car}) {

    return (
        <Link href={{ pathname: '/car-details', query : car}}>

        <div className='w-[250px] bg-[#FCFCFE] rounded-fifteen cursor-pointer'>
            <Image alt='car-image' src={car.image} height={140} />
            <div className='flex justify-between px-3 mb-5'>
                <div>
                    <p className='text-dark-green'>{car.name}</p>
                    <div className='flex justify-between'>
                        <p>{car.model}</p>
                        <p>{car.fuel}</p>
                    </div>
                </div>
                <div>
                    <p className='text-green'>{car.price} <span className='text-dark-green'>wei/hr</span></p>
                </div>
            </div>
            <div className='flex justify-between px-3 mb-4'>
                <p className='text-dark-green'>{car.status}</p>
                <p className='text-green cursor-pointer'>Book Now</p>
            </div>
        </div>
        </Link>
    )
}

export default CarIndex