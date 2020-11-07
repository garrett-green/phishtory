import { h } from 'preact';
import { useFetchPhishtory } from '../../hooks/useFetchPhishtory';
// import { useState } from 'preact/hooks';

// const today = new Date();

const Main = () => {
  /* const [month, setMonth] = useState<number>(today.getMonth());
  const [day, setDay] = useState<number>(today.getDate()); */

  const { loading, data, error } = useFetchPhishtory({});
  console.log('Main -> loading', loading);
  console.log('Main -> data', data);

  return (
    <div>
      <p>Month: month</p>
      <p>Day: day</p>
      {/* <p>Month: {month}</p>
      <p>Day: {day}</p> */}
    </div>
  );
};

export default Main;
