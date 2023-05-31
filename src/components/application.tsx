import { useState } from 'react';
import InspirationalQuote from './quote';
import Quotes from './quotes';

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        {quotes.map(({ id, content, source }) => (
          <InspirationalQuote key={id} content={content} source={source} />
        ))}
      </Quotes>
    </main>
  );
};

export default Application;
