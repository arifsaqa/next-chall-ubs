import styled from "styled-components";

export const Switch = styled.label`
  display: inline-block;
  width: 60px;
  height: 34px;
  position: relative;
`;


interface ThumbProp {
  checked:boolean
}
export const Thumb = styled.span<ThumbProp>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #475569;
  border-radius: 40px;
  cursor: pointer;
  &:before {
    content: "";
    height: 29px;
    width: 29px;
    position: absolute;
    left: 2px;
    bottom: 3px;
    border-radius: 50%;
    background-color: ${(props) => (props.checked ? `#4ADE80` : `#fff`)};

    transition: 0.4s all ease;
    ${(props) => (props.checked ? `transform: translateX(26px)` : ``)}
  }
  /* &:checkbox:checked + &:before {
    ;
  } */
`;

export const ToogleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
 
`;