import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './OneCourse.module.css';

const OneCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiUrl = 'https://localhost:7068/api/course';

  // Axios configuration object with headers
  const axiosConfig = {
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  };

  const fetchCourses = (query = '') => {
    const searchUrl = query ? `${apiUrl}?searchquery=${query}` : apiUrl;

    axios.get(searchUrl, axiosConfig)
      .then(response => {
        console.log(response.data);
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    fetchCourses(query);
  };

  const handleEnrollNow = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  return (
    <div className={style.OneCourse}>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={style.searchInput}
        />
      </div>

      <div className={style.CoursesContainer}>
        {courses.map((course, index) => (
          <div key={index} className={style.coursecard}>
            <img src={course.imageUrl} alt={`Course ${index + 1} Image`} />
            <div className={style.title}>
              <h2>{course.name}</h2>
            </div>
            <p className={style.desc}>{course.description}</p>
            <p key={index}>Instructor: {course.teacherName}</p>
            <div className={style.rating}>
              <span className={style.ratingnumber}>4.0</span>
              <span className={style.star}>&#9733;</span>
              <span className={style.star}>&#9733;</span>
              <span className={style.star}>&#9733;</span>
              <span className={style.star}>&#9733;</span>
              <span className={style.star}>&#9734;</span>
            </div>
            <button className={style.loadmorebutton} onClick={() => handleEnrollNow(course.courseId)}>Show Course</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneCourse;
