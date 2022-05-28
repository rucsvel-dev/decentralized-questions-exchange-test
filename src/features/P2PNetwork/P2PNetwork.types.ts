import { IGunInstance } from "gun/types";

export type TP2PNetworkApi = {
  p2pProvider: IGunInstance<any>;
} | null;
