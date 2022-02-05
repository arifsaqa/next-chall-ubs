import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import RefreshIcon from "../../components/Icons/Refresh";
import Head from "next/head";
import { QuoteCard } from "../../components/Quote/Quote.style";
import {GenerateButton} from "../../components/Toogles/GenerateButton";
import QuoteType from "../../types/models/Quote";

export default function random() {
  const [quote, setQuote] = useState<QuoteType>();
  const [loading, setLoading] = useState(true);
  const getRandomQuote = async () => {
    setLoading(true);
    const result = await axios.get(`/api/random_quotes`);
    setQuote(result.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <>
      <Head>
        <title>Generate Random Quote</title>
      </Head>

      <Container>
        <h1>Programming Quotes</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GenerateButton onClick={() => getRandomQuote()} loading={loading?"true":"false"}>
            <span>Generate</span> <RefreshIcon loading={loading} />
          </GenerateButton>
        </div>
        <QuoteCard>
          {loading ? (
            "Getting random quote ... "
          ) : (
            <>
              <p>{quote!.en}</p>
              <cite>{quote!.author}</cite>
            </>
          )}
        </QuoteCard>
      </Container>
    </>
  );
}
