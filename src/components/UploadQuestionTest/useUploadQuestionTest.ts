import { useContext } from "react";

import useP2PNetwork from "src/features/P2PNetwork/P2PNetwork.hooks";
import useWeb3Storage from "src/features/Web3Storage/Web3Storage.hooks";

const useUploadQuestionTest = () => {
  const { uploadQuestion, getById } = useWeb3Storage();
  const { shareQuestion, questions } = useP2PNetwork();

  const createQuestion = async ({ questionTitle, questionDescription }) => {
    // const questionId = await uploadQuestion({
    //   questionTitle,
    //   questionDescription,
    // });
    // console.log("===== questionId ", questionId);
    await shareQuestion(questionTitle);
  };

  const getQuestion = async (onSuccess, questionId) => {
    const questionData = await getById(questionId);
    onSuccess(questionData);
  };

  return {
    createQuestion,
    getQuestion,
    questions,
  };
};

export default useUploadQuestionTest;
