import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import Filter from './filter';

type QuoteFilterProps = {
  filters: QuoteFilters;
  setFilters: Dispatch<SetStateAction<QuoteFilters>>;
};

const QuoteFilter = ({ filters, setFilters }: QuoteFilterProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilters((filters) => ({
      ...filters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="flex gap-4">
      <Filter
        filterBy="content"
        value={filters.content}
        onChange={handleChange}
      />
      <Filter
        filterBy="source"
        value={filters.source}
        onChange={handleChange}
      />
    </section>
  );
};

export default QuoteFilter;
