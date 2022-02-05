import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useTogglerContext } from "../Context/TogglerContext";
import { InputContainer, InputSearch } from "./Search.styles";
import axios from "axios";
import Quote from "../../types/models/Quote";
import Author from "../../types/models/Author";
import RenderQuote from "../Quote/Quote";
import RenderAuthor from "../Author/RenderAuthor";

export default function SearchContainer() {
  const { checked } = useTogglerContext();
  const [searchInput, setSearchInput] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [authors, setAuthors] = useState<Object>([]);
  const [loading, setLoading] = useState(true);

  const searchData = () => {
    if (checked) {
      return Object.values(authors).filter((author: Author) => {
        return author.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    } else {
      return quotes.filter((quote) => {
        return quote.en.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
  };
  const renderMain = () => {
    if (checked) {
      return <RenderAuthor datas={searchInput.length > 0 ? searchData() : authors} />;
    } else {
      return (
        <RenderQuote datas={searchInput.length > 0 ? searchData() : quotes} />
      );
    }
  };

  const getData = async () => {
    setLoading(true);
    const result = await axios.get(`/api/${checked ? "authors" : "quotes"}`);
    if (result.status == 200) {
      checked ? setAuthors(result.data.data) : setQuotes(result.data.data);
    }
    setLoading(false);
    return result.data;
  };
  useEffect(() => {
    getData();
  }, [checked]);

  return (
    <InputContainer>
      <InputSearch
        placeholder={`Search ${checked ? "Author" : "Quotes"}`}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {loading ? <>loading</> : renderMain()}
    </InputContainer>
  );
}
