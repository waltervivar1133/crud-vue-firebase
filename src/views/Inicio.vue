<template>
  <div>
    <h2>List task</h2>
    <router-link to="/agregar">
      <button class="btn btn-success btn-block">Agregar</button>
      
    </router-link>
    
    <ul class="list-group mt-5">
      <li v-for="(item, index) in tareas" :key="index"
      class="list-group-item">
        Nombre de Tarea : <span class="badge badge-primary badge-pill">{{item.nombre}}</span>
        <div class="float-right">
           <router-link :to="{name : 'Editar' , params :{id : item.id}}" class="btn btn-warning btn-sm">
          Editar
          
        </router-link>
        <button class="btn btn-danger btn-sm ml-4" @click="eliminarTarea(item.id)">Eliminar</button>
        </div>
       
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"; // importante poner el {} en el import de mapactions

export default {
  name: "Inicio",
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>

