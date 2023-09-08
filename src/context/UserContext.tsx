import {
  useContext,
  useEffect,
  useState,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type ValueProp = {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
};

type ContextProp = {
  children: ReactNode;
};

export const AppContext = createContext({} as ValueProp); //create the context API

//function body
export function UserContext({ children }: ContextProp) {
  const [userIdStorage, setUserIdStorage] = useLocalStorage('userId', '');
  const [userId, setUserId] = useState<string>(userIdStorage);

  useEffect(() => {
    setUserId(userIdStorage);
  }, [userIdStorage]);

  function handleSign(obj: any) {
    setUserIdStorage(obj);
  }

  return (
    <AppContext.Provider value={{ userId, setUserId: handleSign }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = (): ValueProp => {
  return useContext(AppContext);
};
