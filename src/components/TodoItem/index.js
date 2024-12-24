// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button onClick={onDelete} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
