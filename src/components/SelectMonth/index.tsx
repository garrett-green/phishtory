import { getArrayOfNumbers } from '../Dropdown';
import { Fragment, h } from 'preact';
import { Dropdown } from '../';
import { StateUpdater } from 'preact/hooks';

interface SelectMonthProps {
  defaultMonth: number;
  setMonth: StateUpdater<number>;
}

const SelectMonth = ({ defaultMonth, setMonth }: SelectMonthProps) => {
  const options = getArrayOfNumbers(12);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ SelectMonth ~ options', options);
  return (
    <Fragment>
      Month:
      <Dropdown
        defaultValue={defaultMonth}
        name="month"
        options={options}
        setValue={setMonth}
      />
    </Fragment>
  );
};

export default SelectMonth;
