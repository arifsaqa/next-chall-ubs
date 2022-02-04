import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useTogglerContext } from "../Context/TogglerContext";
import { InputContainer, InputSearch } from "./Search.styles";
import axios from "axios";
import urls from "../../constants/urls";
import Quote from "../../types/models/Quote";
import Author from "../../types/models/Author";

export default function SearchContainer() {
  const { checked } = useTogglerContext();
  const [text, setText] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [authors, setAuthors] = useState<Object>([]);
  const [loading, setLoading] = useState(true);

  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/${checked ? "authors" : "quotes"}`)
      .then((res) => {
        let dataRes = res.data;
        if (checked) {
          setAuthors(dataRes.data);
        } else {
          setQuotes(dataRes.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [value, checked]);

  return (
    <InputContainer>
      <InputSearch placeholder={`Search ${checked ? "Author" : "Quotes"}`} />
      {!loading &&
        (authors || quotes) &&
        (checked
          ? Object.entries(authors).map((item: any) => {
              let resulItem: Author = item[1];
              return <p key={resulItem.wikiUrl}>{resulItem.name}</p>;
            })
          : quotes?.map((item) => <p key={item.id}>{item.en}</p>))}
    </InputContainer>
  );
}
