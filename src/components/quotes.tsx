import {
  Dispatch,
  FormEventHandler,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

import { fetchQuotes } from '../lib/fetch-quotes';

type QuotesProps = {
  setQuotes: Dispatch<SetStateAction<Quote[]>>;
};

const Quotes = ({ children, setQuotes }: PropsWithChildren<QuotesProps>) => {
  const [count, setCount] = useState<number>(10);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetchQuotes(count).then(setQuotes);
  };

  return (
    <section className="flex flex-col gap-8">
      <form onSubmit={handleSubmit}>
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="2"
            max="25"
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      {children}
    </section>
  );
};

export default Quotes;
