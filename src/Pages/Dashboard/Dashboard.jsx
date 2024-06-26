import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const weeklyStudyHoursChartRef = useRef(null);
  const courseProgressChartRef = useRef(null);

  useEffect(() => {
    // Bar Chart for Weekly Study Hours
    const ctx1 = document.getElementById('weekly-study-hours').getContext('2d');
    if (weeklyStudyHoursChartRef.current) {
      weeklyStudyHoursChartRef.current.destroy();
    }
    weeklyStudyHoursChartRef.current = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Hours',
          data: [2, 3, 1, 4, 2, 5, 3],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Pie Chart for Course Progress
    const ctx2 = document.getElementById('course-progress').getContext('2d');
    if (courseProgressChartRef.current) {
      courseProgressChartRef.current.destroy();
    }
    courseProgressChartRef.current = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Completed', 'In Progress'],
        datasets: [{
          data: [60, 40],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    return () => {
      if (weeklyStudyHoursChartRef.current) {
        weeklyStudyHoursChartRef.current.destroy();
      }
      if (courseProgressChartRef.current) {
        courseProgressChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="section overview-section">
        <h2>Overview</h2>
        <div className="overview-cards">
          <div className="card">
            <h3>Courses in Progress</h3>
            <p id="courses-in-progress">3</p>
          </div>
          <div className="card">
            <h3>Hours Learning</h3>
            <p id="hours-learning">3h 14m</p>
          </div>
          <div className="card">
            <h3>Community Score</h3>
            <p id="hours-learning">240</p>
          </div>
        </div>
      </div>

      <div className="section study-statistics-section">
        <h2>Study Statistics</h2>
        <div className="charts">
          <div className="chart barchart">
            <h3>Weekly Study Hours</h3>
            <canvas id="weekly-study-hours"></canvas>
          </div>
          <div className="chart piechart">
            <h3>Course Progress</h3>
            <canvas id="course-progress"></canvas>
          </div>
        </div>
      </div>

      <div className="section my-courses-section">
        <h2>My Courses</h2>
        <div className="courses-cards">
          <div className="course-card">
            <h3>Introduction to HTML</h3>
            <p>Instructor: AbdElRahman Saad</p>
            <p>Progress: 50%</p>
          </div>
          <div className="course-card">
            <h3>Introduction to CSS</h3>
            <p>Instructor: Ammar Yasser</p>
            <p>Progress: 30%</p>
          </div>
          <div className="course-card">
            <h3>Introduction to JS</h3>
            <p>Instructor: Diaa Mohamed</p>
            <p>Progress: 70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
