import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from "./home.module.css";

function Home() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [havecourse, setHaveCourse] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [studentData, setStudentData] = useState(null); // State to hold student data
    const token = localStorage.getItem('token');
    const mycoursesUrl = "https://quality-touching-seahorse.ngrok-free.app/api/student/mycourses";
    const studentInfoUrl = "https://quality-touching-seahorse.ngrok-free.app/api/student/current";

    const axiosConfig = {
        headers: {
            'ngrok-skip-browser-warning': '69420',
            'Authorization': `Bearer ${token}`,
        },
    };
    const handleCourseClick = (courseId) => {
      navigate(`/content/${courseId}`);
  };
    const fetchStudentData = () => {
        axios.get(studentInfoUrl, axiosConfig)
            .then(response => {
                if (response.status === 200) {
                    setStudentData(response.data);
                } else {
                    setStudentData(null);
                }
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
                setStudentData(null);
            });
    };

    const fetchCourses = () => {
        axios.get(mycoursesUrl, axiosConfig)
            .then(response => {
                if (response.status === 200) {
                    setCourses(response.data);
                    setHaveCourse(true);
                } else if (response.status === 201) {
                    setCourses([]);
                    setHaveCourse(false);
                }
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching data');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchStudentData(); // Fetch student data on component mount
        fetchCourses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.welcome}>
                {studentData && (
                    <h1>Hello {studentData.fName} {studentData.lName}</h1>
                )}
            </div>
            <div className={style.mycourses}>
                <h2>My Courses</h2>
                <div className={style.line}></div>
                {havecourse ? (
                    <div className={style.OneCourse}>
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
                                    <button className={style.loadmorebutton} onClick={() => handleCourseClick(course.courseId)}>Start Course</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className={style.not}>You don't have any added courses yet.</p>
                        <a href="/courses" className={style.courseButton}>Our courses</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
