import { createApp } from "vue";
import { createStore } from "vuex";

import taskApi from "../api/taskApi";

const store = createStore({
  state: {
    todos: [
      {
        id: 0,
        content: "Task 1",
        complete: false,
        contenteditable: false,
      },
      {
        id: 2,
        content: "Task 2",
        complete: false,
        contenteditable: false,
      },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addTodo: function (state, valueTodo) {
      if (state.todos.length > 0) {
        var id = state.todos.slice(-1)[0].id + 1;
      }
      state.todos.push({
        id: id || 1,
        content: valueTodo,
      });
    },
    delTodo: function (state, idTodo) {
      const indexTodo = state.todos.indexOf(store.getters.thisTodo(idTodo));

      state.todos.splice(indexTodo, 1);
    },
    toggleContenteditable: function (state, idTodo) {
      const indexTodo = state.todos.indexOf(store.getters.thisTodo(idTodo));

      state.todos[indexTodo].contenteditable =
        !state.todos[indexTodo].contenteditable;
    },
  },
  getters: {
    thisTodo: (state) => (idTodo) => {
      return state.todos.find((todo) => todo.id === idTodo);
    },
  },
  actions: {
    // async increment({ commit }) {
    //   // commit("increment");
    //   // console.log("action");

    //   // fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) =>
    //   //   res.json().then((data) => console.log(data))
    //   // );

    //   // commit("addTodo");

    //   try {
    //     // const data = await axiosApi.get(`posts`);
    //     // console.log(data);

    //     const data = await taskApi.createTask({ content: "abc" });
    //     console.log(data);
    //     commit("addTodo");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    async createTask({ commit, state }, payload) {
      try {
        const data = await taskApi.createTask(payload);
        console.log(data);
        console.log(payload);
      } catch (error) {}
    },
  },
});

export default store;
