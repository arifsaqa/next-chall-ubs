import styled from "styled-components";
const getColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color;
};

export const AuthorCard = styled.div`
  padding: 0.5rem 1rem;
  background-color: #4ade80;
  margin: 0.5rem;
  border-radius: 10px;
  min-height: 150px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CountQuotes = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight:700;
  position: absolute;
  color: white;
  padding: 4px 9px;
  background-color: black;
  border-radius: 50%;
  top:9px;
  left:7px;
}
`;

export const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: white;
  background-color: #000;
  text-decoration: none;
  & {
    text-decoration: none;
  }
  
`;
