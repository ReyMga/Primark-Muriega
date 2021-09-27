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
    description: "Ver detalle del producto",
    price: "75000",
    imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/lenovo_57318980_c355_desktop_computer_1004529.jpg",
  }];
  var x = await resolveAfter2Seconds(items);
  return x;
}