<template>
    <v-btn color="primary" @click="transForm">
      <i class="fa fa-plus mr-2"></i>
      Add Task
    </v-btn>
</template>

<script>
export default {
  methods : {
    transForm() {
      this.$store.state.isDisplayForm = !this.$store.state.isDisplayForm;
    }
  }
};
</script>

<style></style>
