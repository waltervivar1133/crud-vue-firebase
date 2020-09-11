<template>
  <div>
    <h1>Editar</h1>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

