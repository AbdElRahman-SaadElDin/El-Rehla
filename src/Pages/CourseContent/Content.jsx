import React, { useState } from 'react';
import './Content.css';

const lessonsData = [
    { title: "Lesson 1: Introduction", video: "your-video-file-1.mp4", type: "video" },
    { title: "Lesson 2: Basics", video: "your-video-file-2.mp4", type: "video" },
    { title: "Quiz 1: Test Your Knowledge", 
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"], answer: "1", type: "quiz" 
    },
    { title: "Lesson 3: Name of Lesson", video: "your-video-file-3.mp4", type: "video" },
    { title: "Lesson 4: Advanced Topics", video: "your-video-file-4.mp4", type: "video" },
    { title: "Lesson 5: Expert Tips", video: "your-video-file-5.mp4", type: "video" },
    { title: "Lesson 6: Summary", video: "your-video-file-6.mp4", type: "video" },
    { title: "Quiz 2: Test Your Knowledge", question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Rome", "Madrid"], answer: "1", type: "quiz" 
    },
    { title: "Lesson 7: Final Thoughts", video: "your-video-file-7.mp4", type: "video" },
    { title: "Lesson 8: Conclusion", video: "your-video-file-8.mp4", type: "video" },
    { title: "Quiz 3: Final Test", question: "What is the largest planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "3", type: "quiz" 
    }
];

const Content = () => {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(3);
    const [selectedChoice, setSelectedChoice] = useState(null);

    const currentLesson = lessonsData[currentLessonIndex];

    const handleLessonClick = (index) => {
        setCurrentLessonIndex(index);
        setSelectedChoice(null);
    };

    const handleChoiceClick = (choiceIndex) => {
        if (selectedChoice !== null) return;

        setSelectedChoice(choiceIndex);
    };

    const handleNextClick = () => {
        const nextIndex = currentLessonIndex + 1;
        if (nextIndex < lessonsData.length) {
            setCurrentLessonIndex(nextIndex);
            setSelectedChoice(null);
        }
    };

    return (
        <div>
            <header className='content-header'>
                <h1>Course Name</h1>
            </header>
            <main>
                <div className="left-section">
                    <div className="video-section">
                        <h2>{currentLesson.title}</h2>
                        <div className="video-container">
                            {currentLesson.type === 'video' ? (
                                <video controls>
                                    <source src={currentLesson.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <div className="quiz-content" style={{ display: 'flex' }}>
                                    <h3>{currentLesson.question}</h3>
                                    <div className="quiz-buttons">
                                        {currentLesson.choices.map((choice, index) => (
                                            <div className='choices'>
                                                <button
                                                    key={index}
                                                    className={ 
                                                        selectedChoice !== null
                                                            ? (index + 1).toString() === currentLesson.answer
                                                                ? 'correct'
                                                                : selectedChoice === index
                                                                    ? 'incorrect'
                                                                    : ''
                                                            : ''
                                                    }
                                                    disabled={selectedChoice !== null}
                                                    onClick={() => handleChoiceClick(index)}
                                                >
                                                    {choice}
                                                </button>
                                            </div>
                                            
                                        ))}
                                    </div>
                                    {selectedChoice !== null && (
                                        <button onClick={handleNextClick} className="next-button">
                                            Next
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    {currentLesson.type === 'video' && (
                        <div className="comments-section">
                            <input type="text" placeholder="Leave Comment" />
                            <input type="text" placeholder="A Question" />
                        </div>
                    )}
                </div>
                <aside>
                    <h3>Section 1</h3>
                    <h4>Module 1</h4>
                    <nav className='content-nav'>
                        <ul>
                            {lessonsData.map((lesson, index) => (
                                <li
                                    key={index}
                                    className={index === currentLessonIndex ? 'active' : ''}
                                    onClick={() => handleLessonClick(index)}
                                >
                                    {lesson.title}
                                </li>
                            ))}
                        </ul>
                        <button>Course Home Page</button>
                    </nav>
                </aside>
            </main>
        </div>
    );
};

export default Content;
