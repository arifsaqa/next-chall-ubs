import Quote from "./Quote";

export default interface Author {
  name: string;
  wikiUrl: string;
  quotes: Quote[];
  quoteCount: number;
}
