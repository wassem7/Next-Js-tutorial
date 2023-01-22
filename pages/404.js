import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link href='/'>
        <a>Go back to home page</a>
      </Link>
    </div>
  );
};

export default NotFound;
