import Image from 'next/image';

import images from '../assets';

const Loader = () => (
  <div className="flex flex-col items-center justify-center w-full my-4">
    <Image src={images.spinner} alt="loader" width={200} objectFit="contain" />
    <p className='text-white text-3xl'>Loading...</p>
  </div>
);

export default Loader;
