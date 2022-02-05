import Link from 'next/link';
import React, { useEffect } from 'react';
import AuthorType from '../../types/models/Author';
import { DataContainer } from '../Container/Container.styles';
import QuoteIcon from '../Icons/Quote';
import { AuthorCard, CountQuotes, StyledLink } from './Author.styles';

export default function RenderAuthor(props: { datas: Object }) {
  const { datas } = props;
  return <DataContainer row>
    {
      Object.values(datas).map((data: AuthorType) => {
       
        return (
          <AuthorCard key={data.wikiUrl}>
            <div className="header">{data.name}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <div
                style={{ position: "relative" }}
                title="Author's Quotes Count"
              >
                <QuoteIcon color={"#000"} size="40" absolute />
                <CountQuotes>{data.quoteCount}</CountQuotes>
              </div>
              <Link href={data.wikiUrl}>
                <StyledLink
                  href={data.wikiUrl}
                  target={"_blank"}
                  title="Know more about The Auhtor"
                >
                  W
                </StyledLink>
              </Link>
            </div>
          </AuthorCard>
        );
      })
    }
  </DataContainer>;
}
