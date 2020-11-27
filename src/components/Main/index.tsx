import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import { SelectDay, SelectMonth, ShowCard } from '../';
import { useFetchPhishtory } from '../../hooks/useFetchPhishtory';

const today = new Date();

const Main = () => {
  const [retried, setRetryStatus] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(today.getMonth() + 1);
  const [day, setDay] = useState<number>(today.getDate());
  const { loading, data, error } = useFetchPhishtory({ day, month });

  if (loading) {
    return <div>Still waiting...</div>;
  }

  if (error && !retried) {
    setRetryStatus(true);
    window.location.reload();
  }

  return (
    <main>
      <Fragment>
        <SelectMonth defaultMonth={month} setMonth={setMonth} />
        <SelectDay defaultDay={day} setDay={setDay} />
      </Fragment>
      {!loading && !error ? (
        <div class="flex-grid">
          {data.map((show, idx) => (
            <ShowCard show={show} key={idx} />
          ))}
        </div>
      ) : error ? (
        window.location.reload()
      ) : (
        <div>Still waiting...</div>
      )}
    </main>
  );
};

export default Main;
