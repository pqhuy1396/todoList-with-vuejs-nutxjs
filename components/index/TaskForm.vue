<template>
  <div class="around">
    <form>
      <div class="bodyForm">
        <div>
          <label>Task Name :</label> <br />
          <v-text-field v-model.lazy="task.name"></v-text-field>
        </div>
        <div>
          <label>Status:</label> <br />
          <v-radio-group column v-model.lazy="task.status">
            <v-radio color="success" label="Active" value="Active"></v-radio>
            <v-radio color="error" label="Stop" value="Stop"></v-radio>
          </v-radio-group>
        </div>
        <div>
            <v-btn color="success" @click.prevent="onSubmit">
              <i class="fa fa-save mr-2"></i> Save
            </v-btn>
          &nbsp;
            <v-btn color="error" @click.prevent="offTask">
              <i class="fa fa-ban mr-2"></i>Cancel
            </v-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      task: {
        id: "",
        name: "",
        status: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitTask", this.task);
      this.$store.commit('closeTask')
    },
    offTask() {
      this.$store.commit('closeTask')
    }
  },
  created() {
    this.$nuxt.$on("editTask", task => {
      this.task = task;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("editTask");
  }
};
</script>

<style>
.around {
  margin-top: 2px;
  border: 1px #b8d667 solid;
}

.bodyForm {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.buttonOnForm {
  margin-top: 20px;
  margin-left: 65px;
  margin-bottom: 20px;
}
</style>
