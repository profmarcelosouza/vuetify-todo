<template>
  <div>
    <v-row class="mt-2">
      <v-col cols="4">
        <v-text-field
          label="Digite a tarefa"
          placeholder="Placeholder"
          outlined
          v-model="task"
          @keyup.enter="useAddTask"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-list-item-group multiple active-class="">
          <div v-for="(task, index) in $store.state.tasks" :key="index">
            <TarefaVue :task="task" />
          </div>
        </v-list-item-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TarefaVue from "../components/TarefaVue";

export default {
  components: {
    TarefaVue,
  },
  data() {
    return {
      task: null,
    };
  },
  methods: {
    useAddTask() {
      this.$store.commit("addTask", this.task);
      this.task = null;
    },
  },
  updated() {
    console.log(this.tasks);
  },
};
</script>
