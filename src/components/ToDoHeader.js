import { Button, TextField } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { addToDo, inputValueChange } from "../Redux/TodoSlice"
import { v4 as uuidv4 } from "uuid"
function ToDoHeader() {
  const toDoName = useSelector((state) => state.toDo.toDoName)
  const dispatch = useDispatch()
  const onInputValueChange = (e) => {
    dispatch(inputValueChange(e.target.value))
  }
  const onAddButtonClick = () => {
    dispatch(
      addToDo({
        text: toDoName,
        id: uuidv4(),
        done: false,
      })
    )
    dispatch(inputValueChange(""))
  }
  return (
    <div
      style={{
        margin: 10,
        textAlign: "center",
      }}
    >
      <div style={{ margin: 50, marginBottom: 20, fontSize: 30 }}>My To Do List</div>
      <TextField
        value={toDoName}
        onChange={(e) => onInputValueChange(e)}
        id="outlined-basic"
        label="Title..."
        variant="outlined"
        style={{
          width: 450,
        }}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            onAddButtonClick()
          }
        }}
      />
      <Button
        style={{
          height: 56,
          width: 100,
        }}
        variant="outlined"
        onClick={onAddButtonClick}
      >
        Add
      </Button>
    </div>
  )
}

export default ToDoHeader
