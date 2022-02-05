import styled from "styled-components";

const defaultColor = () => {
  return {
    default: "#fff",
    defaultTextColor: "#222222",
    defaultSecondaryTextColor: "#eee",
  };
};

export const QuoteCard = styled.blockquote`
  background: ${defaultColor().defaultSecondaryTextColor};
  color: ${defaultColor().defaultTextColor};

  padding: 20px;
  padding-left: 50px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(#000, 0.12);
  border-radius:10px;

  position: relative;
  overflow: hidden;
  min-height: 120px;
  p {
    font-size: 22px;
    line-height: 1.5;
    margin: 0;
    max-width: 80%;
  }

  cite {
    font-size: 16px;
    margin-top: 10px;
    display: block;
    font-weight: 200;
    opacity: 0.8;
  }

  &:before {
    font-family: Georgia, serif;
    content: "“";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 5em;
    color: rgba(${defaultColor().defaultSecondaryTextColor}, 0.8);
    font-weight: normal;
  }

  &:after {
    font-family: Georgia, serif;
    content: "”";
    position: absolute;
    bottom: -110px;
    line-height: 100px;
    right: -32px;
    font-size: 25em;
    color: rgba(${defaultColor().defaultSecondaryTextColor}, 0.8);
    font-weight: normal;
  }

  @media (max-width: 640px) {
    &:after {
      font-size: 22em;
      right: -25px;
    }
  }
`;
