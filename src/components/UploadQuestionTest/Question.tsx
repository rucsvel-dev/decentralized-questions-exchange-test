import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";

import useUploadQuestionTest from "./useUploadQuestionTest";

const Question: FC = ({ questionId, isProved }) => {
  const [uploadedQuestion, setUploadedQuestion] = useState({});

  const { getQuestion } = useUploadQuestionTest();

  useEffect(() => {
    getQuestion(setUploadedQuestion, questionId);
  }, []);

  return (
    <div style={{ marginTop: "25px" }}>
      <div>question id: {questionId}</div>
      <div>
        title: {uploadedQuestion?.questionTitle}, is proved: {String(isProved)}
      </div>
      <div>description: {uploadedQuestion?.questionDescription}</div>
    </div>
  );
};

export default Question;
