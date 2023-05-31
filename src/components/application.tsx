import { useState } from 'react';
import InspirationalQuote from './quote';
import Quotes from './quotes';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [count, setCount] = useState<number>(10);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes
        count={count}
        onChange={(e) => setCount(e.target.valueAsNumber)}
        onSubmit={() => fetchQuotes(count).then(setQuotes)}
      >
        {quotes.map(({ id, content, source }) => (
          <InspirationalQuote key={id} content={content} source={source} />
        ))}
      </Quotes>
    </main>
  );
};

export default Application;
