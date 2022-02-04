import React, { useEffect, useState } from "react";
import { Switch, Thumb, ToogleInput } from "./Toggle.style";
import Person from "../Icons/Quote";
import Quote from "../Icons/Person";
import { useTogglerContext } from "../Context/TogglerContext";
function Toggle() {
    const { checked, setChecked } = useTogglerContext();

  return (
    <Switch>
      <ToogleInput type={"checkbox"} onClick={() => {
        if (setChecked) {
          setChecked(!checked);
        }
      }} />
      <Thumb checked={checked}>
        <Quote/>
        <Person/>
      </Thumb>
    </Switch>
  );
}

export default Toggle;
