<template>
  <div class="container">
  <FormularioProductoVue></FormularioProductoVue>
</div>
</template>

<script>
import FormularioProductoVue from '@/components/FormularioProducto.vue'

export default {
    components: {
  FormularioProductoVue
  }
}
</script>

<style scoped>
.container {
  padding-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
}
</style>