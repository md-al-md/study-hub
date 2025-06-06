import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import TaskCard from './TaskCard';
function StudentHomepage() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/login');
  };
  const handleCourses = () => {
    navigate('/courses');
  };
  return (
    <main>
      <header>
        <div>
          <h1>Home</h1>
          <div>
            <button id="signout" onClick={handleSignOut}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm487-320H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-11-11-11-27t11-28q11-12 28-12.5t29 11.5l143 143q12 12 12 28t-12 28L669-309q-12 12-28.5 11.5T612-310q-11-12-10.5-28.5T613-366l74-74Z"/>
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>
      <div className="container">
        <a className="hiddenLink" href='/courses'>
        <CourseCard/>
        </a>
      </div>
      <div className="container">
        <a className="hiddenLink" href='/tasks'>
        <TaskCard/>
        </a>
      </div>
    </main>
  );
};

export default StudentHomepage;