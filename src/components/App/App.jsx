import { useState, useEffect } from "react";

import Feedback from "../Feedback/Feedback";
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from "../Notification/Notification";


export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);


  const resetFeedback = () => {
      setFeedback({
        ...feedback,
        good: 0,
        neutral: 0,
        bad: 0
      });
    };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
       <Options update={updateFeedback} total={totalFeedback} reset={resetFeedback} />
      {totalFeedback === 0 ? <Notification/> :
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback} />}
      
    </>
  );
}



