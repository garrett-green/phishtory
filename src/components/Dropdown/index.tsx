import { h } from 'preact';
import { StateUpdater } from 'preact/hooks';

export const getArrayOfNumbers = (
  endNumber: number,
  startWithOne: boolean = true
) => {
  let result = [];
  for (let i = startWithOne ? 1 : 0; i <= endNumber; i++) {
    result.push(i);
  }
  return result;
};

interface DropdownProps {
  defaultValue: number;
  name: string;
  options: number[];
  setValue: StateUpdater<number>;
}

const Dropdown = ({ defaultValue, name, options, setValue }: DropdownProps) => {
  return (
    <select
      name={name}
      onChange={({ target: { value } }: any) => setValue(value as number)}
      value={defaultValue}
    >
      {options.map((value) => (
        <option selected={value === defaultValue} key={value} value={value}>
          {value.toString()}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
