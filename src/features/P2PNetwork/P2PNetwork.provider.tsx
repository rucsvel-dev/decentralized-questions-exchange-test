import { useState, useMemo, useEffect, FC, ReactNode } from "react";
import GUN from "gun/gun";

import P2PNetworkContext from "./P2PNetwork.context";

const P2PProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [p2pProvider, setP2PProvider] = useState(null);

  useEffect(() => {
    const gun = GUN();
    const questionsProvider = gun.get("questions");

    setP2PProvider(gun);
    questionsProvider.map().on((question) => {
      setQuestions((prevState) => [...prevState, question]);
    });
  }, []);

  const P2PNetworkApi = useMemo(
    () => ({
      p2pProvider,
      questions,
    }),
    [p2pProvider, questions]
  );

  return (
    <P2PNetworkContext.Provider value={P2PNetworkApi}>
      {children}
    </P2PNetworkContext.Provider>
  );
};

export default P2PProvider;
