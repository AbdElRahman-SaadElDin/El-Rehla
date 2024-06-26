// import React, { useState, useEffect } from 'react';
// import quiz_Data from './quizData.json'; // Directly import the JSON data

// const QuizComponent = () => {
//   const [quizData, setQuizData] = useState(null);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   useEffect(() => {
//     // Directly set the quiz data from the imported JSON
//     setQuizData(quiz_Data);
//   }, []);

//   const handleChange = (event, questionId) => {
//     setAnswers({
//       ...answers,
//       [questionId]: parseInt(event.target.value)
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let newScore = 0;
//     quizData.questions.forEach((question) => {
//       if (answers[question.questionId] === question.rightChoiceId) {
//         newScore++;
//       }
//     });
//     setScore(newScore);
//   };

//   if (!quizData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="quiz-container">
//       <h2>{quizData.title}</h2>
//       <form onSubmit={handleSubmit}>
//         {quizData.questions.map((question) => (
//           <div key={question.questionId} className="question">
//             <p>{question.questionText}</p>
//             <ul>
//               {question.choices.map((choice) => (
//                 <li key={choice.choiceId}>
//                   <label>
//                     <input
//                       type="radio"
//                       name={`question-${question.questionId}`}
//                       value={choice.choiceId}
//                       onChange={(event) => handleChange(event, question.questionId)}
//                     />
//                     {choice.choiceText}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//         <button type="submit">Submit Quiz</button>
//       </form>
//       {score !== null && <div>Your score: {score}/{quizData.questions.length}</div>}
//     </div>
//   );
// };

// export default QuizComponent;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizComponent = ({ courseId, itemId }) => {
  const [quizData, setQuizData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      'ngrok-skip-browser-warning': '69420',
      'Authorization': `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`https://quality-touching-seahorse.ngrok-free.app/api/course/${courseId}/content/quiz/${itemId}`, axiosConfig);
        setQuizData(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [courseId, itemId]);

  const handleChange = (event, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: parseInt(event.target.value)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;
    quizData.questions.forEach((question) => {
      if (answers[question.questionId] === question.rightChoiceId) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <h2>{quizData.title}</h2>
      <form onSubmit={handleSubmit}>
        {quizData.questions.map((question) => (
          <div key={question.questionId} className="question">
            <p>{question.questionText}</p>
            <ul>
              {question.choices.map((choice) => (
                <li key={choice.choiceId}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.questionId}`}
                      value={choice.choiceId}
                      onChange={(event) => handleChange(event, question.questionId)}
                    />
                    {choice.choiceText}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
      {score !== null && <div>Your score: {score}/{quizData.questions.length}</div>}
    </div>
  );
};

export default QuizComponent;