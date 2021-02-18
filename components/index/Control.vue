<template>
  <v-row>
    <v-col cols="12" md="6">
      <search></search>
    </v-col>
    <v-col cols="12" md="6">
      <sort></sort>
    </v-col>
  </v-row>
</template>

<script>
import Sort from "./Control/Sort";
import Search from "./Control/Search";
export default {
  components: {
    sort: Sort,
    search: Search
  }
};
</script>

<style></style>
