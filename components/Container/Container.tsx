import React, { Component } from "react";
import { ContainerStyle } from "./Container.styles";

export default function Container(props: { children: JSX.Element|JSX.Element[] }) {
  const { children } = props;
  return <ContainerStyle>{children}</ContainerStyle>;
}
