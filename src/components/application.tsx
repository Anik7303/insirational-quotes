import { useMemo, useState } from 'react';

import InspirationalQuote from './quote';
import Quotes from './quotes';
import QuoteFilter from './filters';
import { filterQuotes } from '../lib/filter-quotes';

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filters, setFilters] = useState<QuoteFilters>({
    content: '',
    source: '',
  });

  const visibleQuotes = useMemo(
    () => filterQuotes(quotes, filters),
    [quotes, filters],
  );

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        <QuoteFilter filters={filters} setFilters={setFilters} />
        <div className="grid grid-cols-2 gap-4">
          {visibleQuotes.map(({ id, content, source }) => (
            <InspirationalQuote key={id} content={content} source={source} />
          ))}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
