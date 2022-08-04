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
}
</script>

<template>
  <div class="practice2-container">
    <div class="input-container">
      <input v-model="taskInput" ref="taskInput" />
      <button @click="createTask(taskInput)">ADD</button>
    </div>

    <div
      class="list-container"
      v-for="(task, index) in this.$store.state.tasks"
    >
      <ul>
        <li class="list-item">
          <span
            ref="contentRef"
            v-if="task.id != contentEditId.id"
            class="content"
            >{{ task.content }}</span
          >

          <input class="edit" v-else v-model="taskEdit.content" />

          <div class="icon-container">
            <span
              class="icon"
              v-if="task.id != contentEditId.id"
              @click="edit(task.id)"
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </span>
            <span class="icon" v-else @click="save(task.id)">
              <font-awesome-icon icon="fa-solid fa-floppy-disk" />
            </span>

            <span class="icon" @click="delTask(task.id)">
              <Delete />
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskInput: "",

      taskEdit: "",

      contentEditId: { status: false, id: "" },
    };
  },

  created() {
    this.$store.dispatch("initTask");
    console.log(this.$store.state);
    console.log(this.taskEdit);
  },

  methods: {
    createTask(payload) {
      if (this.taskInput.trim() !== "") {
        this.taskInput = "";
        this.$refs.taskInput.focus();
        this.$store.dispatch("createTask", { content: payload });
      }
    },

    delTask(payload) {
      this.$store.dispatch("delTask", payload);
    },

    edit(id) {
      const taskEdit = this.$store.state.tasks.find((task) => task.id === id);
      console.log("taskedit", taskEdit);

      this.taskEdit = taskEdit;
      this.contentEditId.status = true;
      this.contentEditId.id = id;
    },

    save(id) {
      this.contentEditId.status = false;
      this.contentEditId.id = null;
      const payload = {
        id: id,
        content: this.taskEdit,
      };
      this.$store.dispatch("updateTask", payload);
    },
    // ...mapActions(["createTask"]),
  },
};
</script>

<style lang="scss">
.practice2-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input-container {
  display: flex;
  width: 100%;

  margin-bottom: 20px;
  input {
    flex: 1;
    margin-right: 10px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;
    outline: 1px solid #777;
  }
  input:focus {
    outline: 1px solid rgb(55, 189, 212);
  }

  button {
    padding: 0.6rem 1rem;
    border-radius: 10px;
    border: 1px solid #777;
  }
}

.list-container {
  width: 100%;
  ul {
    padding-left: 0;
  }
  .list-item {
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 3px 1px rgba($color: #000000, $alpha: 0.05);
    padding: 10px 10px;
    .content {
      padding: 6px 10px;
    }
    .edit {
      padding: 4px 10px;
      font-size: 1rem;
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
