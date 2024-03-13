<template>
    <button class="consultar" @click="consultar()">Consultar</button>
    <div class="tabla">
      <table>
        <thead>
          <tr>
            <th>CÓDIGO</th>
            <th>NOMBRE</th>
            <th>ACCIÓN</th>
            <th>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="index">
            <td>{{ producto.codigoBarras }}</td>
            <td>{{ producto.nombre }}</td>
    
            <td>
              <button @click="actualizar(producto.links[0]['href'])">
                Actualizar
              </button>
            </td>
            <td>
              <button @click="borrar(producto.links[0]['href'])">
               Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 v-if="eliminado">¡Se ha eliminado correctamente el producto!👌</h1>
  </template>
  
  <script>
  import{buscarProductosFachada} from "@/helpers/clienteProducto.js";
  import{eliminarProductoFachada} from "@/helpers/clienteProducto.js";


  export default {
    data() {
      return {
        eliminado: false,
        productos: [],
      };
    },
    updated() {
    this.consultar();
  },
    methods: {
      async consultar() {
        this.productos = await buscarProductosFachada();
        console.log(this.productos);
      },
      actualizar(link) {
        this.eliminado = false;
        console.log("enviando: " + link);
        this.$emit("url", link);
      },
      async borrar(link) {
        console.log(link);
        await eliminarProductoFachada(link);
        const index = this.productos.findIndex(
          (producto) => producto.links[0]["href"] === link
        );
        if (index !== -1) {
          this.productos.splice(index, 1);
        }
        this.eliminado = true;
      },
    
    },
  };
  </script>
 
 <style scoped>
 .consultar {
   font-size: 3vmin;
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
 .tabla {
   margin-top: 3%;
   display: grid;
   width: 100%;
   border-collapse: collapse;
   justify-content: center;
 }
 td {
   border: 1.5px solid #7e8d85;
   padding: 8px;
   text-align: center;
   font-size: 2.5vmin;
   border-radius: 8px;
 }
 th {
   background-color: #3c493f;
   padding: 8px;
   font-size: 2.5vmin;
   text-align: center;
   color: white;
   border-radius: 8px;
 }
 </style>


  
  
