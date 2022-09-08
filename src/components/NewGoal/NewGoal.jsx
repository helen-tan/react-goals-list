import { useState } from 'react'
import './NewGoal.css'

const NewGoal = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState('')

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value)
  }

  const addGoalHandler = (e) => {
    e.preventDefault() // prevent browser default of sending a req to the backend

    const newGoal = {
      id: Math.random() * 10,
      text: enteredText
    }

    setEnteredText("")

    onAddGoal(newGoal)
  }


  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button type='submit'>Add Goal</button>
    </form>
  )
}

export default NewGoal

// value property: tell input component that value displayed in the input should be the value stored in enteredText
