<template>
  <div class="container">
    <ListaProductos @url="url"></ListaProductos>
    <VistaProducto :url="datos"></VistaProducto>
  </div>
</template>

<script>
import VistaProducto from "@/components/VistaProducto.vue";
import ListaProductos from "@/components/ListaProductos.vue";

export default {
  components: {
    VistaProducto,
    ListaProductos,
  },
  data() {
    return {
      datos: null,
    };
  },
  methods: {
    url(data) {
      this.datos = data;
      console.log("EN LA PAGINA TENEMOS EL HATEOAS: ", data);
    },
  },
};
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>