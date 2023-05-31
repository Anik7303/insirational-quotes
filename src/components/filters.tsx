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
        key="content-filter"
        filterBy="content"
        value={filters.content}
        onChange={handleChange}
      />
      <Filter
        key="source-filter"
        filterBy="source"
        value={filters.source}
        onChange={handleChange}
      />
    </section>
  );
};

export default QuoteFilter;
