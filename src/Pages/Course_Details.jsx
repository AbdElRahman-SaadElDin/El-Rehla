import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';
import axios from 'axios';
import './coursedetails.css';

function Course_Details() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = `https://quality-touching-seahorse.ngrok-free.app/api/course/${courseId}/details`;
  const axiosConfig = {
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  };

  useEffect(() => {
    axios.get(apiUrl, axiosConfig)
      .then(response => {
        console.log(response.data);
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching course details.');
      });
  }, [courseId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
  }
  const videoUrl = course.introductionVideoUrl.replace('watch?v=', 'embed/');
  return (
    <>
      <div className='info-cont'>
        <div className='info'>
          <h1>{course.courseName}</h1>
          <iframe
            src={videoUrl}
            title={course.courseName}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='details'>
          <h2>Course Details</h2>
          <p>{course.description}</p>
          <div>
            <p>Enroll now</p>
          </div>
        </div>
      </div>
      <div className="course-content">
        <h2>Course Contents</h2>
        <div className='line'></div>
        {course.sectionDtos.map((section, sectionIndex) => (
          <div key={section.sectionId}>
            <h3 className='section-title'>{section.sectionName}</h3>
            {section.moduleDtos.map((module, moduleIndex) => {
              // Combine and sort lessons and quizzes
              const items = [
                ...module.lessonDtos.map(lesson => ({ type: 'Lesson', order: lesson.order, content: `Lesson: ${lesson.name}` })),
                ...module.quizDtos.map(quiz => ({ type: 'Quiz', order: quiz.order, content: `Quiz: ${quiz.title}` }))
              ].sort((a, b) => a.order - b.order);

              // Extract the content after sorting
              const orderedItems = items.map(item => item.content);

              return (
                <Dropdown
                  key={module.moduleId}
                  content={module.moduleName}
                  items={orderedItems}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
export default Course_Details;
