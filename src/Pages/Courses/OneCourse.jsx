import image from './learning.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './OneCourse.module.css';
import axios from 'axios';
import course_data from "./course_data.json"
import { useNavigate } from 'react-router-dom';
const OneCourse = () => {
    const navigate = useNavigate();
    const [Courses , setCourses] = useState([])
    const apiUrl = 'https://0972-156-217-11-146.ngrok-free.app/api/course';

// Axios configuration object with headers
// const axiosConfig = {
//   headers: {
//     'ngrok-skip-browser-warning': '69420',
//   },
// };

// axios.get(apiUrl, axiosConfig)
//   .then(response => {
//     console.log('Response:', response.data);
//     setCourses(response.data)
//     // Handle your data here
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//     // Handle error scenarios here
//   });
const handleEnrollNow = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };
return (

    <div className={style.OneCourse}>
    
        <div className={style.CoursesContainer}>
            {course_data.map((list, index) =>(
                <div className={style.coursecard}>
                    <img src={list.image} alt="Course 1 Image"/>
                    <div className={style.title}>
                        <h2>{list.name}</h2>
                    </div>
                    <p className={style.desc}>{list.description}</p>

                    {/* <p key={index}>Instructor: {list.name}</p> */}
                    
                    <p>Price: $99.99</p>
                    <div className={style.rating}>
                        <span className={style.ratingnumber}>4.0</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9734;</span>
                    </div>
                    <button className={style.loadmorebutton} onClick={() => handleEnrollNow(list.courseId)}>Enroll Now</button>
                </div>
            ))}


        </div>
        

    </div>
    

)
}

export default OneCourse