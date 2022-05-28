import { createContext, useContext } from "react";

import { TP2PNetworkApi } from "./P2PNetwork.types";

const P2PNetworkContext = createContext<P2PNetworkApi | null>(null);

export const useP2PNetworkContext = (): TP2PNetworkApi => {
  return useContext(P2PNetworkContext);
};

export default P2PNetworkContext;
