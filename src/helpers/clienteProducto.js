import axios from "axios";
const insertarProducto = async (body) => {
  axios
    .post(`http://localhost:8082/API/v1.0/Inventario/productos`, body)
    .then((r) => r.data);
};

const buscarProductos= async () => {
  const data = axios
    .get(`http://localhost:8082/API/v1.0/Inventario/productos`)
    .then((r) => r.data);
  return data;
};
const actualizarProducto = async (body) => {
  axios
    .put(`http://localhost:8082/API/v1.0/Inventario/productos`, body)
    .then((r) => r.data);
};

const buscarProducto = async (url) => {
  const data = axios.get(`${url}`).then((r) => r.data);
  console.log(data);
  return data;
};
const eliminarProducto = async (url) => {
  axios.delete(`${url}`).then((r) => r.data);
};

export const insertarProductoFachada = async (body) => {
  return await insertarProducto(body);
};
export const buscarProductosFachada = async () => {
  return await buscarProductos();
};


export const eliminarProductoFachada = async (url) => {
  return await eliminarProducto(url);
};
export const buscarProductoFachada = async (url) => {
  return await buscarProducto(url);
};
export const actualizarProductoFachada = async (body) => {
  return await actualizarProducto(body);
};

