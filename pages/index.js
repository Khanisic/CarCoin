import images from '../assets';
import Image from 'next/dist/client/image';
import CarIndex from '../components/CarIndex';
import Link from 'next/link';

export default function Home() {

  const carDetails = [
    {
      name: 'Nissan Sunny',
      model: '2006',
      fuel: 'Petrol',
      price: '300',
      status: 'Available',
      image: images.carone
    },
    {
      name: 'Toyota Camry',
      model: '2016',
      fuel: 'Petrol',
      price: '390',
      status: 'Unavailable',
      image: images.cartwo
    },
    {
      name: 'BMW X4',
      model: '2022',
      fuel: 'Diesel',
      price: '6500',
      status: 'Available',
      image: images.carthree
    },
    {
      name: 'Toyota Fortuner',
      model: '2011',
      fuel: 'Petrol',
      price: '1200',
      status: 'Available',
      image: images.carfour
    }
  ]

  return (
    <div className='w-100 h-100 pb-20 bg-dark-green sm:px-4 px-24 '>

      <div className='w-100 flex justify-between pt-12'>
        <div className=''>
        </div>
        <div className=''>
          <h4 className='text-white text-4xl font-semibold '>Car <span className='text-dark-green borderText hover:text-green '>Coin</span></h4>
        </div>
        <div className='border flex justify-center hover:bg-green items-center rounded-twenty border-green cursor-pointer'>
          <p className='text-white hover:text-dark-green  px-12 py-2'>Connect</p>
        </div>
      </div>

      <div className='w-100 flex justify-between pt-4'>
        <div>
          <p className='text-white'>A Decentralise car rental application leveraging the power of ERC 4907 </p>
        </div>
        <div className='flex gap-8'>
        <Link href={{ pathname: '/my-cars'}}>
          <p className='text-green hover:underline-offset-8 underline-offset-4 decoration-white underline cursor-pointer'>My Cars</p>

        </Link>
          <p className='text-green hover:underline-offset-8 underline-offset-4 decoration-white underline cursor-pointer'>Recent Transactions</p>
        </div>
      </div>

      <div className='w-100 flex justify-between mt-4 items-center'>
        <div>
          <h2 className='text-white text-4xl font-extrabold leading-normal'>Rent your cars <br /> through <br /> <span className='borderText hover:text-green text-dark-green'>Crypto</span></h2>
        </div>

        <div className='flex flex-col justify-center items-center gap-6 mt-8'>
          <div className='w-[250px] border flex justify-center hover:bg-green items-center rounded-twenty border-green cursor-pointer relative'>
            <p className='text-white hover:text-dark-green  px-12 py-2'> <span className='absolute left-4'>01.</span>  Enter your car</p>
          </div>
          <div className='w-[250px] border flex justify-center hover:bg-green items-center rounded-twenty border-green cursor-pointer relative'>
            <p className='text-white hover:text-dark-green  px-12 py-2'><span className='absolute left-4'>02.</span> Create an NFT</p>
          </div>
          <div className='w-[250px] border flex justify-center hover:bg-green items-center rounded-twenty border-green cursor-pointer relative'>
            <p className='text-white hover:text-dark-green  px-12 py-2'><span className='absolute left-4'>03.</span> Rent it out</p>
          </div>
        </div>
      </div>

      <div className=' col-span-1 grid grid-cols-9 gap-4 mt-4 '>
        <div className='col-span-1 border flex justify-center hover:bg-dark-green  bg-green items-center rounded-twenty border-green cursor-pointer'>
          <Link href={{ pathname: '/create' }}>
            <p className='text-white hover:text-white px-12 py-2'>Create</p>
          </Link>
        </div>
        <div className=' col-span-6 flex pl-6 bg-white rounded-twenty'>
          <Image src={images.search} objectFit="contain" alt="search" className='' />
          <input placeholder='Search car here ' className='inputField bg-white rounded-twenty px-6'></input>
        </div>
        <div className=' col-span-2 border flex justify-center bg-white items-center rounded-twenty cursor-pointer'>
          <p className='text-grey hover:text-dark-green  px-12 py-2'>Recently Added</p>
          <Image src={images.down} objectFit="contain" alt="search" className='' />
        </div>
      </div>

      <div className='bg-white w-100 rounded-twenty mt-4 flex justify-evenly py-4 flex-wrap gap-6'>
        {
          carDetails.map((car, index) => 
                <CarIndex car={car}  key={index} />
          )
        }

      </div>
    </div>
  )
}
