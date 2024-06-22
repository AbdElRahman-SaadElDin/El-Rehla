import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [courses, setCourses] = useState([]);
  const url = 'https://9990-156-217-11-146.ngrok-free.app/api/course';

  // Fetch API
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setCourses(data);
    })
    .catch(err => console.error('Error:', err));
  }, [url]);

  // Axios API
  useEffect(() => {
    axios.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      console.log(res.data);
      setCourses(res.data);
    })
    .catch(err => {
      console.error('Error:', err);
    });
  }, [url]);

  return (
    <div>
    </div>
  );
};

export default App;