import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-gray-400 text-gray-800 p-3 mb-4 shadow-lg'>
      <div>Ninjas</div>
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
