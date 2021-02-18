<template>
  <v-app>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <v-main>
      <v-container>
        <v-row class="mb-6" no-gutters>
          <v-col cols="12" :md="8" v-if="isDisplayForm">
            <task-form @submitTask="submitTask"></task-form>
          </v-col>
          <v-col cols="12" :md="isDisplayForm ? '4' : '12'">
            <add-task></add-task>
          </v-col>
        </v-row>
        <v-row>
          <control></control>
          <hr />
        </v-row>
        <v-row>
          <task-list
            :tasks="tasks"
            @deleteTask="deleteTask"
            @updateStatus="updateStatus"
          ></task-list>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AddTask from "../components/index/AddTask";
import Control from "../components/index/Control.vue";
import TaskList from "../components/index/TaskList.vue";
import TaskForm from "../components/index/TaskForm.vue";
export default {
  components: {
    "add-task": AddTask,
    control: Control,
    "task-list": TaskList,
    "task-form": TaskForm
  },
  data: function() {
    return {
      tasks: []
    };
  },
  computed: {
    isDisplayForm() {
      return this.$store.state.isDisplayForm;
    }
  },
  mounted() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasksJSON = JSON.parse(localStorage.getItem("tasks"));
      this.tasks = tasksJSON;
    }
  },
  methods: {
    submitTask(taskItem) {
      if (
        taskItem.id === "" &&
        taskItem.name !== "" &&
        taskItem.status !== ""
      ) {
        taskItem.id = this.generateID();
        this.tasks.push(taskItem);
      } else if (taskItem.id !== "") {
        let index = this.findIndex(taskItem.id);
        this.tasks.splice(index, 1);
        this.tasks.push(taskItem);
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.isDisplayForm = false;
      console.log(this.tasks);
    },
    deleteTask(taskID) {
      let index = this.findIndex(taskID);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    updateStatus(taskID) {
      let index = this.findIndex(taskID);
      if (index !== -1) {
        if (this.tasks[index].status === "Active") {
          this.tasks[index].status = "Stop";
        } else {
          this.tasks[index].status = "Active";
        }
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    findIndex(id) {
      var result = -1;
      this.tasks.forEach((task, index) => {
        if (task.id === id) {
          return (result = index);
        }
      });
      return result;
    },
    generateID() {
      return (
        this.s4() +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4()
      );
    },
    s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  }
};
</script>

<style>
.HeaderText {
  position: absolute;
  margin-top: -40px;
  margin-left: 480px;
}

.jumbotron {
  background-color: #37b992;
  height: 100px;
  position: relative;
}
</style>
