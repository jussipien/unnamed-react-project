// export const setTodos = (id) => {
//   return async dispatch => {
//     dispatch({
//       type: 'SET_TODOS',
//       data: todoObjects
//     })
//   }
// }

export const toggleTodo = (id) => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_TODO',
      data: id
    })
  }
}

export const newTodo = (todoObject) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_TODO',
      data: todoObject
    })
  }
}

const todoReducer = (state = [], action) => { 
  switch (action.type) {
    case 'TOGGLE_TODO':
      const stateCopy = [...state]
      const index = stateCopy.findIndex[action.data]
      let object =  stateCopy[index]
      object.toggled = !object.toggled
      stateCopy[index] = object
      return [stateCopy]

    case 'NEW_TODO':
      return [...state, action.data]
    default: return state
  }
}

export default todoReducer