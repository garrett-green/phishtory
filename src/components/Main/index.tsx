import { h, Fragment } from 'preact';
import { useFetchPhishtory } from '../../hooks/useFetchPhishtory';
import ShowCard from '../ShowCard';
// import { useState } from 'preact/hooks';

/* const [month, setMonth] = useState<number>(today.getMonth());
const [day, setDay] = useState<number>(today.getDate()); */

const Main = () => {
  const { loading, data, error } = useFetchPhishtory({});
  console.log('Main -> error', error);

  if (loading || data.length < 1) {
    return <div>Still waiting...</div>;
  }

  /*
  style={{
          display: 'flex',
          flexGrow: 1,
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignContent: 'stretch',
        }}
  */

  return (
    <main>
      <div class="flex-grid">
        {data.map((show, idx) => (
          <ShowCard show={show} key={idx} />
        ))}
      </div>
    </main>
  );
};

export default Main;
