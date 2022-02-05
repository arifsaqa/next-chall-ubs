import styled from "styled-components";
interface IButton {
  loading: string;
}
export const GenerateButton = styled.div<IButton>`
  position: relative;
  width: ${(props) => (props.loading=="true" ? "120px" : "100px")};
  background-color: #4ade80;
  transition:all .5s ease-in-out;
  padding: 0.5rem 1rem;
  display:flex;
  cursor:pointer;
  align-items:center;
  margin-top: 1rem;
  border-radius: 10px;
`;