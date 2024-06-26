import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';
import axios from 'axios';
import './coursedetails.css';

function Course_Details() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const apiUrl = `https://quality-touching-seahorse.ngrok-free.app/api/course/${courseId}/details`;
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
        console.log(response.data);
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching course details.');
      });
  }, [courseId]);

  const handleEnroll = () => {
    const enrollApiUrl = `https://quality-touching-seahorse.ngrok-free.app/api/course/${courseId}/enroll`;
    const token = localStorage.getItem('token');
  
    axios.post(enrollApiUrl, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      },
    })
      .then(response => {
        console.log('Enrollment successful:', response.data);
        navigate('/home');
      })
      .catch(error => {
        if (error.response && error.response.status === 403) {
          console.error('Payment required:', error);
          navigate(`/payment?courseId=${courseId}`);
        } else {
          console.error('Enrollment failed:', error);
          setError('Enrollment failed. Please try again.');
        }
      });
  };  

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  const videoUrl = course.introductionVideoUrl.replace('watch?v=', 'embed/');

  const handleSelect = (item) => {
    setSelectedContent(item);
  };

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
            <p onClick={handleEnroll}>Enroll now</p>
          </div>
        </div>
      </div>
      <div className="course-content">
        <h2>Course Contents</h2>
        <div className='line'></div>
        <div className='content-layout'>
          <div className='dropmenu-container'>
            {course.sectionDtos.map((section, sectionIndex) => (
              <div key={section.sectionId}>
                <h3 className='section-title'>{section.sectionName}</h3>
                {section.moduleDtos.map((module, moduleIndex) => {
                  const items = [
                    ...module.lessonDtos.map(lesson => ({ type: 'Lesson', order: lesson.order, content: `Lesson: ${lesson.name}` })),
                    ...module.quizDtos.map(quiz => ({ type: 'Quiz', order: quiz.order, content: `Quiz: ${quiz.title}` }))
                  ].sort((a, b) => a.order - b.order);

                  return (
                    <Dropdown
                      key={module.moduleId}
                      content={module.moduleName}
                      items={items}
                      onSelect={handleSelect}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className='selected-content'>
            {selectedContent && (
              <div>
                <h2>{selectedContent.type}</h2>
                <p>{selectedContent.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course_Details;
