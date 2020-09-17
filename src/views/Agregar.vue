<template>
  <div>
    <h2>Agregar</h2>

    <form class="form-inline" @submit.prevent="agregarTarea(nombre)">
      <!-- <input class="form-control" type="text" >
      <button class="btn btn-primary" type="submit"> Agregar</button>-->
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre de tarea</div>
        </div>
        <input type="text" class="form-control" v-model="nombre" />
      </div>
      <button type="submit" class="btn btn-primary ml-5">Agregar</button>
    </form>

  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["agregarTarea"]),
  },
};
</script>

<style>
</style>