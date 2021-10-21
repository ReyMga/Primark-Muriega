import { getFirestore } from "./firebase";

function resolveAfterXSeconds(x, time = 200) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
      reject("Hubo un error en la comunicación");
    }, time);
  });
}

export async function getItems() {
  const db = getFirestore();
  //Vamos a ir a la coleccion que yo quiero
  const itemCollection = db.collection("Items");
  try {
    let querySnapshot = await itemCollection.get();
    if (querySnapshot.size === 0) {
      console.log("No Hay resultados");
    }
    return querySnapshot.docs.map((doc) => doc.data());
  } catch(error) {
    console.log("Error al traer los items", error);
  }
}

export async function getItem(id) {
  const items = await getItems();
  return items.find((x) => x.id == id);
}

export async function getCategories() {
  const db = getFirestore();
  //Vamos a ir a la coleccion que yo quiero
  const categoryCollection = db.collection("Categories");
  try {
    let querySnapshot = await categoryCollection.get();
    if (querySnapshot.size === 0) {
      console.log("No Hay resultados");
    }
    return querySnapshot.docs.map((doc) => doc.data());
  } catch(error) {
    console.log("Error al traer categorías", error);
  }
}

export async function getCategory(id) {
  const category = await getCategories();
  return category.find((x) => x.id == id);
}

export async function getItemsByCategory(categoryId) {
  const products = await getItems();
  return products.filter((x) => x.categoryId == categoryId);;
}
