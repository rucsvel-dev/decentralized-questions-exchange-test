import { Web3Storage } from "web3.storage";

export type TWeb3StorageApi = {
    storageProvider: Web3Storage
} | null;

export type TUseWeb3Storage = {
    uploadQuestion: () => Promise<string>;
}