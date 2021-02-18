<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center"><h1>Nr</h1></th>
          <th class="text-center"><h1>Task name</h1></th>
          <th class="text-center"><h1>Status</h1></th>
          <th class="text-center"><h1>Edit</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr class="trMain">
          <td></td>
          <td>
            <v-text-field
              type="text"
              class="form-control"
              name="filterName"
            ></v-text-field>
          </td>
          <td>
            <v-select
              :items="items"
              filled
              label="Filled style"
              name="filterStatus"
            >
            </v-select>
          </td>
          <td></td>
        </tr>
        <tr v-for="(task, index) in tasks" :key="task.id">
          <td><h2>{{ index + 1 }}</h2></td>
          <td><h2>{{ task.name }}</h2></td>
          <td class="text-center">
            <v-btn v-if="task.status === 'Active'" color="success" @click="updateStatus(index)">{{
              task.status
            }}</v-btn>
            <v-btn v-else color="error" @click="updateStatus(index)"> {{ task.status }}</v-btn>
          </td>
          <td class="text-center">
            <v-btn
              color="rgba(255, 204, 51)"
              elevation="2"
              @click="updateTask(index)"
            >
              <i class="fa fa-edit mr-1"></i> Edit
            </v-btn>
            &nbsp;
            <v-btn
              color="rgba(255, 51, 51)"
              elevation="2"
              @click="deleteTask(index)"
            >
              <i class="fa fa-trash mr-1"></i> Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: () => ({
      items: ['Active', 'Stop'],
    }),
  props: {
    tasks: Array
  },
  methods: {
    updateStatus(index){
      this.$emit("updateStatus", this.tasks[index].id);
    },
    deleteTask(index) {
      this.$emit("deleteTask", this.tasks[index].id);
    },
    updateTask(index) {
      this.$store.commit('openTask')
      $nuxt.$emit("editTask", this.tasks[index]);
    }
  }
};
</script>

<style></style>
