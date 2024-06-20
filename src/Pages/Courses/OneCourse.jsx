import image from './learning.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './OneCourse.module.css';


const OneCourse = () => {

    const [Courses , setCourses] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setCourses(data))
        .catch(err => console.log(err))
    },[])

            

return (

    <div className={style.OneCourse}>
    
        <div className={style.CoursesContainer}>


            {Courses.map((list, index) =>(
                <div className={style.coursecard}>
                    <img src={image} alt="Course 1 Image"/>
                    <div className={style.title}>
                        <h2>Course Title</h2>
                    </div>
                    <p>Description of the Course goes here.</p>

                    <p key={index}>Instructor: {list.name}</p>
                    
                    <p>Price: $99.99</p>
                    <div className={style.rating}>
                        <span className={style.ratingnumber}>4.0</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9733;</span>
                        <span className={style.star}>&#9734;</span>
                    </div>
                    <button className={style.loadmorebutton}>Enroll Now</button>
                </div>
            ))}


        </div>
        

    </div>
    

)
}

export default OneCourse