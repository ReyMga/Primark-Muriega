
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

export async function getItems() {
  const items = [{
    id: 1,
    title: "Notebook Lenovo",
    description: "Pantalla con gran impacto visual.Su pantalla LCD de 15.6 pulgadas y 1366x768 px de resolución te brindará colores más vivos y definidos.",
    price: "75000",
    imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/lenovo_57318980_c355_desktop_computer_1004529.jpg",
  }, 
  {
    id: 2,
    title: "Iphone 12",
    description: "Apple iPhone 12 está equipado con un chipset Apple A14 Bionic (5 nm).",
    price: "180000",
    imageUrl: "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/2005692406671.jpg",
  }];
  var x = await resolveAfter2Seconds(items);
  return x;
}

export async function getItem(id){
  const items = await getItems();
  return items.find(x=>x.id==id);
}