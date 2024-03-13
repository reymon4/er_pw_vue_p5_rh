<template>
  <div v-if="mostrar" class="formulario">
    <form>
      <label for="codigoBarras">Código de Barras</label>
      <input type="text" v-model="codigoBarras"  @click="restaurar"/>
      <label for="nombre" @click="restaurar">Nombre</label>
      <input type="text" v-model="nombre" />
      <label for="stock" >Stock</label>
      <input type="number" v-model="stock"  @click="restaurar"/>
      <label for="fechaCaducidad" >Fecha de Caducidad</label>
      <input type="datetime-local" v-model="fechaCaducidad"  @click="restaurar"/>
      <button @click="actualizar">Actualizar</button>
    </form>
  </div>
</template>

<script>
import { buscarProductoFachada, actualizarProductoFachada } from "@/helpers/clienteProducto.js";

export default {
  props: {
    url: {
      type: String,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      codigoBarras: null,
      nombre: null,
      stock: null,
      fechaCaducidad: null,
      mostrar: false,
    };
  },
  updated() {
    this.consultar();
  },
  methods: {
    async consultar() {
      if (this.url !== null) {
        const data = await buscarProductoFachada(this.url);
        this.codigoBarras = data.codigoBarras;
        this.nombre = data.nombre;
        this.stock = data.stock;
        this.fechaCaducidad = data.fechaCaducidad;
        this.mostrar = true;
        console.log("Hateoas recibido:", this.url);
       
      }
    },
    async actualizar() {
      const productoBody = {
        nombre: this.nombre,
        codigoBarras: this.codigoBarras,
        stock: this.stock,
        fechaCaducidad: this.fechaCaducidad,
      };
      await actualizarProductoFachada(productoBody);
      console.log(productoBody);
      console.log("Producto Actualizado!");
    },
    restaurar(){
        this.nombre=null;
        this.stock=null;
        this.fechaCaducidad=null;
    }
  },
};
</script>


<style scoped>
.formulario {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2%;
  width: 15%;
}
label {
  text-align: flex-start;
  font-size: 3vmin;
  margin-top: 3%;
}
input {
  border-radius: 6px;
  width: 100%;
  margin-top: 3%;
  font-size: 2.5vmin;
}
button {
   margin-top: 2%;
   align-items: center;
   border-radius: 8px;
   font-size: 2vmin;
   background: #a2e3c4;
   border-color: #a2e3c4;
   color: white;
 }
</style>

  