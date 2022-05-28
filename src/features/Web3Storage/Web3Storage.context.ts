import { createContext, useContext } from "react";

import { TWeb3StorageApi } from "./Web3Storage.types";

const Web3StorageContext = createContext<TWeb3StorageApi | null>(null);

export const useWeb3StorageContext = (): TWeb3StorageApi => {
  return useContext(Web3StorageContext);
};

export default Web3StorageContext;
