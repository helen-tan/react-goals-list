import { useState } from 'react'
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

function App() {
  // global state
  const [courseGoals, setCourseGoals] = useState([
    {id: 1, text: 'Finish the course'},
    {id: 2, text: 'Learn about how each part of the MERN stack connect with each other'},
    {id: 3, text: 'How to build a REST API with NodeJS and Express'},
  ]);


  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal))
  }

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
