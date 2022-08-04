<script setup>
import Delete from "vue-material-design-icons/Delete.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faPenToSquare,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { mapActions } from "vuex";

/* add icons to the library */
library.add(faUserSecret, faPenToSquare, faFloppyDisk);

components: {
  Delete;

  // FontAwesomeIcon;
}
</script>

<template>
  <div>
    <div class="input-container">
      <input v-model="todoInput" ref="todoInput" />
      <button @click="createTask(todoInput)">ADD</button>
    </div>

    <div class="list-container" v-for="todo in this.$store.state.todos">
      <ul>
        <li class="list-item">
          <span
            ref="contentRef"
            class="content"
            :contenteditable="todo.contenteditable"
            >{{ todo.content }}</span
          >

          <div class="icon-container">
            <span
              class="icon"
              v-if="todo.contenteditable"
              @click="setContenteditable(todo.id)"
            >
              <font-awesome-icon icon="fa-solid fa-floppy-disk" />
            </span>

            <span class="icon" v-else @click="setContenteditable(todo.id)">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </span>

            <span class="icon" @click="delTodo(todo.id)">
              <Delete />
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div><button @click="increment()">Increase</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoInput: "",
    };
  },

  methods: {
    createTask(valueTodo) {
      if (this.todoInput.trim() !== "") {
        this.$store.commit("addTodo", valueTodo);
        console.log(this.$store.state);
        this.todoInput = "";
        this.$refs.todoInput.focus();
        this.$store.dispatch("createTask", { content: valueTodo });
      }
    },
    delTodo(id) {
      this.$store.commit("delTodo", id);
    },
    setContenteditable(id) {
      this.$store.commit("toggleContenteditable", id);
      this.$refs.contentRef.focus();
    },
    // ...mapActions(["createTask"]),
  },
};
</script>

<style lang="scss">
.input-container {
  display: flex;
  margin-bottom: 20px;
  input {
    flex: 1;
    margin-right: 10px;
    padding: 0 10px;
    border-radius: 10px;
    border: 1px solid #777;
    outline: none;
  }
  input:focus {
    border: 1px solid rgb(55, 189, 212);
  }

  button {
    padding: 0.6rem 1rem;
    border-radius: 10px;
    border: 1px solid #777;
  }
}

.list-container {
  ul {
    padding-left: 0;
  }
  .list-item {
    display: flex;
    align-items: center;

    .content {
      padding: 4px 10px;
    }
  }
}

.icon-container {
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
  }

  .icon:first-of-type {
    margin-right: 10px;
  }

  .icon:hover {
    color: #41b883;
    cursor: pointer;
  }
}
</style>
