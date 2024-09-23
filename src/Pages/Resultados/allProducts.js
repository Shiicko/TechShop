export const productos = [
  {
    id: 1,
    img: "/mouse.png",
    nombre: "Mouse Gaming RGB",
    descripcion:
      "Mouse con iluminación RGB ajustable y alta precisión para juegos.",
    precio: 49.099,
    categoria: "Mouse",
  },
  {
    id: 2,
    img: "/mouse1.png",
    nombre: "Mouse Ergonómico",
    descripcion: "Mouse ergonómico con diseño cómodo para uso prolongado.",
    precio: 29.099,
    categoria: "Mouse",
  },
  {
    id: 3,
    img: "/teclado.png",
    nombre: "Teclado Mecánico RGB",
    descripcion:
      "Teclado mecánico con retroiluminación RGB y teclas programables.",
    precio: 40.099,
    categoria: "Teclado",
  },
  {
    id: 4,
    img: "/teclado2.png",
    nombre: "Teclado Compacto",
    descripcion:
      "Teclado compacto con diseño minimalista y teclas silenciosas.",
    precio: 39.099,
    categoria: "Teclado",
  },
  {
    id: 5,
    img: "/headset.png",
    nombre: "Auriculares Inalámbricos",
    descripcion:
      "Auriculares inalámbricos con excelente calidad de sonido y batería duradera.",
    precio: 46.099,
    categoria: "Auriculares",
  },
  {
    id: 6,
    img: "/headset2.png",
    nombre: "Auriculares con Micrófono",
    descripcion: "Auriculares con micrófono integrado y control de volumen.",
    precio: 44.099,
    categoria: "Auriculares",
  },
  {
    id: 7,
    img: "/silla.png",
    nombre: "Silla Gaming Ergonómica",
    descripcion:
      "Silla gaming ergonómica con soporte lumbar y reposabrazos ajustables.",
    precio: 159.99,
    categoria: "Silla",
  },
  {
    id: 8,
    img: "/silla2.png",
    nombre: "Silla Gaming con Soporte Lumbar",
    descripcion:
      "Silla gaming con soporte lumbar y diseño ajustable para mayor comodidad.",
    precio: 139.99,
    categoria: "Silla",
  },
  {
    id: 9,
    img: "/monitor.png",
    nombre: "Monitor 144Hz",
    descripcion:
      "Monitor con frecuencia de actualización de 144Hz para una experiencia visual fluida.",
    precio: 219.99,
    categoria: "Monitor",
  },
  {
    id: 10,
    img: "/monitor2.png",
    nombre: "Monitor Curvo 4K",
    descripcion:
      "Monitor curvo 4K con alta resolución y ángulo de visión envolvente.",
    precio: 349.99,
    categoria: "Monitor",
  },
  {
    id: 11,
    nombre: "Intel I7",
    descripcion:
      "Procesador de alto rendimiento con múltiples núcleos, ideal para tareas intensivas y juegos exigentes.",
    img: "/pc1.png",
    precio: 549.999,
  },
  {
    id: 12,
    nombre: "Amd Ryzen 5 4600g",
    descripcion:
      "Procesador de 6 núcleos con gráficos integrados para buen rendimiento en juegos y multitarea.",
    img: "/pc2.png",
    precio: 602.699,
  },
  {
    id: 13,
    nombre: "Ryzen 7 5700g",
    descripcion:
      "Procesador de 8 núcleos con gráficos integrados para alto rendimiento en juegos y multitarea.",
    img: "/pc3.png",
    precio: 895.599,
  },
  {
    id: 14,
    nombre: " Amd Ryzen 3 3200g",
    descripcion:
      " Procesador de 4 núcleos ideal para tareas básicas y juegos ligeros, con buen rendimiento a un precio accesible.",
    img: "/pc4.png",
    precio: 280.999,
  },
  {
    id: 15,
    nombre: "Intel I5 10400",
    descripcion:
      "Procesador de 6 núcleos con buen rendimiento para juegos y multitarea a un precio competitivo.",
    img: "/pc5.png",
    precio: 5020.299,
  },
];

export const totalProductos = productos.length;

export const Productos = productos.reduce((acc, producto) => {
  if (!acc[producto.categoria]) {
    acc[producto.categoria] = [];
  }
  acc[producto.categoria] = [...acc[producto.categoria], producto];

  return acc;
}, {});
