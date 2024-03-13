<template>
  <div class="formulario">
    <label for="">Código de Barras</label>
    <input type="text" v-model="codigoBarras" @click="ingreso = false" />
    <label for="">Nombre</label>
    <input type="text" v-model="nombre" @click="ingreso = false" />
    <label for="">Stock</label>
    <input type="number" v-model="stock" @click="ingreso = false" />
    <label for="">Fecha de Caducidad</label>
    <input type="datetime-local" v-model="fechaCaducidad" @click="ingreso = false" />
    <button @click="guardar()">Guardar</button>
    <h1 v-if="ingreso">¡Se ha ingresado correctamente el producto!👌</h1>
  </div>
</template>

<script>
import{insertarProductoFachada} from "@/helpers/clienteProducto.js";
export default {
    data(){
        return{
            codigoBarras:null,
            nombre: null,
            stock: null,
            fechaCaducidad: null,
            ingreso:false,
        }
    },
    methods:{
        async guardar(){
        const productoBody={
            nombre: this.nombre,
            codigoBarras:this.codigoBarras,
            stock: this.stock,
            fechaCaducidad: this.fechaCaducidad,
        };
        await  insertarProductoFachada(productoBody);
        this.restaurar();
        console.log(productoBody)
        console.log("ProductoIngresado!")

    }, 
    restaurar(){
        this.ingreso=true;
        this.codigoBarras=null;
        this.nombre=null;
        this.stock=null;
        this.fechaCaducidad=null;
    }
  }
}

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
button{
      margin-top: 10%;
     align-items: center;
     border-radius: 8px;
     font-size: 3vmin;
     background: #A2E3C4;
     border-color: #A2E3C4;
     color:white;
  }
  
</style>