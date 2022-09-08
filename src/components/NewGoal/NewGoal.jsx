import './NewGoal.css'

const NewGoal = ({ onAddGoal }) => {
  const addGoalHandler = (e) => {
    e.preventDefault() // prevent browser default of sending a req to the backend

    const newGoal = {
      id: Math.random()*10,
      text: 'A new goal'
    }

    onAddGoal(newGoal)
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type='submit'>Add Goal</button>
    </form>
  )
}

export default NewGoal
