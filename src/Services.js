
function resolveAfterXSeconds(x, time=200) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
      reject('Hubo un error en la comunicación');
    }, time);
  });
}

export async function getItems() {
  const items = [{
    id: 1,
    categoryId:1,
    title: "Notebook Lenovo",
    description: "Pantalla con gran impacto visual.Su pantalla LCD de 15.6 pulgadas y 1366x768 px de resolución te brindará colores más vivos.",
    price: "75000",
    imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/lenovo_57318980_c355_desktop_computer_1004529.jpg",
  }, 
  {
    id: 2,
    categoryId:1,
    title: "Notebook GAMER HP",
    description: "La Pavilion Gaming 16 Laptop será tu mejor aliada para jugar batallas épicas, con su poderoso procesador Intel® Core™ de 10ª generación y gráficos NVIDIA®",
    price: "149.999",
    imageUrl: "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/1/-/1-62-e1588931885978.jpg",
  }, 
  {
    id: 3,
    categoryId:2,
    title: "Iphone 12",
    description: "Apple iPhone 12 está equipado con un chipset Apple A14 Bionic (5 nm).",
    price: "180000",
    imageUrl: "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/2005692406671.jpg",
  },
  {
    id: 4,
    categoryId:2,
    title: "XIAOMI MI 11 LITE ",
    description: "Procesador Octa core. Resolucion FHD+ 2400 x 1080.",
    price: "74.999",
    imageUrl: "https://images.fravega.com/f500/3c377f225909ebc391b603193287b4a0.jpg",
  },
  {
    id: 5,
    categoryId:3,
    title: "Televisor Samsung",
    description: "50 pulgadas UHD 4K Smart TV RU7100",
    price: "100000",
    imageUrl: "https://images.samsung.com/is/image/samsung/ar-ru7100-un50ru7100gxzb-rperspectiveblack-184474304?$720_576_PNG$",
  },
  {
    id: 6,
    categoryId:3,
    title: "Smart Tv",
    description: "32 pulgadas",
    price: "26.999",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_659703-MLA45852829976_052021-V.jpg",
  }];
  var x = await resolveAfterXSeconds(items);
  return x;
}

export async function getItem(id){
  const items = await getItems();
  return items.find(x=>x.id==id);
}



export async function getCategories() {
  const category = [
    { id: 1, name: "Computadoras" },
    { id: 2, name: "Celulares" },
    { id: 3, name: "Televisores" },
  ];

  var x = await resolveAfterXSeconds(category, 200);
  return x;
}

export async function getCategory(id) {
  const category = await getCategories();
  return category.find((x) => x.id == id);
}


export async function getItemsByCategory(categoryId) {
  const products = await getItems();
  return products.filter((x) => x.categoryId == categoryId);
}
