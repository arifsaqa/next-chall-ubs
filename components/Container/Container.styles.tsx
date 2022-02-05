import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 90%;
  margin: auto;
  height: 100vh;
  text-align: center;
`;

interface PropDContainer {
  row:boolean
}
export const DataContainer = styled.div<PropDContainer>`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  overflow: scroll;
  flex-wrap: ${(props) => (props.row ? "wrap" : "nowrap")};
  height: 50vh;
  ${(props) => (props.row ? "justify-content:space-around" : "")}
  borderradius: 10px;
  border: 1px solid black;
  margin-top: 10px;
`;
