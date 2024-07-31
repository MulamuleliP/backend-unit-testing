export default function findItemsOver20(objects){
    return objects.filter(product => product.qty > 20);
  }