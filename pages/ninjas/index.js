export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const allninjas = ({ ninjas }) => {
  return (
    <div>
      <h1 className='text-6xl'>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a>
            <h3 className='font-bold text-lg'> {ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default allninjas;
