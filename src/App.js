import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  // global state
  const courseGoals = [
    {id: 1, text: 'Finish the course'},
    {id: 2, text: 'Learn about how each part of the MERN stack connect with each other'},
    {id: 3, text: 'How to build a REST API with NodeJS and Express'},
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal)
    console.log(courseGoals)
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
