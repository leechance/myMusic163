export default {
  todoReducer(state = [], { type, data }) {
    switch (type) {
      case "ADD_ITEM":
        return [...state, data]
      case "DEL_ITEM":
        state.splice(data, 1);
        return state
      default:
        return state
    }
  }
};