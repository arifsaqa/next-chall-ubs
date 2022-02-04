import React, { Dispatch, FC, SetStateAction, useContext, useState } from "react";
interface ITogglerContext {
  checked: boolean;
  setChecked?: Dispatch<SetStateAction<boolean>>;
}
const defaultState = {
  checked: false,
};

const TogglerContext = React.createContext<ITogglerContext>(defaultState);

export const TogglerProvider: FC = ({ children }) => {
  const [checked, setChecked] = useState(false);
  return (
    <TogglerContext.Provider
      value={{
        setChecked,
        checked,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};

export const useTogglerContext = () =>  useContext(TogglerContext);