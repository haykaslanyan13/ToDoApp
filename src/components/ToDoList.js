import { Checkbox, List, ListItemButton, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import Filters from "./Filters"
import { useSelector, useDispatch } from "react-redux"
import { checkedOrUnchecked, deleteElement } from "../Redux/TodoSlice"
import { v4 as uuidv4 } from "uuid"
function ToDoList() {
  const toDoItems = useSelector((state) => state.toDo.toDoItems)
  const filter = useSelector((state) => state.toDo.filter)
  const dispatch = useDispatch()
  const check = (id) => {
    dispatch(checkedOrUnchecked(id))
  }
  const DeleteElem = (id) => {
    dispatch(deleteElement(id))
  }
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          borderWidth: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {toDoItems.length ? (
          <List sx={{ width: "100%", maxWidth: 700, bgcolor: "background.paper" }}>
            {toDoItems
              .filter((item) => {
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
              .map((item) => {
                return (
                  <ListItemButton
                    key={uuidv4()}
                    style={{ backgroundColor: "#A9A9A9", margin: 5 }}
                  >
                    <Checkbox
                      checked={item.done}
                      onChange={() => {
                        check(item.id)
                      }}
                      edge="start"
                    />
                    <ListItemText primary={`${item.text}`} />
                    <DeleteIcon onClick={() => DeleteElem(item.id)} />
                  </ListItemButton>
                )
              })}
          </List>
        ) : null}
      </div>
      <div style={{ display: "flex", justifyContent: "center", textAlign: "end" }}>
        <Filters />
      </div>
    </div>
  )
}

export default ToDoList
