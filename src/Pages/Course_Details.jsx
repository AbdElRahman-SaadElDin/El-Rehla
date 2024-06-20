import React from 'react'
import './coursedetails.css';
import Dropdown from '../Components/Dropdown';
function Course_Details() {
    return (
        <>
        <div className='info-cont'>
        <div className='info'>
        <h1>Course Name</h1>
        <video src=""></video>
        </div>
        <div className='details'>
        <h2>Course Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam aliquid nostrum cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem dolorum modi dignissimos amet nostrum harum consequatur, vitae quo eum beatae sequi saepe ad voluptas molestiae esse. Quisquam, quod eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui suscipit praesentium voluptatibus vel cum iusto quas voluptatum ipsam a ipsa deserunt quam neque assumenda porro alias repellendus, recusandae aperiam?</p>
        <div>
            <p>enroll now</p>
        </div>
        </div>
        </div>
        <div className="course-content">
            <h2>Course Contents</h2>
            <div className='line'></div>
        </div>
        <div>
            <Dropdown content="hello"/>
        </div>
        <div>
            <Dropdown content="hello"/>
        </div>
        <div>
            <Dropdown content="hello"/>
        </div>
        <div>
            <Dropdown content="hello"/>
        </div>
        </>
    )
}

export default Course_Details