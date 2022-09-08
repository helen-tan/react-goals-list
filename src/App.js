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
    // setCourseGoals(courseGoals.concat(newGoal))
    // But React might defer updates if there are many state changes at the same time
    // Better way to update state - a func which receives the lastest state
    // Need this if the state update depends on the previous state's data
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })
    // If the new state is computed using the previous state,
    // you can pass a function to setState.
    // The function will receive the previous value, and return an updated value
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
