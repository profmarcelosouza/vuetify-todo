import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [
            { id: "1", title: "Cortar o cabelo", done: false },
            { id: "2", title: "Fazer a barba", done: false },
            { id: "3", title: "Almoçar com amigos", done: false },
            { id: "4", title: "Marcar banho para o Pet", done: false },
        ]
    },
    getters: {},
    mutations: {
        addTask(state, task) {
            if (task) {
                state.tasks.push({
                    id: new Date().getTime(),
                    title: task,
                    done: false,
                });
            }
        },
        removeTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id)
        }
    },
    actions: {},
    modules: {}
})