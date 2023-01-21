import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    //Global container
    <div className=' text-gray-800 flex-1'>
      <Navbar />
      <h1 className='text-6xl'>HomePage</h1>
      <p className='text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aut soluta ut tempora totam unde impedit ullam
        repellendus a atque.
      </p>
      <Footer />
    </div>
  );
}
