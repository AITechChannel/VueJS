<script setup>
import Delete from "vue-material-design-icons/Delete.vue";
import Menu from "vue-material-design-icons/Menu.vue";

components: {
  Delete;
  Menu;
}
</script>

<template>
  <div>
    <div><button @click="increment()">Click</button></div>
    <h1>{{ this.$store.state.count }}</h1>

    <div>
      <input v-model="todoInput" ref="todoInput" />
      <button @click="addTodo(todoInput)">ADD</button>
    </div>

    <div v-for="todo in this.$store.state.todos">
      <ul>
        <li @click="delTodo(todo.id)">{{ todo.content }}</li>
        <span><Menu /></span>
        <span><Delete /></span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeData: 0,
      todoInput: "",
    };
  },

  methods: {
    increment() {
      this.$store.commit("increment");
      this.storeData = this.$store.state.count;
    },
    addTodo(valueTodo) {
      this.$store.commit("addTodo", valueTodo);
      console.log(this.$store.state);
      this.todoInput = "";
      this.$refs.todoInput.focus();
    },
    delTodo(id) {
      this.$store.commit("delTodo", id);
    },
  },
};
</script>

<style>
button {
  width: 50px;
  height: 50px;
}
</style>
