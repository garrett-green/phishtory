import { h } from 'preact';
import { useFetchPhishtory } from '../../hooks/useFetchPhishtory';
import ShowCard from '../ShowCard';

const Main = () => {
  const { loading, data, error } = useFetchPhishtory({});

  if (loading) {
    return <div>Still waiting...</div>;
  }

  if (error) {
    window.location.reload();
  }

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
