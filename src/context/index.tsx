import React, { createContext, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

interface myProviderProps {
  children: React.ReactNode;
}

interface myContextProps {
  largerThan1200: boolean;
  largerThan900: boolean;
  largerThan700: boolean;
  largerThan400: boolean;
  biggestThan750: boolean;
  setTextModal: React.Dispatch<React.SetStateAction<boolean>>;
  textModal: boolean;
}

export const myContext = createContext({} as myContextProps);

export const MyProvider = ({ children }: myProviderProps) => {
  const [largerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [largerThan900] = useMediaQuery("(min-width: 900px)");
  const [largerThan700] = useMediaQuery("(min-width: 700px)");
  const [largerThan400] = useMediaQuery("(min-width: 400px)");
  const [biggestThan750] = useMediaQuery("(min-height: 750px)");
  const [textModal, setTextModal] = useState<boolean>(true);

  return (
    <myContext.Provider
      value={{
        largerThan1200,
        largerThan900,
        largerThan700,
        largerThan400,
        biggestThan750,
        setTextModal,
        textModal,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
