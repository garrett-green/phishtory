import { getArrayOfNumbers } from '../Dropdown';
import { Fragment, h } from 'preact';
import { Dropdown } from '../';
import { StateUpdater } from 'preact/hooks';

interface SelectDayProps {
  defaultDay: number;
  setDay: StateUpdater<number>;
}

const SelectDay = ({ defaultDay, setDay }: SelectDayProps) => {
  // ** TO DO: Select number of days depending on which month is selected
  const options = getArrayOfNumbers(31);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ SelectDay ~ options', options);
  return (
    <Fragment>
      Day:
      <Dropdown
        defaultValue={defaultDay}
        name="day"
        options={options}
        setValue={setDay}
      />
    </Fragment>
  );
};

export default SelectDay;
