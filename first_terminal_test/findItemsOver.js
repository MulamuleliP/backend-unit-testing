export default function findItemsOver(products, threshold) {
    return products.filter(product => product.qty > threshold);
}