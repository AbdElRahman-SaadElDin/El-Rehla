import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';
import courseData from './course_details_data.json'; // Make sure the path is correct
import './coursedetails.css';

function Course_Details() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Find the course with the matching courseId
    const course = courseData.find(c => c.courseId === parseInt(courseId));
    setCourse(course);
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='info-cont'>
        <div className='info'>
          <h1>{course.courseName}</h1>
          <video src={course.introductionVideoUrl} controls />
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
            {section.moduleDtos.map((module, moduleIndex) => (
              <Dropdown
                key={module.moduleId}
                content={module.moduleName}
                items={[
                  ...module.lessonDtos.map(lesson => `Lesson: ${lesson.name}`),
                  ...module.quizDtos.map(quiz => `Quiz: ${quiz.title}`)
                ]}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Course_Details;
