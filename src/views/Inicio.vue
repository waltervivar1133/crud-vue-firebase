<template>
  <div>
    <h2>Inicio</h2>
    <router-link to="/agregar">
      <button>Agregar</button>
    </router-link>
    
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
        {{item.nombre}} ---
        {{item.id}}
        <router-link :to="{name : 'Editar' , params :{id : item.id}}">
          <button>Editar</button>
        </router-link>
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
    ...mapActions(["getTareas"]),
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>

