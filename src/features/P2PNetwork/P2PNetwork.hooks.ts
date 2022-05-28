import { useContext } from "react";

import { useP2PNetworkContext } from "./P2PNetwork.context";

const useP2PNetwork = () => {
  const { p2pProvider, questions } = useP2PNetworkContext();

  const shareQuestion = async (questionId: string): Promise<string> => {
    try {
      return await p2pProvider
        .get("questions")
        .get(questionId)
        .put({ isProved: false, questionId });
    } catch {}
  };

  return {
    shareQuestion,
    questions,
  };
};

export default useP2PNetwork;
