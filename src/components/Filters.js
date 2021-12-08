import { Button } from "@mui/material"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearComplated, setFilter } from "../Redux/TodoSlice"
function Filters() {
  const filter = useSelector((state) => state.toDo.filter)
  let filterTodoItems = useSelector((state) => state.toDo.toDoItems)
  filterTodoItems = filterTodoItems.filter((item) => {
    switch (filter) {
      case "All":
        return true
      case "Complated":
        return item.done
      case "Uncomplated":
        return !item.done
      default:
        throw new Error()
    }
  })
  let doneTodoItems = filterTodoItems.filter((item) => item.done)

  const dispatch = useDispatch()
  const onButtonClick = (currentFilter) => {
    dispatch(setFilter(currentFilter))
  }
  return (
    <div style={{ width: 700, margin: 10, border: "thin solid blue", padding: 10 }}>
      <span style={{ marginRight: 80 }}>
        {doneTodoItems.length}/{filterTodoItems.length}
      </span>
      <Button
        onClick={() => {
          onButtonClick("All")
        }}
        variant="outlined"
        style={{ marginLeft: 10, backgroundColor: filter === "All" ? "red" : "" }}
      >
        All
      </Button>
      <Button
        onClick={() => {
          onButtonClick("Complated")
        }}
        variant="outlined"
        style={{
          marginLeft: 10,
          backgroundColor: filter === "Complated" ? "red" : "",
        }}
      >
        Complated
      </Button>
      <Button
        onClick={() => {
          onButtonClick("Uncomplated")
        }}
        variant="outlined"
        style={{
          marginLeft: 10,
          backgroundColor: filter === "Uncomplated" ? "red" : "",
        }}
      >
        Uncomplated
      </Button>
      <Button
        onClick={() => {
          dispatch(clearComplated())
        }}
        variant="outlined"
        style={{ marginLeft: 10 }}
      >
        Clear Complateds
      </Button>
    </div>
  )
}

export default Filters
