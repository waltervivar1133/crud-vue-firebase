import Vue from 'vue'
import Vuex from 'vuex'
import {
  db
} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  /* nuestros datos */
  state: {
    //cramos un array vacio para llenarlo con el action 
    tareas: []
  },
  //los que modifican el state
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    }
  },
  // consulta a la bd
  actions: {

    getTareas({
      commit
    }) {
      const tareas = []
      db.collection('tareas').get()
        .then(res => {
          res.forEach(doc => {
            // console.log(doc.id);
            // console.log(doc.data());
            // creamos un objeto
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          })
          commit('setTareas', tareas)
        })
    }
  },

  modules: {}
})
