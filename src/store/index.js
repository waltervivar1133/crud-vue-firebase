import Vue from 'vue'
import Vuex from 'vuex'
import {
  db
} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  /* nuestros datos */
  state: {
    //cramos un array vacio para llenarlo con el action 
    tareas: [],
    tarea: {
      nombre: '',
      id: ''
    }
  },
  //los que modifican el state
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
    setEliminarTarea(state, payload) {
      const filtrarTarea = state.tareas.filter(item => item.id !== payload);
      state.tareas = filtrarTarea;
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
    },
    getTarea({
      commit
    }, idTarea) {
      db.collection('tareas').doc(idTarea).get()
        .then(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea);
        })
    },
    editarTarea({
      commit
    }, tarea) {
      db.collection('tareas').doc(tarea.id).update({
          nombre: tarea.nombre
        })
        .then(() => {
          console.log('tarea editada')
          router.push('/inicio')
        })

    },

    agregarTarea({
      commit
    }, tarea) {
      db.collection('tareas').add({
          nombre: tarea
        })
        .then(doc => {
          console.log(doc.id);
          router.push('/inicio');
        })
    },

    eliminarTarea({
      commit,
      dispatch
    }, idTarea) {
      db.collection('tareas').doc(idTarea).delete()
        .then(() => {
          console.log('tarea eliminada');
          // dispatch(getTareas()); con este dispatch llamamos alguna funcion que tenemos creada
          commit('setEliminarTarea', idTarea)
        })
    }


  },

  modules: {}
})