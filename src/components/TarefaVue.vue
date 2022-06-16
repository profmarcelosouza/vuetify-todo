<template>
  <div>
    <v-list-item
      :class="{ 'purple lighten-3': task.done }"
      
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ task.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="">
            <v-icon color="teal darken-1">mdi-clipboard-edit</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon @click.stop="usesRemoveTask(task.id)">
            <v-icon color="red darken-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
  usesRemoveTask(id) {
      this.$store.commit("removeTask", id);
    },
  },
};
</script>

<style>
</style>