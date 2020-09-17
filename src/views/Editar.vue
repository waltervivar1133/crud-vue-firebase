<template>
  <div>
    <h1>Editar</h1>
<!-- 
    <p>{{tarea.id}} - {{tarea.nombre}}</p> -->
    <form class="form-inline"  @submit.prevent="editarTarea(tarea)">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            Editar tarea
          </div>
        </div>
        <input type="text" v-model="tarea.nombre">
      </div>

      <button class="btn btn-primary ml-5" type="submit">Editar</button>
    </form>
  </div>
</template>

<script>

import {mapActions ,mapState} from 'vuex'

export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTarea(this.id)
  },
  methods : {
    ...mapActions(['getTarea', 'editarTarea'])
  },

  computed : {
    ...mapState(['tarea']),
    
  }
};
</script>

