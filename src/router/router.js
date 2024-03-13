import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
      path: "/crear",
      component: ()=>import ("@/pages/CrearProducto.vue"),
    },
    {
      path: "/buscar",
      component:  ()=>import ("@/pages/ConsultarProductos.vue"),
    },

  {
    path:"/:pathMatch(.*)*",
    component: ()=>import ("@/pages/NoFoundPage.vue"),
  }
  
  ];
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  }); 
  export default router;

