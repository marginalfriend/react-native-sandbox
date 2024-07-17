import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/appwrite";
import { Models } from "react-native-appwrite";

interface GlobalContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: Models.Document | undefined;
  setUser: React.Dispatch<React.SetStateAction<Models.Document | undefined>>;
  list: object[];
  setList: React.Dispatch<React.SetStateAction<object[]>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<Models.Document | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState([{}]);

  useEffect(() => {
    getCurrentUser()
      .then((res: Models.Document | undefined) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoading(false);
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const contextValue: GlobalContextType = {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    user,
    setUser,
    list,
    setList,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
