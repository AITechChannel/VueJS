<script setup>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CheckCircleIcon from "vue-material-design-icons/CheckCircle.vue";

import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

import ListItem from "../components/ListItem.vue";

import { useMouse } from "../composables/mouse";

const { x, y } = useMouse();

const app = Vue.createApp();
app.use(VueAxios, axios);

components: {
  MenuIcon;
  CheckCircleIcon;
}
</script>

<template>
  <div class="container">
    <div class="option">
      <label for="check-option">Delete todo complete</label>
      <input
        id="check-option"
        type="checkbox"
        class="check-box"
        v-model="delToDo_Option"
      />
    </div>
    <div class="header">
      <input
        v-model="input"
        class="search"
        ref="input"
        @keydown.enter="addTodo()"
      />
      <button @click="addTodo()" class="btn--add">add</button>
    </div>

    <ul>
      <li
        v-for="item in todos"
        @click="handleToDo(item)"
        :class="[item.complete ? 'active' : null, 'list-item']"
      >
        <span :key="item.id">{{ item.name }}</span>
        <span class="check-circle" v-if="item.complete"
          ><CheckCircleIcon
        /></span>
      </li>
    </ul>
    <button @click="getList()">Fetch Api</button>

    <p>{{ data }}</p>

    <br />

    <div>
      <div>Picked: {{ picked }}</div>

      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>

      <button @click="console()">OK</button>
    </div>
    <div>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>
  </div>

  <div>
    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

  <div v-for="(item, index) in dataList">
    <ListItem
      :key="index"
      :title="item.title"
      :description="item.description"
      @select="console()"
      ><p>Try add</p></ListItem
    >
  </div>

  <div>Mouse coor at: {{ x }}, {{ y }}</div>
</template>

<script>
export default {
  data() {
    return {
      delToDo_Option: false,
      input: "",
      id: 1,
      todoType: [],
      picked: null,
      selected: null,
      checkedNames: [],
      todos: [],
      time: Date.now(),
      data: null,
      dataList: [
        { title: "abc", description: "xyz" },
        { title: "abc", description: "xyz" },
        { title: "abc", description: "xyz" },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.input.trim() != "") {
        this.todos.push({
          id: this.id++,
          name: this.input,
          complete: false,
        });
        this.input = "";
        this.$refs.input.focus();
        console.log(this.$refs.input);
      }
    },
    handleToDo(item) {
      if (this.delToDo_Option) {
        this.todos = this.todos.filter((todo) => todo.id != item.id);
      } else {
        const current = this.todos.find((todo) => todo.id === item.id);

        current.complete = !current.complete;
      }
    },

    increase() {
      this.count++;
    },

    getList() {
      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => {
          console.log(res.data);
          this.data = res.data;
        });
    },

    console() {
      console.log("click");
    },
  },

  computed: {
    now() {
      return Date.now();
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>

<style>
.container {
}

.option {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.header {
  display: flex;
}

.search {
  line-height: 40px;
  width: 400px;
  border-radius: 10px;
  border: 1px solid #333;
  margin-right: 10px;
  padding: 0 10px;

  outline: none;
}

input:hover {
  border: 1px solid rgb(111, 171, 223);
}
ul {
  padding-left: 10px;
}
.list-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
  justify-content: space-between;
}

.check-circle {
  color: rgb(4, 215, 215);
}

.btn--add {
  width: 50px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #333;
  text-transform: uppercase;
}

.btn--add:hover {
  cursor: pointer;
  background-color: aqua;
}

.active {
  text-decoration: line-through;
}
</style>
