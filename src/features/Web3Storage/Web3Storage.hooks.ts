import { useContext } from "react";

import { useWeb3StorageContext } from "./Web3Storage.context";
import { TUseWeb3Storage, TWeb3StorageApi } from "./Web3Storage.types";

const useWeb3Storage = (): TUseWeb3Storage => {
  const { storageProvider } = useWeb3StorageContext();

  const uploadQuestion = async ({
    questionTitle,
    questionDescription,
  }): Promise<string> => {
    try {
      const blob = new Blob(
        [JSON.stringify({ questionTitle, questionDescription })],
        { type: "application/json" }
      );

      const questionFile = new File([blob], `${questionTitle}.json`);

      return await storageProvider.put([questionFile]);
    } catch (e) {
      console.error("===== ", e);
    }
  };

  const getById = async (id: string): Promise<{}> => {
    try {
      const storageResponce = await storageProvider.get(id);
      const fileName = (await storageResponce.files())[0].name;
      const httpResponce = await fetch(
        `https://${id}.ipfs.dweb.link/${fileName}`
      );
      return await httpResponce.json();
    } catch {}
  };

  return {
    uploadQuestion,
    getById,
  };
};

export default useWeb3Storage;
