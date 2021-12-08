import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  toDoItems: [],
  toDoName: "",
  filter: "All",
}

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    inputValueChange: (state, action) => {
      state.toDoName = action.payload
    },
    addToDo: (state, action) => {
      if (action.payload.text) {
        state.toDoItems.push(action.payload)
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    checkedOrUnchecked: (state, action) => {
      const selectedElem = state.toDoItems.find((el) => el.id === action.payload)
      selectedElem.done = !selectedElem.done
    },
    deleteElement: (state, action) => {
      const selectedElemIndex = state.toDoItems.findIndex(
        (el) => el.id === action.payload
      )
      state.toDoItems.splice(selectedElemIndex, 1)
    },
    clearComplated: (state) => {
      const newtoDoItems = state.toDoItems.filter((elem) => !elem.done)
      state.toDoItems = newtoDoItems
    },
  },
})

export const {
  inputValueChange,
  addToDo,
  setFilter,
  checkedOrUnchecked,
  deleteElement,
  clearComplated,
} = toDoSlice.actions
export default toDoSlice.reducer
