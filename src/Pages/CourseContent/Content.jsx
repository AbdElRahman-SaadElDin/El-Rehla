import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../../Components/Dropdown';
import axios from 'axios';
import './Content.css';

function Course_Content() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const apiUrl = `https://localhost:7068/api/course/${courseId}/details`;
  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      'ngrok-skip-browser-warning': '69420',
      'Authorization': `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get(apiUrl, axiosConfig)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        setError('Error fetching course details.');
      });
  }, [courseId]);

  const handleItemClick = (item) => {
    if (item.type === 'Lesson') {
      axios.get(`https://localhost:7068/api/course/${courseId}/content/lesson/${item.id}`, axiosConfig)
        .then(response => {
          setSelectedContent(
            <div>
              <h2>{response.data.name}</h2>
              <iframe
                src={response.data.videoUrl.replace('watch?v=', 'embed/')}
                title={response.data.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{response.data.description}</p>
              <a href={response.data.pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>
            </div>
          );
        })
        .catch(error => {
          setError('Error fetching lesson content.');
        });
    } else if (item.type === 'Quiz') {
      axios.get(`https://localhost:7068/api/course/${courseId}/content/quiz/${item.id}`, axiosConfig)
        .then(response => {
          setSelectedContent(
            <div>
              <h2>{response.data.title}</h2>
              {response.data.questions.map(question => (
                <div key={question.questionId}>
                  <p>{question.questionText}</p>
                  {question.choices.map(choice => (
                    <div key={choice.choiceId}>
                      <input 
                        type="radio" 
                        id={`choice-${choice.choiceId}`} 
                        name={`question-${question.questionId}`} 
                        value={choice.choiceId}
                        onChange={() => handleAnswerChange(question.questionId, choice.choiceId)}
                      />
                      <label htmlFor={`choice-${choice.choiceId}`}>{choice.choiceText}</label>
                    </div>
                  ))}
                </div>
              ))}
              <button onClick={() => handleSubmit(response.data)}>Submit Quiz</button>
            </div>
          );
        })
        .catch(error => {
          setError('Error fetching quiz content.');
        });
    }
  };

  const handleAnswerChange = (questionId, choiceId) => {
    setQuizAnswers(prevState => ({
      ...prevState,
      [questionId]: choiceId
    }));
  };

  const handleSubmit = (quizData) => {
    const correctAnswers = quizData.questions.reduce((acc, question) => {
      acc[question.questionId] = question.rightChoiceId;
      return acc;
    }, {});

    const studentAnswers = quizAnswers;

    const results = quizData.questions.map(question => ({
      questionId: question.questionId,
      isCorrect: studentAnswers[question.questionId] === correctAnswers[question.questionId]
    }));

    // Log results or handle them as needed
    console.log('Quiz Results:', results);
    alert('Quiz submitted successfully! Check the console for results.');
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-content-container">
      <div className="course-content-left">
        <h2>Course Contents</h2>
        <div className='line'></div>
        {course.sectionDtos.map((section) => (
          <div key={section.sectionId}>
            <h3 className='section-title'>{section.sectionName}</h3>
            {section.moduleDtos.map((module) => {
              const items = [
                ...module.lessonDtos.map(lesson => ({ type: 'Lesson', id: lesson.lessonId, content: `Lesson: ${lesson.name}`, order: lesson.order })),
                ...module.quizDtos.map(quiz => ({ type: 'Quiz', id: quiz.quizId, content: `Quiz: ${quiz.title}`, order: quiz.order }))
              ].sort((a, b) => a.order - b.order);

              return (
                <Dropdown
                  key={module.moduleId}
                  content={module.moduleName}
                  items={items}
                  onSelect={handleItemClick}
                  isClickable={true}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="course-content-right">
        {selectedContent ? (
          <div className="content-display">{selectedContent}</div>
        ) : (
          <div className="placeholder">Select a lesson or quiz to view its content</div>
        )}
      </div>
    </div>
  );
}

export default Course_Content;
