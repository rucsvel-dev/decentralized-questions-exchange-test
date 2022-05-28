import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";

import Question from "./Question";
import useUploadQuestionTest from "./useUploadQuestionTest";

const UploadQuestionTest: FC = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  const { createQuestion, questions } = useUploadQuestionTest();

  const createQuestionCallback = useCallback(
    () => createQuestion({ questionTitle, questionDescription }),
    [questionTitle, questionDescription]
  );

  console.log("===== questions ", questions);
  return (
    <div>
      <input
        placeholder="questionTitle"
        value={questionTitle}
        onChange={(event) => setQuestionTitle(event.target.value)}
      />
      <input
        placeholder="questionDescription"
        value={questionDescription}
        onChange={(event) => setQuestionDescription(event.target.value)}
      />
      <button onClick={createQuestionCallback}>Create question</button>
      {questions.map(({ questionId, isProved }) => (
        <div key={questionId}>
          <Question questionId={questionId} isProved={isProved} />
        </div>
      ))}
    </div>
  );
};

export default UploadQuestionTest;
