import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
export default function Home() {
  return (
    //Global container
    <div className=' text-gray-800 flex-1'>
      <h1 className='text-6xl'>HomePage</h1>
      <p className='text-3xl mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aut soluta ut tempora totam unde impedit ullam
        repellendus a atque.
      </p>

      <Link href='/ninjas'>
        <a className='mb-3'>See all listings</a>
      </Link>
    </div>
  );
}
