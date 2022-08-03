import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 0,
        content: "coding",
        complete: false,
      },
      {
        id: 2,
        content: "coding",
        complete: false,
      },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addTodo: function (state, valueTodo) {
      state.todos.push({
        id: state.todos.slice(-1)[0].id + 1,
        content: valueTodo,
      });
    },

    delTodo: function (state, idTodo) {
      const indexTodo = state.todos.indexOf(store.getters.thisTodo(idTodo));

      state.todos.splice(indexTodo, 1);
    },
  },
  getters: {
    thisTodo: (state) => (idTodo) => {
      return state.todos.find((todo) => todo.id === idTodo);
    },
  },
});

export default store;
