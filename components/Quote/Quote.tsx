import React, { useEffect } from "react";
import QuoteType from "../../types/models/Quote";
import { DataContainer } from "../Container/Container.styles";
import { QuoteCard } from "./Quote.style";

export default function RenderQuote(props: { datas: QuoteType[] }) {
  const { datas } = props;
  return (
    <DataContainer row={false}>
      {datas.map((item) => {
        return (
          <QuoteCard key={item.id}>
            <p>{item.en}</p>
            <cite>{item.author}</cite>
          </QuoteCard>
        );
      })}
    </DataContainer>
  );
}
