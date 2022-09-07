import './App.css';
import GoalList from './components/GoalList';

function App() {
  // global state
  const courseGoals = [
    {id: 1, text: 'Finish the course'},
    {id: 2, text: 'Learn about how each part of the MERN stack connect with each other'},
    {id: 3, text: 'How to build a REST API with NodeJS and Express'},
  ];

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
