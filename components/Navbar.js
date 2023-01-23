import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-gray-100 text-gray-800 p-3 mb-4 shadow-lg'>
      <Image src='/logo.png' width={128} height={77} />
      <div className='flex space-x-4'>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/about'>
          <a>About</a>
        </Link>

        <Link href='/ninjas'>
          <a>Ninjas Listing</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
