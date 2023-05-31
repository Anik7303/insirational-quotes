import { ChangeEventHandler } from 'react';

type FilterProps = {
  filterBy: 'content' | 'source';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Filter = ({ filterBy, value, onChange }: FilterProps) => {
  const text = `Filter by ${filterBy}`;
  const id = `${filterBy}-filter`;

  return (
    <label htmlFor={id}>
      {text}
      <input
        id={id}
        name={filterBy}
        value={value}
        onChange={onChange}
        placeholder={text}
      />
    </label>
  );
};

export default Filter;
