import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);
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
